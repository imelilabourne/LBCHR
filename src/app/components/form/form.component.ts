import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() control: AbstractControl;
  @Input() label: string;

  @Output() getValue = new EventEmitter;
  constructor(private fb: FormBuilder) { }

  

  ngOnInit() {
    
  }

  onChange(event){
    this.getValue.emit(this.control);
  }
}
