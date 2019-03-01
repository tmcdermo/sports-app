import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @Input() sport: string;
  @Input() team: object;
  
  games: Game[];
  sportsData: object;

  getGames(): void {
    this.gameService.getGames(this.sport, this.team['abbreviation']).subscribe(games => this.games = games['fullgameschedule'].gameentry);
  }

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  pastGames(): Game[] {
    const today = new Date();
    return this.games.filter(x => new Date(x.date) < new Date(today.getTime() - 60 * 60 * 24 * 1000));
  }

  futureGames(): Game[] {
    const today = new Date();
    return this.games.filter(x => new Date(x.date) >= new Date(today.getTime() - 60 * 60 * 24 * 1000));
  }

}
