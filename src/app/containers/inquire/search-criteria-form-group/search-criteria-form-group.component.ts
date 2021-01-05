import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { QuestionControlService } from 'src/app/components/shared/question-control.service';

@Component({
  selector: 'app-search-criteria-form-group',
  templateUrl: './search-criteria-form-group.component.html',
  styleUrls: ['./search-criteria-form-group.component.css'],
  providers: [ QuestionControlService ]
})
export class SearchCriteriaFormGroupComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';


  constructor(private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = this.form.getRawValue();
    console.log(this.payLoad);
    
  }
}
