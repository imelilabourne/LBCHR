import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { QuestionControlService } from 'src/app/components/shared/question-control.service';
import { DataPasserService } from 'src/app/services/data-passer.service';

@Component({
  selector: 'personal-information-form-group',
  templateUrl: './personal-information-form-group.component.html',
  styleUrls: ['./personal-information-form-group.component.css'],
  providers: [ QuestionControlService ]
})
export class PersonalInformationFormGroupComponent implements OnInit {

  @Input() personalInfo: QuestionBase<string>[] = [];

  @Output() formUpdatedValues= new EventEmitter<QuestionBase<string>[]>();

  form: FormGroup;
  payLoad = '';
  selectedRequest;

  constructor(private qcs: QuestionControlService, private dataPasserService: DataPasserService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.personalInfo);
    this.selectedRequest = JSON.parse(localStorage.getItem("selectedRequest"));
    

    this.form.patchValue(
      { 
        firstName:  this.dataPasserService.application.firstName,
        middleName:  this.dataPasserService.application.middleName,
        lastName: this.dataPasserService.application.lastName,
        birthDay: this.dataPasserService.application.birthday,
        nationality: this.dataPasserService.application.nationality,
        sex: this.dataPasserService.application.sex,
        birthPlace: this.dataPasserService.application.birthPlace,
        civilStatus: this.dataPasserService.application.civilStatus,
        motherName: this.dataPasserService.application.motherName,
        mobileNum: this.dataPasserService.application.mobileNum,
        emailAddress: this.dataPasserService.application.email
      }
    );
     
  }


  updateForm(){
    this.dataPasserService.application  = this.form.getRawValue();
    
  }

}
