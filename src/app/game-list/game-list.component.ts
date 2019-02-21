import { Component, OnInit, Input } from '@angular/core';

import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @Input() team: object;
  @Input() sport: string;
  
  games: Game[];

  getGames(): void {
    this.gameService.getGames(this.sport, this.team['abbreviation']).subscribe(games => this.games = games.fullgameschedule.gameentry);
  }

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.getGames();
  }

  pastGames(): Game[] {
    const today = new Date();
    return this.games.filter(x => x.date < today.toISOString());
  }

  futureGames(): Game[] {
    const today = new Date();
    return this.games.filter(x => x.date >= today.toISOString());
  }

}
