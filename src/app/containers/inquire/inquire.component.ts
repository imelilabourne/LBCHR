import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.css']
})
export class InquireComponent implements OnInit {
  page = 1;
  pageSize = 4;
  constructor() {
    this.refreshCountries();
  }

  refreshCountries() {

  }

  ngOnInit() {
  }

}
