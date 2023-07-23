import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { TmdbService } from 'src/app/services/tmdb.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  movie:any;
  casts:any;
  trailer!:string;
  constructor(private apiService : TmdbService, private route : ActivatedRoute){};

  ngOnInit(): void {
      const movieId:string | null = this.route.snapshot.paramMap.get('id');
      this.getMovieDetails(movieId as string);
      this.getMovieCasts(movieId as string);
      this.getTrailer(movieId as string);
     
  }

  getMovieDetails(id:string):void{
    this.apiService.getMovieDetails(id).subscribe((response) => {
      this.movie = response;
    });
  };
  getMovieCasts(id:string):void{
    this.apiService.getMovieCast(id).subscribe((response) => {
      this.casts = response.cast.slice(0,10);
    });
  };

  getTrailer(id:string):void{
    this.apiService.getMovieVideo(id).subscribe((response) => {
      const trailers = response.results.filter((item:any) => (
           item.type === "Trailer"
      ));
      this.trailer = trailers[0].key;
    });
  };
};
