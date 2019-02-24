import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { PhotoSearchFormComponent } from './photo-search-form/photo-search-form.component';
import {FormsModule} from '@angular/forms';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoItemComponent } from './photo-item/photo-item.component';

@NgModule({
  declarations: [PhotoPageComponent, PhotoSearchFormComponent, PhotoListComponent, PhotoItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    // Routing module à la fin :
    PhotoRoutingModule
  ]
})
export class PhotoModule { }
