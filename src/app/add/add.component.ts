import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private movieService:MoviesService, private router:Router) { }

  movie = {
    title:'',
    genre:'',
    year:''
  }
  err:any

  ngOnInit(): void {
  }

  createMovie(form:NgForm){
    this.movieService.createMovie(this.movie).subscribe(
      ()=>console.log(this.movie),
      err => this.err = console.log(<any>err)
    )
    this.router.navigate(['/movies'])

  }

  onBack(){
    this.router.navigate(['/movies'])
  }
}
