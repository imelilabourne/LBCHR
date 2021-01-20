import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  updateRequest(value){
    return this.http.put(`http://localhost:3000/request?requestNo=1`, value);
  }
}
