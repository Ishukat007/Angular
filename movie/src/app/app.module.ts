import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { ListMovieComponent } from './components/list-movie/list-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMovieComponent,
    ListMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
