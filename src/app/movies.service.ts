import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:8000"
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  getAllMovies():Observable<any[]>{
    return this.http.get<any[]>(this.url + '/movies/',{headers:this.httpHeaders})
  }

  getMovie(id:number):Observable<any>{
    return this.http.get<any>(this.url + '/movies/' + id + '/', {headers:this.httpHeaders})
  }

  updateMovie(id:number, body):Observable<any>{
    //let body = {title:movie.title, genre:movie.genre, year:movie.year}
    return this.http.put<any>(this.url + '/movies/' + id + '/', body, {headers:this.httpHeaders})
  }

  createMovie(movie):Observable<any>{
    return this.http.post<any>(this.url + "/movies/", movie, {headers:this.httpHeaders})
  }

  deleteMovie(id:number):Observable<any>{
    return this.http.delete<any>(this.url + '/movies/' + id + '/', {headers:this.httpHeaders})
  }
}
