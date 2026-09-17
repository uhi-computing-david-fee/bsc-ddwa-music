import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { TrackView } from './track-view/track-view';
import { Favourites } from './favourites/favourites';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, TrackView, Favourites],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

}
