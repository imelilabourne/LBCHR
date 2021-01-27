import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InquireService {

  
  constructor( 
    private http: HttpClient
  ) { }

  getApplication(){
    return this.http.get('http://localhost:3000/request');
  }

  getRequest(requestNo){
    return this.http.get(`http://localhost:3000/request?requestNo=${requestNo}`);
  }

  addRequest(value){
    return this.http.post('http://localhost:3000/request', value,  httpOptions
    )
  }

  updateRequest(id, value){
    return this.http.put(`http://localhost:3000/request/1`, id, value);
  }
}
