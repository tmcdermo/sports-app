import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sports = [  { 
                "name": "MLB",
                "image": "assets/img/mlb/mlb.gif"
              },
              {
                "name": "NFL",
                "image": "assets/img/nfl/nfl.gif"
              },
              {
                "name": "NBA",
                "image": "assets/img/nba/nba.png"
              },
              {
                "name": "NHL",
                "image": "assets/img/nhl/nhl.png"
              }
  ];

  currentSport = 'Sport';
  currentTeam: object;
  sportsData: object;
  teams: object;
  showTeams = false;

  getSports() {
    return this.sports;
  }

  getTeams(sport: any) {
    this.currentSport = sport.name;
    this.showTeams = true;
    this.teams = this.sportsData['league'].find(league => league.name === sport.name).teams;
    console.log(this.teams);
  }

  selectTeam(team: object) {
    this.currentTeam = team;
  }

  constructor(private http: HttpClient) {
    this.currentSport = '';
    this.getSports();
  }

  ngOnInit(): void {
    this.http.get<Object>('./assets/data.json').subscribe(
      data => {
        this.sportsData = data;
      });
  }
}
