import { Component, OnInit } from '@angular/core';
import { InquireService } from 'src/app/services/inquire.service';

@Component({
  selector: 'app-inquire',
  templateUrl: './inquire.component.html',
  styleUrls: ['./inquire.component.css']
})
export class InquireComponent implements OnInit {
  page = 1;
  pageSize = 4;
  application: any;

  constructor(private inquireService: InquireService) {
    this.refreshCountries();
  }

  refreshCountries() {

  }

  ngOnInit() {
    this.inquireService.getApplication().subscribe(data => {
      this.application = data;
    })
  }

}
