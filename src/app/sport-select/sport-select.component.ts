import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport-select',
  templateUrl: './sport-select.component.html',
  styleUrls: ['./sport-select.component.css']
})
export class SportSelectComponent implements OnInit {


  sports = [  { 
    'name': 'MLB',
    'image': 'assets/img/mlb/mlb.gif'
  },
  {
    'name': 'NFL',
    'image': 'assets/img/nfl/nfl.gif'
  },
  {
    'name': 'NBA',
    'image': 'assets/img/nba/nba.png'
  },
  {
    'name': 'NHL',
    'image': 'assets/img/nhl/nhl.png'
  }
  ];

  getSports() {
    return this.sports;
  }

  constructor() { }

  ngOnInit() {
    this.getSports();
  }

}
