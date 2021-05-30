import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any[]
  err:any

  constructor(private movieService:MoviesService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies():void{
    this.movieService.getAllMovies().subscribe(
      movies=> this.movies = movies,
      err => this.err = <any>err
    )
  }

}
