import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})


export class RequestService{
    constructor(private http: HttpClient){}

    getRequest(){
        return this.http.get('https://virtserver.swaggerhub.com/TeraSystem/Appraisal-Phase-2/1.0.0/pa/request');
    }
}