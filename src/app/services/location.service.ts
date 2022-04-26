import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '../models/Location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private baseURL = environment.baseUrl;
  private endPoint: string = `${environment.baseUrl}/location`;
  constructor(private httpClient : HttpClient) { }

  getLocation(locationID: number) : Observable<Location> {
    return this.httpClient.get<Location>(`${this.endPoint}/${locationID}`);
  }
}
