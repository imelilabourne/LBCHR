import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { PersonalInformationFormGroupComponent } from 'src/app/generic/personal-information-form-group/personal-information-form-group.component';
import { DataPasserService } from 'src/app/services/data-passer.service';
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

  @ViewChild('personalInfo') personalInfo: PersonalInformationFormGroupComponent; 

  constructor(service: QuestionService, private dataPasserService: DataPasserService) { 
    this.personalInfo$ = service.getPersonalInfo();
    this.validIdInfo$ = service.getValidID();
    this.financialInfo$ = service.getFinancialInfo();
  }

  ngOnInit() {
  }

  onNext(){
    this.personalInfo.updateForm();
    console.log(this.dataPasserService.application);
    
  }

}
