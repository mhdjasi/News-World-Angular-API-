import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';
import {HttpClientModule} from '@angular/common/http'
import {NewsapisevicesService} from './service/newsapisevices.service';
import { SportsComponent } from './sports/sports.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { HealthComponent } from './health/health.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechnologyComponent } from './technology/technology.component'

@NgModule({
  declarations: [
    AppComponent,
    TopheadingsComponent,
    SportsComponent,
    BussinessComponent,
    HealthComponent,
    EntertainmentComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapisevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
