import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoverPageComponent} from './rover-page/rover-page.component';

const routes: Routes = [
  {path: 'rover', component: RoverPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoverRoutingModule { }
