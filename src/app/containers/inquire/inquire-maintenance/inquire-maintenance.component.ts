import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { WarningErrorComponent } from 'src/app/components/shared/modals/warning-error/warning-error.component';
import { QuestionBase } from 'src/app/components/shared/question-base';
import { InquireService } from 'src/app/services/inquire.service';
import { QuestionService } from 'src/app/services/question.service';
import { RequestService } from 'src/app/services/request.service';
import { Application } from 'src/store/reducers/application.reducer';
import * as ApplicationActions from "../../../../store/actions/application.action";
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
  tableValArray$ : Observable<Application>;
  selectedRequest;
  modalRef: BsModalRef;
  isChecked: boolean = false;

  @ViewChild('warningError') warningError:WarningErrorComponent;
  constructor(service: QuestionService, 
    private reqService: RequestService,
    private inquireService: InquireService, 
    private router: Router,
    private store: Store<AppState>) {
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
    this.store.dispatch(new ApplicationActions.LoadApplications());

    this.tableValArray$ = this.store.select((store) => store.applications.list);

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
      this.selectedRequest = app.requestNo;
    }
  }

  onRowClickUpdate(event, app){
  }

  onInquire(){
    if(this.selectedRequest){
      console.log("proceed");
      this.router.navigateByUrl("inquire-summary");
    }
    else{
      // alert("Please Select Request");
      this.warningError.openModal();
    }
    
  }

}
