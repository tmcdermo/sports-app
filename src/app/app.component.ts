import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sports = [  'MLB', 'NFL', 'NBA', 'NHL'  ];

  currentSport = 'Sport';
  currentTeam: string;
  sportsData: object;
  teams: object;
  show = false;

  getSports() {
    return this.sports;
  }

  getTeams(sport: any) {
    this.currentSport = sport;
    this.currentTeam = '';
    this.show = true;
    this.teams = this.sportsData.league.find(league => league.name === sport).teams;
    console.log(this.teams);
  }

  selectTeam(team: object) {
    this.currentTeam = team.name;
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
