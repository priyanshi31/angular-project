import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { TmdbApiService } from './../../../services/tmdb-api.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers:[TmdbApiService]
})
export class MovieSearchComponent implements OnInit {
	@Output() success = new EventEmitter<any>();
	public movieList=[];
	public movieSearch:any;


  constructor(private tmdbApiService:TmdbApiService) { }

  ngOnInit() {
  }
search() {
  
    this.tmdbApiService.getSearch(this.movieSearch).subscribe(data=>{
      this.movieList=data.results;
      this.success.emit({'movies':this.movieList});
     
        },(error:any)=>{
          console.log(error)
        })
  }
}
