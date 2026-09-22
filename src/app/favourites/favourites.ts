import { Component, inject, OnInit } from '@angular/core';
import { Track } from '../models/track.model';
import { TrackService } from '../track-service';

@Component({
  selector: 'app-favourites',
  imports: [],
  templateUrl: './favourites.html',
  styleUrl: './favourites.scss',
})
export class Favourites implements OnInit {
  private trackService = inject(TrackService);

  favouriteTracks: Track[] = [];

  ngOnInit() {
    this.trackService.tracks$.subscribe({
      next: tracks => {
        this.favouriteTracks = tracks.filter(
          track => track.favourite
        );
      },
      error: error => {
        console.error(error);
      }
    });
  }

  onRemove(track: Track) {
  // Remove from local array immediately
    this.favouriteTracks = this.favouriteTracks.filter(favourite => favourite.id !== track.id);
    this.trackService.removeFavourite(track.id);
  }
}
