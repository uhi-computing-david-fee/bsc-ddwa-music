import { Component, inject, Input } from '@angular/core';
import { Track } from '../models/track.model';
import { TrackService } from '../track-service';

@Component({
  selector: 'app-track-list-item',
  imports: [],
  templateUrl: './track-list-item.html',
  styleUrl: './track-list-item.scss',
})
export class TrackListItem {

  @Input({ required: true }) track!: Track;
  @Input({ required: true }) position!: number;
  private trackService = inject(TrackService);

  
  toggleFavourite() {    
    // Already a favourtie - remove
    if (this.track.favourite) {
      this.track.favourite = false;
      this.trackService.removeFavourite(this.track.id).subscribe({
        next: () => {},
        error: () => { this.track.favourite = true } // revert on error
      });
    } 
    // Not a favourite - add
    else {
      this.track.favourite = true;
      this.trackService.addFavourite(this.track.id).subscribe({
        next: () => {},
        error: () => { this.track.favourite = false } // revert on error
      });
    }
  }

  formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}
