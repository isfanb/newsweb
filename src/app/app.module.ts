import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './newsapi.service';
import { BusinessComponent } from './business/business.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadlineComponent,
    BusinessComponent,
    EntertainmentComponent,
    SportsComponent,
    TechComponent,
    HealthComponent,
    ScienceComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarHttpClientModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
