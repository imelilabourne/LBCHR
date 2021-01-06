import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { QuestionControlService } from 'src/app/components/shared/question-control.service';

@Component({
  selector: 'valid-id-form-group',
  templateUrl: './valid-id-form-group.component.html',
  styleUrls: ['./valid-id-form-group.component.css'],
  providers: [ QuestionControlService ]
})
export class ValidIdFormGroupComponent implements OnInit {

  @Input() validIdInfo: QuestionBase<string>[] = [];
  form: FormGroup;
 
  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form =  this.qcs.toFormGroup(this.validIdInfo);
  }

}
