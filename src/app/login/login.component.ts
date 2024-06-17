import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  credentials={

    email:'',

    password:''
  }

  constructor( private service:LoginserviceService,private router:Router){}

  ngOnInit(): void {


  }

  onSubmit(){

    console.log("form submited")

    if((this.credentials.email!=''&&this.credentials.password!='')&&(this.credentials.email!=null && this.credentials.password!=null)){

      console.log("we have to submit form to server");

      this.service.generateToken(this.credentials).subscribe(
        (response:any)=>{

          console.log(response);

          this.service.loginUser(response.token);
          this.router.navigate(['dashboard'])

          // window.location.href='/dashboard'



         // console.log(response);
        },
        error=>{
          console.log(error);
        }
      )
    }else{
      console.log("form is empty");
    }
  }



}
