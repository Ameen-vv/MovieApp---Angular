import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { MovieCardsComponent } from './components/movie-cards/movie-cards.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'movie/:id',component:MoviePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    MovieCardsComponent,
    SliderComponent,
    HomeComponent,
    MoviePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
