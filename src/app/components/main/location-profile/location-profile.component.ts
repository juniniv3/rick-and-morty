import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { Location } from 'src/app/models/Location';
import { CharacterService } from 'src/app/services/character.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location-profile',
  templateUrl: './location-profile.component.html',
  styleUrls: ['./location-profile.component.scss']
})
export class LocationProfileComponent implements OnInit {

  @Input() locationID : number = 0;
  location: Location = new Location();
  residents: Character[] = [];
  constructor(
    private locationService : LocationService,
    private characterService : CharacterService) { }

  ngOnInit(): void {
    this.getLocationeData();
  }

  getLocationeData(){
    this.locationService.getLocation(this.locationID).subscribe(locationData =>{
      this.location =  locationData;
      this.loadResidents();
    });
  }

  loadResidents(){
    const listCharactersIDs =  this.location.residents.map( character => {
      return character.split('/').slice(-1)[0];
    })
    const listCharactersIDsString = listCharactersIDs.toString();
    if (listCharactersIDs.length > 1) {
        this.getResidentsData(false , listCharactersIDsString );
    } else {
      this.getResidentsData(true , listCharactersIDsString);
    }
  }

  getResidentsData(singleResident : boolean , residentsIDs : string){
    if (singleResident) {
      this.characterService.getCharacter(Number(residentsIDs)).subscribe(residentData =>{
        this.residents = [];
        this.residents.push(residentData);
        console.log(this.residents)
      });
    } else {
      this.characterService.getMultipleCharacters(residentsIDs).subscribe(residentsData => {
        this.residents = residentsData;
        console.log(this.residents)
      });
    }
  }
}
