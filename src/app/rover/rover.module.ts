import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoverRoutingModule } from './rover-routing.module';
import { RoverPageComponent } from './rover-page/rover-page.component';
import { RoverListComponent } from './rover-list/rover-list.component';
import { RoverItemComponent } from './rover-item/rover-item.component';

@NgModule({
  declarations: [RoverPageComponent, RoverListComponent, RoverItemComponent],
  imports: [
    CommonModule,
    RoverRoutingModule
  ]
})
export class RoverModule { }
