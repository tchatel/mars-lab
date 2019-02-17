import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { PhotoSearchFormComponent } from './photo-search-form/photo-search-form.component';

@NgModule({
  declarations: [PhotoPageComponent, PhotoSearchFormComponent],
  imports: [
    CommonModule,
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
