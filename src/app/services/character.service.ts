import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SearchResult } from '../models/SearchResult';
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private endPoint: string = `${environment.baseUrl}/character`;

  constructor(private httpClient : HttpClient) { }

    getCharacter(characterID : number): Observable<Character> {
      return this.httpClient.get<Character>(`${this.endPoint}/${characterID}`);
    }

    getCharacters(page :number , searchParams: {}): Observable<SearchResult>{
      const params = new HttpParams({
        fromObject: searchParams
      });
      return this.httpClient.get<SearchResult>(`${this.endPoint}/?page=${page}`,{params});
    }

    getMultipleCharacters(charactersIDs : string): Observable<Character[]> {
      return this.httpClient.get<Character[]>(`${this.endPoint}/${charactersIDs}`);
    }
}
