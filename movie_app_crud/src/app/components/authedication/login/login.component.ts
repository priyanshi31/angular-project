import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../../services/json-api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
   providers:[JsonApiService]
})
export class LoginComponent implements OnInit {
	public user : any ={}
  public errormsg :any =[]
  public showerror :any =[] 


  constructor(private jsonApiService: JsonApiService ,private route: Router) { }

  ngOnInit() {
  }

submit(user){
	this.jsonApiService.submit(user).subscribe(data=>{
  this.user=data;
  this.route.navigate(['/register']);
    },
 (error:any)=>{
   this.errormsg = error.statusText;
   this.showerror = true;

    })
    }
}
