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
    this.trackService.tracks$.subscribe({
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

    // grab fresh copy from retained value
    this.tracks = this.trackService.tracks$.value.slice(); 

    if (genre === 'All') { return; }

    // perform filter
    this.tracks = this.tracks.filter(t => t.genre == this.selectedGenre);
  }
}
