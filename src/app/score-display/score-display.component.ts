import { Component, OnInit, Input} from '@angular/core';
import { GameService } from '../game.service';

import { Game } from '../game';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent implements OnInit {
  @Input() game: Game;
  @Input() sport: string;

  awayScore: number;
  homeScore: number;
  
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getScores(this.sport, this.game.homeTeam.Abbreviation, this.game.date).subscribe(
      data => {
        this.awayScore = data.scoreboard.gameScore[0].awayScore;
        this.homeScore = data.scoreboard.gameScore[0].homeScore;
      }
    );
  }

}
