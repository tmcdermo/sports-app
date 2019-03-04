import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SportsDataService } from '../sports-data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-select',
  templateUrl: './team-select.component.html',
  styleUrls: ['./team-select.component.css']
})
export class TeamSelectComponent implements OnInit {

  currentSport: string;
  teams: object;

  constructor(  private route: ActivatedRoute,
                private dataService: SportsDataService,
                private location: Location ) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.currentSport = this.route.snapshot.paramMap.get('sport');
    this.teams = this.dataService.getTeams(this.currentSport);
  }

  goBack(): void {
    this.location.back();
  }
}
