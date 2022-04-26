import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Episode } from '../models/Episode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private endPoint: string = `${environment.baseUrl}/episode`;
  constructor( private httpClient : HttpClient) { }

  getEpisode( episodeID: number) : Observable<Episode>{
    return this.httpClient.get<Episode>(`${this.endPoint}/${episodeID}`);
  }

  getEpisodes( episodesIDs: string ) : Observable<Episode []>{
    return this.httpClient.get<Episode[]>(`${this.endPoint}/${episodesIDs}`);
  }
}
