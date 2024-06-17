import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginserviceService {
  public url = 'http://ec2-54-174-27-166.compute-1.amazonaws.com:8081/api/security';

  constructor(private http: HttpClient) {}

  registration(credentials1: any): Observable<any> {
    return this.http.post(`${this.url}/signUp`, credentials1, {
      observe: 'response',
      responseType: 'text',
    });
  }

  generateToken(credentials: any): Observable<any> {
    return this.http.post(`${this.url}/signIn`, credentials);
  }

  loginUser(token: any) {
    // localStorage.setItem();
    sessionStorage.setItem('token', token)
    return true;
  }

  isLoggedIn() {
    // let token = localStorage.getItem("token");

    let token = sessionStorage.getItem("token");

    if (token == undefined || token === '' || token === null) {
      return false;
    }
     else {
      return true;
    }
  }

  logout() {
    //localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    return true;
  }

  getToken() {
    // return localStorage.getItem('token');
    return sessionStorage.getItem('token');
  }
}
