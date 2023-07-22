import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movie-cards',
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.css']
})
export class MovieCardsComponent {
  @Input() movie!:any;

  getImageUrl(image:string):string{
    return `https://image.tmdb.org/t/p/original/${image}`
  }
  
}
