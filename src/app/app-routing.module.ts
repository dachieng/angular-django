import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path:'movies/add',component:AddComponent},
  {path:'movies', component:MoviesComponent},
  {path:'movies/:id', component:MovieDetailsComponent},
  {path:'movies/:id/edit',component:EditComponent},
  {path:'', redirectTo:'movies', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
