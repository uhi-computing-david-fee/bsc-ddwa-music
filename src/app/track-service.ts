import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from '../environments/environment';
import { Track } from './models/track.model';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private http = inject(HttpClient);
  private tracks: Track[] = []; // central private store
  tracks$ = new BehaviorSubject<Track[]>([]); // Public data stream of tracks and changes

  // Fetch tracks on creation
  constructor() { this.getTracks(); }

  getTracks() {
    this.http.get<Track[]>(environment.apiUrl).subscribe({
      next: data => {
        this.tracks = data; // store local copy
        this.tracks$.next(this.tracks.slice()); // emit changes as a copy
      },
      error: err => {
        // Handle fetch errors here
      }
    });
  }

  addFavourite(id: number) {
    this.http.post<Track>(environment.apiUrl, {id, favourite: true}).subscribe({
      next: () => {
        // Find the track in our central array and set it favourite
        const track = this.tracks.find(track => track.id === id)!.favourite = true;

        // Notify all components
        this.tracks$.next([...this.tracks]);
      },
      error: () => {
        // handle error here
        this.tracks$.next(this.tracks.slice()); // flip back on error by emitting old
      }
    });
  }

  removeFavourite(id: number) {
    this.http.post<Track>(environment.apiUrl, {id, favourite: false}).subscribe({
      next: () => {
        // Find the track in our central array and set it favourite
        const track = this.tracks.find(track => track.id === id)!.favourite = false;

        // Notify all components
        this.tracks$.next(this.tracks.slice());
      },
      error: () => {
        // handle error here
        this.tracks$.next(this.tracks.slice()); // flip back on error by emitting old
      }
    });
  }

}