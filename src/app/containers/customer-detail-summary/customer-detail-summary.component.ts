import { Component, OnInit, ViewChild } from '@angular/core';
import { WarningErrorComponent } from 'src/app/components/shared/modals/warning-error/warning-error.component';

@Component({
  selector: 'app-customer-detail-summary',
  templateUrl: './customer-detail-summary.component.html',
  styleUrls: ['./customer-detail-summary.component.css']
})
export class CustomerDetailSummaryComponent implements OnInit {
  @ViewChild('warningError') warningError:WarningErrorComponent;

  constructor() { }

  ngOnInit() {
  }

  alertbox(){
    this.warningError.openModal();
  }
}
