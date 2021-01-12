import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from './question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;
  isSearchCriteria:boolean = false;
  get isValid() { return this.form.controls[this.question.key].valid; }
  constructor(private location: Location){
 
  }


  ngOnInit(){
    this.isSearchCriteria = this.location.path() === '/inquire'
  }
}