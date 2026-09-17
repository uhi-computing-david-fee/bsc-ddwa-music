import { Component } from '@angular/core';
import { TrackList } from '../track-list/track-list';

@Component({
  selector: 'app-track-view',
  imports: [TrackList],
  templateUrl: './track-view.html',
  styleUrl: './track-view.scss',
})
export class TrackView {}
