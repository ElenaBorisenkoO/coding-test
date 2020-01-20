import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiphyImagesComponent } from './giphy-images/giphy-images.component';

const routes: Routes = [
  {
    path: '',
    component: GiphyImagesComponent
  },
  {
    path: ':category',
    component: GiphyImagesComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
