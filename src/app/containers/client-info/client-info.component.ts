import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  form = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl('')
  })
  constructor() { }

  ngOnInit() {

    
  }

  getVal(event){
    console.log(this.form.value)
  }
}
