import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { DialigComponent } from '../dialig/dialig.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

  public loggedIn=false;

  constructor( private loginService:LoginserviceService,private _dialog:MatDialog){
  }

  ngOnInit():void {

    console.log("tetst");
    this.loggedIn=this.loginService.isLoggedIn();
  }
  logOutUser(){
    this.loginService.logout();
    location.reload();
  }

  openDialog() {
    this._dialog.open(DialigComponent,{

   width:'50%'

    })
  }
}
