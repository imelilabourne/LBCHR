import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Url from '../../config/api';
import { map } from 'rxjs/operators'
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
}
