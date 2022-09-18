import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessComponent } from './bussiness/bussiness.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';

const routes: Routes = [
  {path:'',component:TopheadingsComponent},
  {path:'sports',component:SportsComponent},
  {path:'bussiness',component:BussinessComponent},
  {path:'health',component:HealthComponent},
  {path:'entertainment',component:EntertainmentComponent},
  {path:'technology',component:TechnologyComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
