import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { JsonApiService } from './../../../../services/json-api.service';
import { AppConfig } from './../../../../config/config.constant';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[ JsonApiService ]
 })
export class MovieComponent implements OnInit {
  
  @Input() movie: any;
  public movieUrl=AppConfig.baseUrl;
  public errorMsg ='';
  public showError : boolean = false;
   public favCount : any =[];
   @Input() flag: any;
   //public curruntmovie :any ={};
  
   @Output() submit = new EventEmitter();
  
   @Output() success = new EventEmitter();
  constructor(private jsonApiService : JsonApiService) {
  }

  ngOnInit() {
 
  }
   // Add favourite movie to  database
  addToFavorite(movie) {
    this.jsonApiService.addToFavourite(movie).subscribe((res) =>{
    this.getFavorite();
    this.showError = false;
    },(error:any)=>{
      this.errorMsg = error.statusText;
      this.showError = true;
      })
    }

  // get data of favourite movies from database
  getFavorite() {
    this.jsonApiService.getFavourite().subscribe((res) =>{
     this.favCount=res;   
    this.showError = false;
    this.success.emit({
      'favCount':this.favCount
    });
    },(error:any)=>{
      this.errorMsg = error._body;
      this.showError = true;
    })
  }

  delete(movieId){
    this.jsonApiService.deleteMovie(movieId).subscribe(data=>{
      this.getFavorite();
    },(error:any)=>{
      // this.errorMsg = error.statusText;
      // this.showError = true;
    })
  }

 setmoviefav(movie)
 {
   
   this.submit.emit({
      'curruntmovie': movie
    });
 }

}
