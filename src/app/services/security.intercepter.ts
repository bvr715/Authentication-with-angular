import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { LoginserviceService } from "./loginservice.service";


@Injectable()
export class SecurityIntercepter implements HttpInterceptor{


  constructor(private _loginService:LoginserviceService){}

  intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

    let newReq=req;

    //let sessionToken!:any;

    let token=this._loginService.getToken();

   // console.log("INTERCEPTER",token);

    if(token!=null){
      newReq=newReq.clone({setHeaders:{Authorization:`Bearer ${token}`}});

     // const sessionToken=sessionStorage.setItem('token',token)

    }

    return next.handle(newReq);

  }

}
