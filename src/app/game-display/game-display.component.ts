import { Component, OnInit, Input } from '@angular/core';

import { SportsDataService } from '../sports-data.service';
import { Game } from '../game';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.css']
})
export class GameDisplayComponent implements OnInit {
  @Input() game: Game;
  @Input() sport: string;

  teams: object[];
    awayTeam: any = {};
    homeTeam: any = {};

  constructor(private dataService: SportsDataService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teams = this.dataService.getTeams(this.sport);
    this.awayTeam = this.teams.find(team => team['abbreviation'] === this.game.awayTeam['Abbreviation']);
    this.homeTeam = this.teams.find(team => team['abbreviation'] === this.game.homeTeam['Abbreviation']);
  }

}
