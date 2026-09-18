import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Track } from './models/track.model';


@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private http = inject(HttpClient);

  getTracks(): Observable<Track[]> {
    return this.http.get<Track[]>(environment.apiUrl);
  }

  addFavourite(id: number): Observable<Track> {
    return this.http.post<Track>(environment.apiUrl, {id, favourite: true});
  }

  removeFavourite(id: number): Observable<Track> {
    return this.http.post<Track>(environment.apiUrl, {id, favourite: false});
  }

}