import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopHeadlineComponent } from './top-headline/top-headline.component';

const routes: Routes = [
  {path:'', component:TopHeadlineComponent},
  {path:'business', component:BusinessComponent},
  {path:'entertainment', component: EntertainmentComponent},
  {path:'sports', component: SportsComponent},
  {path:'tech', component: TechComponent},
  {path:'health', component: HealthComponent},
  {path:'science', component: ScienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
