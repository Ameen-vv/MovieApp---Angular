import { Component } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  results:[] = [];
  constructor(private apiService : TmdbService){};

  searchMovie(text:string):void{
    this.apiService.searchMovie(text).subscribe((response) => {
      this.results = response.results;
    });
  };
}
