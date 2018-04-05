import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../services/json-api.service';

@Component({
  selector: 'app-fav-movies',
  templateUrl: './fav-movies.component.html',
  styleUrls: ['./fav-movies.component.css']
})
export class FavMoviesComponent implements OnInit {
  public movies =[] ;
  public flag = 'favd';
  

  
  constructor(private jsonApiService : JsonApiService) { }

  ngOnInit() {
    this.getFavorite() ;
  }
getFavorite() {
    this.jsonApiService.getFavourite().subscribe((res) =>{
    this.movies = res;
  
    },(error:any)=>{
      
    })
  }
  getdelete(event)
  {
    this.movies=event.favCount;
     this.getFavorite();
  }
}
