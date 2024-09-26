import { PhotoFinalComponent } from './photo-final/photo-final.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbunsComponent } from './main/albuns/albuns.component';
import { AppComponent } from './app.component';
import { PhotosComponent } from './main/photos/photos.component';

const routes: Routes = [
  {path:'', component:AlbunsComponent},
  {path:'album/:id', component:PhotosComponent},
  {path:'album', component:PhotosComponent},
  {path:'photo', component:PhotoFinalComponent},
  {path:'photo/:id', component:PhotoFinalComponent},
  {path:'**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
