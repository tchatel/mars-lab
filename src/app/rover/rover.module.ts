import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoverRoutingModule } from './rover-routing.module';
import { RoverPageComponent } from './rover-page/rover-page.component';

@NgModule({
  declarations: [RoverPageComponent],
  imports: [
    CommonModule,
    RoverRoutingModule
  ]
})
export class RoverModule { }
