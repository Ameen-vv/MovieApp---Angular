import { Component,OnInit,OnDestroy } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit,OnDestroy {
  movies:any;
  movieNo:number = 0;
  imageUrl:string = '';
  slideInterval: any = null;

  constructor(private apiService : TmdbService){}

  ngOnInit(): void {
      this.apiService.getBanner().subscribe((response)=>{
        this.movies = response.results;
      })
      this.imageUrl = this.apiService.imageUrl
      this.slideInterval = setInterval(()=>{
        this.nextMovie()
      },7000)
  }

  ngOnDestroy(): void {
      this.slideInterval()
  }



  getImageUrl(image:string):string{
    return `${this.imageUrl}/${image}`
  }

  nextMovie():void{
    this.movieNo >= 10 ? (this.movieNo = 0) : (this.movieNo++) ;
  }

  prevMovie():void{
    this.movieNo <= 0 ? (this.movieNo = 10) : (this.movieNo--) ;
  }
}
