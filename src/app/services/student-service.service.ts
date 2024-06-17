import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginserviceService } from './loginservice.service';

@Injectable({
  providedIn: 'root',
})
export class StudentServiceService {
  public url = 'http://ec2-54-174-27-166.compute-1.amazonaws.com:8081/api/students';

  constructor(private http: HttpClient,private tokenService:LoginserviceService) {}

  addStudent(data: any): Observable<any> {
    let token=this.tokenService.getToken();
    let hedder=new HttpHeaders().set('Authorization',"Bearer "+token)
    return this.http.post(`${this.url}/save`,data, {
      observe: 'response',
      responseType: 'text',
      headers:hedder
    });
  }

  getStudents(): Observable<any> {
    let token=this.tokenService.getToken();
    let hedder=new HttpHeaders().set('Authorization',"Bearer "+token)
    // console.log(hedder);

    // console.log(token);
    return this.http.get(`${this.url}/getAll`,{headers:hedder});
  }

  editStudent(id: any, data: any): Observable<any> {
    let token=this.tokenService.getToken();
    let hedder=new HttpHeaders().set('Authorization',"Bearer "+token)
    return this.http.put(`${this.url}/upadte/` + id, data, {
      observe: 'response',
      responseType: 'text',
      headers:hedder
    });
  }

  deleteStudent(id: any): Observable<any> {
    let token=this.tokenService.getToken();
    let hedder=new HttpHeaders().set('Authorization',"Bearer "+token)
    return this.http.get(`${this.url}/delete/${id}`, {
      observe: 'response',
      responseType: 'text',
      headers:hedder
    });
  }
}
