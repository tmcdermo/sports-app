import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  sportsData: object;
  sport: string;
    team: any = {};

  constructor(private http: HttpClient, 
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.sport = this.route.snapshot.paramMap.get('sport');
    this.http.get<Object>('../../assets/data.json').subscribe(
      data => {
        this.sportsData = data;
        this.team = this.sportsData['league']
          .find(league => league.name === this.sport).teams
          .find(x => x.abbreviation === this.route.snapshot.paramMap.get('team'));
      });
  }

  goBack(): void {
    this.location.back();
  }

}
