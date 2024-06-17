import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  credentials1={

    firstName:'',

    lastName:'',

    email:'',

    password:''
  }

  constructor( private service:LoginserviceService,private router:Router){}

  ngOnInit(): void {


  }

  onSubmit(){

    console.log("form submited")

    if((this.credentials1.email!=''&&this.credentials1.password!=''&&this.credentials1.firstName!=''&&this.credentials1.lastName!='')&&(this.credentials1.email!=null && this.credentials1.password!=null && this.credentials1.lastName!=null && this.credentials1.firstName!=null)){

      console.log("we have to submit form to server");

      // this.service.registration(this.credentials1).subscribe(
      //   (response:any)=>{


      //     alert("registration completed successfully")

      //     this.router.navigate(['login']);

      //     console.log(response);
      //   },
      //   error=>{
      //     console.log(error);
      //   }
      // )

      this.service.registration(this.credentials1).subscribe({
        next : (val) => {

          alert(val.body)

             this.router.navigate(['login']);
          console.log('value:',val);
        },
        error : (err) => {
          alert(err.message)
          console.log('error:',err);
        }
        }
        )
    }else{
      alert("form is empty");
    }
  }
}
