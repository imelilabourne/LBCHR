import { Component, OnInit } from '@angular/core';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { InquireService } from 'src/app/services/inquire.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-inquire-summary',
  templateUrl: './inquire-application-summary.component.html',
  styleUrls: ['./inquire-application-summary.component.css']
})
export class InquireSummaryComponent implements OnInit {

  selectedRequest : QuestionBase<string>;
  constructor(private service: InquireService) { }

  ngOnInit() {
  this.service.getRequest(1).subscribe(data => {
    for(let i of Object.keys(data)){
      this.selectedRequest = data[i];
    }
    localStorage.setItem("selectedRequest", JSON.stringify(this.selectedRequest))
    
  }
    )


    
  }

}
