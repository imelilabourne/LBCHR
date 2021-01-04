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
    return this.http.get('../../database/application.json');
  }
}
