import { Component,OnInit,OnDestroy } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit,OnDestroy {
  movies:any;
  movieNo:number = 0;
  imageUrl!:string;
  slideInterval!: any;

  constructor(private apiService : TmdbService, private router : Router){};

  ngOnInit(): void {
      this.apiService.getBanner().subscribe((response)=>{
        this.movies = response.results;
      });
      this.imageUrl = this.apiService.imageUrl
      this.slideInterval = setInterval(()=>{
        this.nextMovie()
      },7000);
  };

  ngOnDestroy(): void {
      clearInterval(this.slideInterval);
  };

  getImageUrl(image:string):string{
    return `${this.imageUrl}/${image}`;
  };

  nextMovie():void{
    this.movieNo >= 10 ? (this.movieNo = 0) : (this.movieNo++) ;
  };

  prevMovie():void{
    this.movieNo <= 0 ? (this.movieNo = 10) : (this.movieNo--) ;
  };

  navigateMovie(id:string):void{
    this.router.navigate(['/movie',id]);
  };
}
