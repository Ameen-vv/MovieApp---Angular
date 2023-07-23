import { Component,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent {
  @Input() movie!:any;

  constructor(private router : Router){};

  getImageUrl(image:string):string{
    return `https://image.tmdb.org/t/p/original/${image}`;
  };

  navigateToMovie(id:string):void{
    this.router.navigate(['/movie',id]);
  };
 
  
}
