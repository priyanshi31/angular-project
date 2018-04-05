import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../../services/json-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
   providers:[JsonApiService]

})
export class RegistrationComponent implements OnInit {
	public user :any ={};
	public errormsg :any={};
      public showerror :any =[];
      public wrong ='';


  constructor( private jsonApiService: JsonApiService ,private router: Router) { }

  ngOnInit() {
  }

  ondetails(user)
  {
   this.jsonApiService.ondetails(user).subscribe((res)=>
   {
     this.user={};
     this.router.navigate(['/home']);
   },(error:any)=>{
     this.errormsg= JSON.parse(error._body);
     //alert(this.errormsg.error);
     this.wrong = 'yes';
   })

  }

  //------------
}
 
