import { Location } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Application } from "src/store/reducers/application.reducer";
import * as fromApplication from '../store/reducers/application.reducer';
import { InquireService } from "./services/inquire.service";
interface AppState {
  applications: any;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "LBCHR-App";
  showNavbar: boolean =  false;
  text: string;

  applications$: Observable<Array<Application>>;
  constructor(private store: Store<fromApplication.State>, private fb: FormBuilder, private reqService: InquireService, private location: Location) {}

  ngOnInit() {
    if(this.location.path() !== '/login'){
      this.showNavbar = true;
    }
    // this.store.dispatch(new ApplicationActions.LoadApplications());

    // this.applications$ = this.store.select((store) => store.applications.list);

    // this.applications$ = this.store.select(fromApplication.selectAll);
  }

  // createApplication(){
  //   const application: fromApplication.Application = {
  //     id: new Date().getUTCMilliseconds().toString(),
  //     projectName: 'Eli Labourne'
  //   }

  //   this.store.dispatch(new ApplicationActions.AddApplicationSuccess(application))
  // }

  // updateApplication(id, projectName){
  //   this.store.dispatch( new ApplicationActions.UpdateApplicationSuccess(id, {projectName: projectName}))
  // }

  // form  = this.fb.group({
  //   projectName: [''],
  //   city:  [''],
  //   rcCode: ['']
  // })

  // onSubmitForm(){
  //   console.log(this.form.getRawValue());
  //   this.store.dispatch(
  //   new ApplicationActions.UpdateApplicationSuccess('1',this.form.getRawValue())
  //   // new ApplicationActions.UpdateApplication(this.form.getRawValue())
  //   ) 

  //   // this.reqService.updateRequest(this.form.get('projectName').value).subscribe(data =>  console.log(data)
  //   // )
  // }
}
