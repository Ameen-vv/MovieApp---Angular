import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private apiUrl:string = 'https://api.themoviedb.org/3';
  imageUrl:string = 'https://image.tmdb.org/t/p/original';
  
  constructor(private http:HttpClient) { };
  
  getBanner():Observable<any>{
    const url = `${this.apiUrl}/trending/all/week?api_key=${Environments.apiKeyTMDB}&language=en-US`;
    return this.http.get<any>(url);
  };

  getMovieGenre(num:string):Observable<any>{
    const url = `${this.apiUrl}/discover/movie?api_key=${Environments.apiKeyTMDB}&with_genres=${num}`;
    return this.http.get(url);
  };

  getMovieDetails(id:string):Observable<any>{
    const url = `${this.apiUrl}/movie/${id}?api_key=${Environments.apiKeyTMDB}`;
    return this.http.get(url);
  };

  getMovieCast(id:string):Observable<any>{
    const url = `${this.apiUrl}/movie/${id}/credits?api_key=${Environments.apiKeyTMDB}`;
    return this.http.get(url);
  };

  getMovieVideo(id:string):Observable<any>{
    const url = `${this.apiUrl}/movie/${id}/videos?api_key=${Environments.apiKeyTMDB}`;
    return this.http.get(url);
  };

  searchMovie(text:string):Observable<any>{
    const url = `${this.apiUrl}/search/movie?api_key=${Environments.apiKeyTMDB}&query=${text}`;
    return this.http.get(url);
  };

}
