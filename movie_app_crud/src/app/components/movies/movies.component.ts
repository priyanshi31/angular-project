import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
	public movies :any =[];
    public favCount :any =[];
    public flag='homd';
  constructor() { }

  ngOnInit() {
  	
  }
setMovieList(event) {
 	this.movies = event.movies;

 	
 }
 setlist(event)
 {
 	this.favCount=event.favCount;
 	//console.log(this.favCount.length);
 }
}
