import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username:String;
  password:String;
  email: string;
  contact: string;
  firstname:string;
  lastname: string;
  gender: string;

  constructor() { }

  ngOnInit(): void {
  }

 RegistrationUser()
 {
   if ( this.username == "Kuldeep" && this.password == "kuldeep123" && this.email == "email" && this.contact == "708820" && this.firstname == "kuldeep" && this.lastname == "dhasmana" && this.gender == "male" )
   {
     console.log("WELCOME");
   }
 }
}
