import { Component, inject, OnInit } from '@angular/core';
import { TrackService } from '../track-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  private trackService = inject(TrackService);

  trackCount = 0;
  favouriteCount = 0;

  ngOnInit() {
    this.trackService.tracks$.subscribe({
      next: tracks => {
        this.trackCount = tracks.length;

        this.favouriteCount = tracks.filter(
          track => track.favourite
        ).length;
      },
      error: error => {
        console.error(error);
      }
    });
  }
}
