import { Component, Input, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { SearchResult } from 'src/app/models/SearchResult';
import { Episode } from 'src/app/models/Episode';
import { CharacterService } from 'src/app/services/character.service';
import { EpisodeService } from 'src/app/services/episode.service';
import { FirstEpisodeReference } from 'src/app/models/FirstEpisodeReference';
import { forkJoin, Observable } from 'rxjs';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})

export class SearchResultsComponent {

  @Input() searcherParams = {};
  searchResult = {} as SearchResult;
  selectedCharacter : Character = new Character();
  selectedLocationID : number = 0;
  showCharacterModal: boolean = false;
  showLocationModal: boolean = false;
  firstEpisodes : Episode [] = [];
  charactersFirstEpisodes : FirstEpisodeReference [] = [];

  paginatorNavInfo = {
    currentPage : 1,
    totalPages : 0,
    nextPage: 0,
    prevPage: 0,
  }


  constructor(
    private characterService : CharacterService ,
    private episodeService : EpisodeService
    ) { }


  ngOnChanges( changes : SimpleChange){
    this.paginatorNavInfo.currentPage = 1;
    this.searchCharacters();
  }

  paginatoreChange( newPage: string ){
    this.paginatorNavInfo.currentPage = Number(newPage);
    this.searchCharacters();
  }

  searchCharacters() {
    this.characterService.getCharacters(this.paginatorNavInfo.currentPage, this.searcherParams).subscribe((searchData) => {
      this.searchResult = searchData;
      this.updatePaginatorNavInfo();
      this.loadFirstCharacterFirstEpisode(this.searchResult);
    } ,
      error => {
        // no result data (api generate a 404 error)
        if (error.status === 404) {
          this.searchResult = { info: {
            count: 0,
            pages: 0,
            next: '',
            prev: ''
          },
          results : [] }
        }
        this.updatePaginatorNavInfo();
      }
    );
  }

  updatePaginatorNavInfo() {
    this.paginatorNavInfo.currentPage = 1;
    this.paginatorNavInfo.nextPage = 0;
    this.paginatorNavInfo.prevPage = 0;
    this.paginatorNavInfo.totalPages = this.searchResult.info.pages;
    const nextQueryString = this.searchResult.info.next;
    const prevQueryString = this.searchResult.info.prev;
    if (nextQueryString && nextQueryString !== "null") {
      const nextPageNumber = this.getPageFromQueryString(nextQueryString);
      this.paginatorNavInfo.currentPage = nextPageNumber - 1;
      this.paginatorNavInfo.nextPage = nextPageNumber;
    }
    if (prevQueryString  && nextQueryString !== "null" ) {
      const prevPageNumber = this.getPageFromQueryString(prevQueryString);
      this.paginatorNavInfo.currentPage = prevPageNumber + 1;
      this.paginatorNavInfo.prevPage = prevPageNumber;
    }
  }

  getPageFromQueryString(queryString: string ) : number {
    const halfQueryString = queryString.split("page=")[1];
    return Number(halfQueryString.split("&")[0]);
  }

  loadFirstCharacterFirstEpisode(searchData : SearchResult){
    if ( !searchData?.results ) {
      return;
    }
    this.charactersFirstEpisodes = [];
    searchData?.results.forEach(character => {
        const firstEpisode = character.episode[0];
        const firstEpisodeID = Number(firstEpisode.split("/").slice(-1)[0]);
        const characterID = character.id;
        const firsEpisodeReference : FirstEpisodeReference = {
          firstEpisodeID,
          characterID
        }
        this.charactersFirstEpisodes.push(firsEpisodeReference);
    });
    this.getFirstEpisodesData();
  }

  getFirstEpisodesData(){
    let firstEpisodesOfRequests : Observable<Episode> [] = [];
    const episodesIDList: number [] = [];
    this.charactersFirstEpisodes.forEach(episodeRefence => {
      const request = this.episodeService.getEpisode(episodeRefence.firstEpisodeID);
      if(!episodesIDList.includes(episodeRefence.firstEpisodeID)){
        episodesIDList.push(episodeRefence.firstEpisodeID);
        firstEpisodesOfRequests.push(request);
      }
    });
    forkJoin(firstEpisodesOfRequests).subscribe(data => {
      this.firstEpisodes = [...data];
    });
  }

  getFirstEpisodeName(characterID : number){
    const episodeReference = this.charactersFirstEpisodes.find(
      ref => ref.characterID === characterID
    );
    const firstEpisodeID = episodeReference?.firstEpisodeID;

    return this.firstEpisodes.find(episode => episode.id === firstEpisodeID)?.name;
  }

  onClickProfileImg(characterID : number){
    const character = this.searchResult.results.find( chr => chr.id === characterID);
    this.selectedCharacter = character ||  new Character();
    this.toggleCharacterModal(true);
  }

  onClickLocation(characterID : number){
    const character = this.searchResult.results.find( chr => chr.id === characterID);
    //getting location ID from location URL
    const locationID = Number(character?.location.url.split("/").slice(-1)[0]);
    this.selectedLocationID = locationID;
    this.toggleLocationModal(true);
  }

  toggleCharacterModal(data: any){
    this.showCharacterModal = Boolean(data);
  }

  toggleLocationModal(data: any){
    this.showLocationModal = Boolean(data);
  }

  toggleModals(data: any) {
    this.showCharacterModal = Boolean(data);
    this.showLocationModal =  Boolean(data);
  }

}
