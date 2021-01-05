import { Component, OnInit } from '@angular/core';
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
  constructor(service: QuestionService, private reqService: RequestService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit() {
      this.reqService.getRequest().subscribe(data => {
      this.tableValues  = data;
      this.tableValArray =  this.tableValues.result;
    })
  }

}
