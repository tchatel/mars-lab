import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoPageComponent} from './photo-page/photo-page.component';

const routes: Routes = [
  {path: 'photo', component: PhotoPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
