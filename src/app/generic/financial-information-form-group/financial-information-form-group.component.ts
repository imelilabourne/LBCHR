import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { QuestionControlService } from 'src/app/components/shared/question-control.service';

@Component({
  selector: 'financial-information-form-group',
  templateUrl: './financial-information-form-group.component.html',
  styleUrls: ['./financial-information-form-group.component.css'],
  providers: [ QuestionControlService ]
})
export class FinancialInformationFormGroupComponent implements OnInit {
  @Input() financialInfo: QuestionBase<string>[] = [];
  form: FormGroup;

  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form  = this.qcs.toFormGroup(this.financialInfo);
  }

}
