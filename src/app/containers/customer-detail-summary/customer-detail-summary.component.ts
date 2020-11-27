import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-detail-summary',
  templateUrl: './customer-detail-summary.component.html',
  styleUrls: ['./customer-detail-summary.component.css']
})
export class CustomerDetailSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alertbox(){
    alert("Are you sure you want to submit changes?")
  }
}
