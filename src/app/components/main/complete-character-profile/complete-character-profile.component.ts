import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { Episode } from 'src/app/models/Episode';
import { EpisodeService } from 'src/app/services/episode.service';

@Component({
  selector: 'app-complete-character-profile',
  templateUrl: './complete-character-profile.component.html',
  styleUrls: ['./complete-character-profile.component.scss']
})
export class CompleteCharacterProfileComponent implements OnInit {

  @Input()character: Character = new Character();
  characterEpisodes : Episode [] = [];
  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.getCharacterEpisodes();
  }

  getCharacterEpisodes() {
    const listEpisodesIDs = this.character.episode.map( ep => {
      return ep.split("/").slice(-1)[0];
    });

    const listEpisodesIDsString = listEpisodesIDs.toString();
    if (listEpisodesIDs.length > 1) {
      //when character have multiple episodes
      this.episodeService.getEpisodes(listEpisodesIDsString).subscribe( episodesData =>{
        this.characterEpisodes = episodesData;
      });
    } else {
      // when the character have only one episode
      this.episodeService.getEpisode(Number(listEpisodesIDsString)).subscribe( episodeData => {
        this.characterEpisodes = [];
        this.characterEpisodes.push(episodeData);
      });
    }
  }
}
