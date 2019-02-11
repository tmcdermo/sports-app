import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sports = [  'MLB', 'NFL', 'NBA', 'NHL'  ];

  currentSport: string = 'Sport';
  sportsData: object;
  teams: object;
  show: boolean = false;

  getSports() {
    return this.sports;
  }

  getTeams(sport: any) {
    console.log(sport);
    this.currentSport = sport;
    this.show = true;
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
