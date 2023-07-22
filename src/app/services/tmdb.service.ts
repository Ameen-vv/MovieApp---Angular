import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environments } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiUrl:string = 'https://api.themoviedb.org/3'
  imageUrl:string = 'https://image.tmdb.org/t/p/original'
  constructor(private http:HttpClient) { }
  
  getBanner():Observable<any>{
    const url = `${this.apiUrl}/trending/all/week?api_key=${Environments.apiKeyTMDB}&language=en-US`
    return this.http.get<any>(url)  
  }

  getMovieGenre(num:string):Observable<any>{
    const url = `${this.apiUrl}/discover/movie?api_key=${Environments.apiKeyTMDB}&with_genres=${num}`
    return this.http.get(url)
  }

}
