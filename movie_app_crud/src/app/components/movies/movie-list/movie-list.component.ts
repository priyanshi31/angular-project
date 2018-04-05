import { Component, OnInit,Input ,Output ,EventEmitter,ViewChild, ElementRef } from '@angular/core';
import{AppConfig} from './../../../config/config.constant';
import { JsonApiService } from './../../../services/json-api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

	@Input()  movies: Array<any> = [];
	public movieUrl =AppConfig.baseUrl;
    public favCount :any= [];
    @Input() flag:any;
    @Output() success =new EventEmitter();
      @ViewChild('modalbtn') modalbtn: ElementRef;
      public curruntmovie :any ={};
      public favmovies =[];
      public errormsg :any=[];
      public showerror :any =[];

  constructor(private jsonApiService: JsonApiService) { }

  ngOnInit() {
  	
  }
  setlist(event)
  {
  	this.favCount=event.favCount;
  	//console.log(this.favCount.length);
  	this.success.emit({
     'favCount' : this.favCount
  	});
  }
   updatemovie(event)
   {
     this.curruntmovie=event.curruntmovie;
     this.modalbtn.nativeElement.click();
   }

onSubmit(curruntmovie){
  this.jsonApiService.updateMovies(this.curruntmovie).subscribe(data=>{
      this.favmovies=this.curruntmovie;
    },(error:any)=>{
      this.errormsg = error.statusText;
      this.showerror = true;
    })
    }
}
