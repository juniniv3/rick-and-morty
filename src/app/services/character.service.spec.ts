import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Character } from '../models/Character';
import { CharacterService } from './character.service';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpClientSpy: { get : jasmine.Spy }

  beforeEach(() => {
    httpClientSpy =  jasmine.createSpyObj('HttpClient', ['get']);
    service = new CharacterService(httpClientSpy as any);
  });

  it('should create the Character service' , () => {
    expect(service).toBeTruthy();
  });

  it('should get the character with ID = 2 ',(done : DoneFn) => {
    const mockCharacter2 : Character = {
      "id": 2,
      "name": "Morty Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        // ...
      ],
      "url": "https://rickandmortyapi.com/api/character/2",
      "created": "2017-11-04T18:50:21.651Z"
    }

    httpClientSpy.get.and.returnValue(of(mockCharacter2));
    service.getCharacter(1).subscribe(character => {
        expect(character).toBe(mockCharacter2);
        done();
      }
    );
  })
});
