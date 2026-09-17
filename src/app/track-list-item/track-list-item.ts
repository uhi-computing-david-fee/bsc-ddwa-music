import { Component, Input } from '@angular/core';
import { Track } from '../models/track.model';

@Component({
  selector: 'app-track-list-item',
  imports: [],
  templateUrl: './track-list-item.html',
  styleUrl: './track-list-item.scss',
})
export class TrackListItem {
  @Input({ required: true }) track!: Track;
  @Input({ required: true }) position!: number;

  formatDuration(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}
