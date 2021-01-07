import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { QuestionService } from 'src/app/services/question.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-inquire-maintenance',
  templateUrl: './inquire-maintenance.component.html',
  styleUrls: ['./inquire-maintenance.component.css'],
  providers:  [QuestionService]
})
export class InquireMaintenanceComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;
  tableValues;
  tableValArray = [];
  selectedRequest;
  constructor(service: QuestionService, 
    private reqService: RequestService,
    private router: Router) {
      this.questions$ = service.getQuestions();
  }

  ngOnInit() {
      this.reqService.getRequest().subscribe(data => {
      this.tableValues  = data;
      this.tableValArray =  this.tableValues.result;
    })
  }

  onRowClick(event, app){
    //check row
    if(event.target.parentElement.className ===  'active-row'){
      event.target.parentElement.classList.remove('active-row');
      this.selectedRequest = "";
    }
    //uncheck selected row
    else{  
      event.target.parentElement.classList.add('active-row');
      this.selectedRequest = app.requestNo;
    }

    if(this.selectedRequest){
      console.log("not empty");
    }
    else{
      console.log("empty");
      
    }
  }

  onInquire(){
    if(this.selectedRequest){
      console.log("proceed");
      this.router.navigateByUrl("inquire-summary");
    }
    else{
      alert("Please Select Request");
      
    }
    
  }

}
