import { Component, Input } from '@angular/core';
import { TrackListItem } from '../track-list-item/track-list-item';
import { Track } from '../models/track.model';

@Component({
  selector: 'app-track-list',
  imports: [TrackListItem],
  templateUrl: './track-list.html',
  styleUrl: './track-list.scss',
})
export class TrackList {

  @Input() tracks: Track[] = [];

}
