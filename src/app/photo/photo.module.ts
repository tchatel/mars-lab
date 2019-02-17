import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { PhotoSearchFormComponent } from './photo-search-form/photo-search-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PhotoPageComponent, PhotoSearchFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    // Routing module à la fin :
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
