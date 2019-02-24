import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoPageComponent} from './photo-page/photo-page.component';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {BigPhotoComponent} from './big-photo/big-photo.component';

const routes: Routes = [
  {
    path: 'photo',
    component: PhotoPageComponent,
    children: [
      {path: 'list', component: PhotoListComponent},
      {path: ':id', component: BigPhotoComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotoRoutingModule { }
