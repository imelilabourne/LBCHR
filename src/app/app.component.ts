import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Application } from "src/store/reducers/application.reducer";
import * as ApplicationActions from "../store/actions/application.action";

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

  text: string;

  applications$: Observable<Array<Application>>;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

  ngOnInit() {
    this.store.dispatch(new ApplicationActions.LoadApplications());

    this.applications$ = this.store.select((store) => store.applications.list);
  }

  form  = this.fb.group({
    projectName: [''],
    city:  [''],
    rcCode: ['']
  })

  onSubmitForm(){
    console.log(this.form.getRawValue());
    this.store.dispatch(
    // new ApplicationActions.AddApplicationSuccess(this.form.getRawValue())
    new ApplicationActions.UpdateApplication(this.form.getRawValue())
    ) 
  }
}
