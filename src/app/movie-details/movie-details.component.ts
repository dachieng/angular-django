import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie:any 
  err:any
  constructor(private route:ActivatedRoute, private movieService:MoviesService, private router:Router) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id']
    this.getMovie(id)
  }

  getMovie(id:number){
    this.movieService.getMovie(id).subscribe(
      movie => this.movie = movie,
      err => this.err = console.log(<any>err)
    )
  }

  deleteMovie(){
    this.movieService.deleteMovie(this.movie.id).subscribe(
      movie => this.movie = movie,
      err => this.err = console.log(<any>err)
    )
    this.router.navigate(['/movies'])
  }

  onBack(){
    this.router.navigate(['/movies'])

  }

}
