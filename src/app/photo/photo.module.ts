import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoPageComponent } from './photo-page/photo-page.component';

@NgModule({
  declarations: [PhotoPageComponent],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
