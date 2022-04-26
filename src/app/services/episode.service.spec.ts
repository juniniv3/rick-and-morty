import { of } from 'rxjs';
import { Episode } from '../models/Episode';
import { EpisodeService } from './episode.service';

describe('EpisodeService', () => {
  let service: EpisodeService;
  let httpClientSpy: { get : jasmine.Spy }

  beforeEach(() => {
    httpClientSpy =  jasmine.createSpyObj('HttpClient', ['get']);
    service = new EpisodeService(httpClientSpy as any);
  });

  it('should create the Episode service' , () => {
    expect(service).toBeTruthy();
  });

  it('should get the episode with ID = 1 ',(done : DoneFn) =>{
    const mockEpisode1 : Episode = {
      "id": 1,
      "name": "Pilot",
      "air_date": "December 2, 2013",
      "episode": "S01E01",
      "characters": [
        "https://rickandmortyapi.com/api/character/1",
        "https://rickandmortyapi.com/api/character/2",
        "https://rickandmortyapi.com/api/character/35",
        "https://rickandmortyapi.com/api/character/38",
        "https://rickandmortyapi.com/api/character/62",
        "https://rickandmortyapi.com/api/character/92",
        "https://rickandmortyapi.com/api/character/127",
        "https://rickandmortyapi.com/api/character/144",
        "https://rickandmortyapi.com/api/character/158",
        "https://rickandmortyapi.com/api/character/175",
        "https://rickandmortyapi.com/api/character/179",
        "https://rickandmortyapi.com/api/character/181",
        "https://rickandmortyapi.com/api/character/239",
        "https://rickandmortyapi.com/api/character/249",
        "https://rickandmortyapi.com/api/character/271",
        "https://rickandmortyapi.com/api/character/338",
        "https://rickandmortyapi.com/api/character/394",
        "https://rickandmortyapi.com/api/character/395",
        "https://rickandmortyapi.com/api/character/435"
      ],
      "url": "https://rickandmortyapi.com/api/episode/1",
      "created": "2017-11-10T12:56:33.798Z"
    }

    httpClientSpy.get.and.returnValue(of(mockEpisode1));
    service.getEpisode(1).subscribe(episode => {
        expect(episode).toBe(mockEpisode1);
        done();
      }
    );
  })

});
