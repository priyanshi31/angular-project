import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from './../config/config.constant';
import 'rxjs/add/operator/map';

  @Injectable()
  export class TmdbApiService {
  private popularURL=AppConfig.movie_api;
  data:any={};
  constructor(private http: Http) {
 }

  //get moviedata to display on the homepage
 getPopular(){
  return this.http.get(this.popularURL)
  .map(data => data.json(),
  (error: any)=>this.handleError(error));
  }

//get search movie data entered by user in search bar
  getSearch(movieName: any){
    return this.http.get(AppConfig.search_api+movieName)
    .map(data => data.json(),
    (error: any)=>this.handleError(error));
  }
 //error handler
   private handleError(error: Response){
   return Observable.throw(error.statusText);
   }
 }
