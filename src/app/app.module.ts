import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RoverModule} from './rover/rover.module';
import {LayoutModule} from './core/layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {PhotoModule} from './photo/photo.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RoverModule,
    PhotoModule,
    LayoutModule,
    HttpClientModule,
    // Routing module à la fin :
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
