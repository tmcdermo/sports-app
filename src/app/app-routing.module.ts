import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportSelectComponent } from './sport-select/sport-select.component';
import { TeamSelectComponent } from './team-select/team-select.component';
import { TeamDetailsComponent } from './team-details/team-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/sport', pathMatch: 'full' },
  { path: 'sport', component: SportSelectComponent },
  { path: ':sport/teams', component: TeamSelectComponent },
  { path: ':sport/:team', component: TeamDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
