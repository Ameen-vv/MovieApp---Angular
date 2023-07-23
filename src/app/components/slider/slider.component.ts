import { Component,Input,OnInit } from '@angular/core';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
    test = [1,2,3,4,5,6]
    movies:any = [];
    imageUrl!:string; 
    @Input() title!:string ;
    @Input() genreKey!:string ;

    constructor(private apiService : TmdbService){}  

    ngOnInit(): void {
        this.apiService.getMovieGenre(this.genreKey).subscribe((response) => {
          this.movies = response.results;
        });
        this.imageUrl = this.apiService.imageUrl;
    }
    
}
