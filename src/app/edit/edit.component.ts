import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private movieService:MoviesService, private route:ActivatedRoute, private router:Router) { }
  movie:any 
  sub:Subscription
  err:any

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(
      params=> {
        let id = +params.get('id')
        this.getMovie(id)
      }
    )
  }

  getMovie(id:number){
    this.movieService.getMovie(id).subscribe(
      movie => this.movie = movie,
      err => this.err = console.log(<any>err)
    )
   
  }

  
  updateMovie(){
    this.movieService.updateMovie(this.movie.id,this.movie).subscribe(
      movie => this.movie = movie,
      err => this.err = console.log(<any>err)
    )
    this.router.navigate(['/movies', this.movie.id])
  }

  onBack(){
    this.router.navigate(['/movies'])
  }


}
