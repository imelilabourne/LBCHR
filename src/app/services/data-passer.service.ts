import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DataPasserService{
    constructor(){}

    public application: any;
    public applicationSummary: any;
}