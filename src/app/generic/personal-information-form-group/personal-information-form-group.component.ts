import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { QuestionControlService } from 'src/app/components/shared/question-control.service';

@Component({
  selector: 'personal-information-form-group',
  templateUrl: './personal-information-form-group.component.html',
  styleUrls: ['./personal-information-form-group.component.css'],
  providers: [ QuestionControlService ]
})
export class PersonalInformationFormGroupComponent implements OnInit {

  @Input() personalInfo: QuestionBase<string>[] = [];
  form: FormGroup;
  payLoad = '';
  selectedRequest;
  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.personalInfo);
    this.selectedRequest = JSON.parse(localStorage.getItem("selectedRequest"));

    this.form.patchValue(
      { 
        customerName:  this.selectedRequest.firstName,
        middleName:  this.selectedRequest.middleName,
        lastName: this.selectedRequest.lastName,
        birthDate: this.selectedRequest.birthDate,
        nationality1: this.selectedRequest.nationality,
        sex: this.selectedRequest.sex,
        birthPlace: this.selectedRequest.birthPlace,
        civilStatus: this.selectedRequest.civilStatus,
        motherName: this.selectedRequest.motherName,
        mobileNum: this.selectedRequest.mobileNum,
        emailAddress: this.selectedRequest.email
      }
    );
     

  }

}
