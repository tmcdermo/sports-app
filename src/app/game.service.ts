import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Game } from './game';
import { strictEqual } from 'assert';

const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': `Basic ${btoa('mcdermot:password')}` })
};
@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl = 'https://api.mysportsfeeds.com/v1.2/pull/';


  constructor(private http: HttpClient) { }

  getGames(sport: string, abbrv: string): Observable<Game[]> {
    const url = this.baseUrl + sport + '/latest/full_game_schedule.json';
    const query = '?date=from-7-days-ago-to-7-days-from-now&team=' + abbrv;
    return this.http.get<Game[]>(url + query, httpOptions)
      .pipe(
        catchError(this.handleError('getGames', []))
      );
  }

  getScores(sport: string, abbrv: string, date: string): Observable<object> {
    const url = this.baseUrl + sport + '/latest/scoreboard.json?fordate=' + date.replace(/-/g, "") + '&team=' + abbrv;
    return this.http.get<object>(url, httpOptions)
      .pipe(
        catchError(this.handleError('getScores', []))
      );
  }

  // based on https://angular.io/tutorial/toh-pt6
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
