import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizePageComponent } from './components/customize-page/customize-page.component';
import { HistoryPageComponent } from './components/history-page/history-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: 'customize', component: CustomizePageComponent },
  { path: 'info', component: InfoPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
