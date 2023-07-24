import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { MovieCardsComponent } from './components/movie-cards/movie-cards.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviePageComponent } from './pages/movie-page/movie-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

const routes:Routes = [
  {path:'',component:HomeComponent},
  {path:'movie/:id',component:MoviePageComponent},
  {path:'search',component:SearchPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    MovieCardsComponent,
    SliderComponent,
    HomeComponent,
    MoviePageComponent,
    SearchPageComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
