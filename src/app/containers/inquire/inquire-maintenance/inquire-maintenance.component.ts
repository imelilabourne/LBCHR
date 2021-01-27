import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { WarningErrorComponent } from 'src/app/components/shared/modals/warning-error/warning-error.component';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { DataPasserService } from 'src/app/services/data-passer.service';
import { InquireService } from 'src/app/services/inquire.service';
import { QuestionService } from 'src/app/services/question.service';
import { RequestService } from 'src/app/services/request.service';
import { AddApplication, LoadApplications, UpdateApplicationSuccess } from 'src/store/actions/application.action';
import { Application, selectAll } from 'src/store/reducers/application.reducer';
interface AppState {
  applications: any;
}
@Component({
  selector: 'app-inquire-maintenance',
  templateUrl: './inquire-maintenance.component.html',
  styleUrls: ['./inquire-maintenance.component.css'],
  providers:  [QuestionService]
})
export class InquireMaintenanceComponent implements OnInit {

  questions$: Observable<QuestionBase<any>[]>;
  tableValues;
  tableValArray$ : Observable<Application[]>;
  selectedRequest;
  modalRef: BsModalRef;
  isChecked: boolean = false;
  form: FormGroup;

  @ViewChild('warningError') warningError:WarningErrorComponent;
  constructor(service: QuestionService, 
    private reqService: RequestService,
    private inquireService: InquireService, 
    private router: Router,
    private store: Store<AppState>,
    private fb: FormBuilder,
    private dataPasserService: DataPasserService) {
      this.questions$ = service.getQuestions();
  }

  ngOnInit() {
    //   this.reqService.getRequest().subscribe(data => {
    //   this.tableValues  = data;
    //   this.tableValArray =  this.tableValues.result; 
    // },  (() => this.inquireService.getApplication().subscribe(data => {
    //   //when 1st request fails
    //     this.tableValArray = data;
    //   })
    // ))

    this.form = this.fb.group({
      projectName: '',
      city:  '',
      rcCode: '',
      id: ''
    })
    this.store.dispatch(new LoadApplications());

    this.tableValArray$ = this.store.select(selectAll);

  }

  onSubmitForm(){

    // this.store.dispatch(new AddApplication(this.form.getRawValue()))
    const application = {
      id: new Date().getUTCMilliseconds().toString(),
      requestNo: new Date().getUTCMilliseconds().toString(),
      projectName: this.form.get('projectName').value,
      city: this.form.get('city').value
    }

    this.store.dispatch(new AddApplication(application))
  }

  update(){
    
    this.store.dispatch(new UpdateApplicationSuccess(this.form.get('id').value, {projectName: this.form.get('projectName').value}))
  }

  onRowClick(event, app){
    const activeRows  =  Array.from(document.querySelectorAll(".active-row"));

    //uncheck row
    if(event.target.parentElement.className ===  'active-row'){
      event.target.parentElement.classList.remove('active-row');
      activeRows.forEach(item => item.firstElementChild.firstElementChild.removeAttribute('checked'));
      this.selectedRequest = "";
    }
    //check selected row
    else{  
      activeRows.forEach(item => item.firstElementChild.firstElementChild.removeAttribute('checked'));
      activeRows.forEach(item => item.classList.remove('active-row'))
      event.target.parentElement.classList.add('active-row');
      event.target.parentElement.firstChild.firstChild.setAttribute('checked', true);
      this.selectedRequest = app;
    }
  }

  onRowClickUpdate(event, app){
  }

  onInquire(){
    if(this.selectedRequest){
      console.log("proceed");
      this.router.navigateByUrl("inquire-summary");
      this.dataPasserService.application  =  this.selectedRequest;
      
    }
    else{
      // alert("Please Select Request");
      this.warningError.openModal();
    }
    
  }

}
