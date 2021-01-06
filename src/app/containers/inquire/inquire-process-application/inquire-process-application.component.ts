import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'inquire-process-application',
  templateUrl: './inquire-process-application.component.html',
  styleUrls: ['./inquire-process-application.component.css'],
  providers: [QuestionService]
})
export class InquireProcessApplicationComponent implements OnInit {
  personalInfo$ :  Observable<QuestionBase<any>[]>;
  validIdInfo$: Observable<QuestionBase<any>[]>;
  financialInfo$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) { 
    this.personalInfo$ = service.getPersonalInfo();
    this.validIdInfo$ = service.getValidID();
    this.financialInfo$ = service.getFinancialInfo();
  }

  ngOnInit() {
  }

}
