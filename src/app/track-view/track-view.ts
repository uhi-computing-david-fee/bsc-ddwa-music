import { Component, inject } from '@angular/core';
import { TrackList } from '../track-list/track-list';
import { Track } from '../models/track.model';
import { TrackService } from '../track-service';

@Component({
  selector: 'app-track-view',
  imports: [TrackList],
  templateUrl: './track-view.html',
  styleUrl: './track-view.scss',
})
export class TrackView {
  private trackService = inject(TrackService);

  tracks: Track[] = [];
  selectedGenre = 'All';

  ngOnInit() {
    this.trackService.getTracks().subscribe({
      next: tracks => {
        this.tracks = tracks;
      },
      error: error => {
        console.error(error);
      }
    });
  }

  filterByGenre(genre: string) {
    this.selectedGenre = genre; // set for class control
    
    this.trackService.getTracks().subscribe({
      next: tracks => {

        // Start with a fresh copy from the API
        this.tracks = tracks;

        // No filtering required
        if (genre === 'All') {
          return;
        }

        // Destructively remove tracks that don't match
        for (let i = this.tracks.length - 1; i >= 0; i--) {

          if (this.tracks[i].genre !== genre) {
            this.tracks.splice(i, 1);
          }

        }

      },
      error: error => {
        console.error(error);
      }
    });

  }
}
