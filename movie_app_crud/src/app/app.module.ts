import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieSearchComponent } from './components/movies/movie-search/movie-search.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieComponent } from './components/movies/movie-list/movie/movie.component';
import { FavMoviesComponent } from './components/fav-movies/fav-movies.component';
import { FavMovieComponent } from './components/fav-movies/fav-movie/fav-movie.component';
import { LoginComponent } from './components/authedication/login/login.component';
import { RegistrationComponent } from './components/authedication/registration/registration.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MoviesComponent,
    MovieSearchComponent,
    MovieListComponent,
    MovieComponent,
    FavMoviesComponent,
    FavMovieComponent,
    LoginComponent,
    RegistrationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
