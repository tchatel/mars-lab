import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent]
})
export class LayoutModule { }
