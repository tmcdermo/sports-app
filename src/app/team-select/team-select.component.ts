import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {

  sportsData: object;
  currentSport: string;
  currentTeam: object;
  teams: object;

  constructor( private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Object>('../../assets/data.json').subscribe(
      data => {
        this.sportsData = data;
        this.getTeams();
      });
  }

  getTeams() {
    this.currentSport = this.route.snapshot.paramMap.get('sport');
    this.teams = this.sportsData['league'].find(league => league.name === this.currentSport).teams;
  }
}
