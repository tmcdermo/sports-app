import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsDataService {

  private data: object;

  constructor(private http: HttpClient) {
    this.initialize();
   }
  
  initialize(): void {
    this.http.get<Object>('./assets/data.json').subscribe( data => this.data = data);
  }

  getTeams(sport: string): object[] {
    return this.data['league'].find(league => league.name === sport).teams;
  }
}
