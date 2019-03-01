import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { GameListComponent } from './game-list/game-list.component';
import { SportSelectComponent } from './sport-select/sport-select.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { GameDisplayComponent } from './game-display/game-display.component';
import { ScoreDisplayComponent } from './score-display/score-display.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamDetailsComponent,
    GameListComponent,
    SportSelectComponent,
    TeamSelectComponent,
    GameDisplayComponent,
    ScoreDisplayComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
