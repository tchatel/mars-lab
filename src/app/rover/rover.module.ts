import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoverRoutingModule } from './rover-routing.module';
import { RoverPageComponent } from './rover-page/rover-page.component';
import { RoverListComponent } from './rover-list/rover-list.component';

@NgModule({
  declarations: [RoverPageComponent, RoverListComponent],
  imports: [
    CommonModule,
    RoverRoutingModule
  ]
})
export class RoverModule { }
