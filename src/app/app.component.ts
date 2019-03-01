import { Component } from '@angular/core';
import { SportsDataService } from './sports-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService: SportsDataService) { }
}
