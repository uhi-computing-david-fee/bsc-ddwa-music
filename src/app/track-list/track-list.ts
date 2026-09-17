import { Component } from '@angular/core';
import { Track } from '../models/track.model';
import { TrackListItem } from '../track-list-item/track-list-item';

@Component({
  selector: 'app-track-list',
  imports: [TrackListItem],
  templateUrl: './track-list.html',
  styleUrl: './track-list.scss',
})
export class TrackList {
    tracks: Track[] = [
    {
      id: 1,
      title: 'Midnight Signals',
      artist: 'Northbound',
      album: 'After Dark',
      genre: 'Electronic',
      year: 2025,
      duration: 248,
      favourite: true
    },
    {
      id: 2,
      title: 'Paper Skies',
      artist: 'The Lowlines',
      album: 'Somewhere Between',
      genre: 'Indie',
      year: 2024,
      duration: 213,
      favourite: false
    },
    {
      id: 3,
      title: 'Static Hearts',
      artist: 'Glass Avenue',
      album: 'Neon Weather',
      genre: 'Rock',
      year: 2023,
      duration: 232,
      favourite: true
    },
    {
      id: 4,
      title: 'Blue Hour',
      artist: 'Miles North',
      album: 'Late Rooms',
      genre: 'Jazz',
      year: 2022,
      duration: 301,
      favourite: false
    },
    {
      id: 5,
      title: 'Slow Motion',
      artist: 'Velvet Arcade',
      album: 'Polaroid Summer',
      genre: 'Electronic',
      year: 2025,
      duration: 226,
      favourite: false
    },
    {
      id: 6,
      title: 'No Fixed Address',
      artist: 'Sunday Static',
      album: 'No Fixed Address',
      genre: 'Indie',
      year: 2024,
      duration: 196,
      favourite: true
    }
  ];
}
