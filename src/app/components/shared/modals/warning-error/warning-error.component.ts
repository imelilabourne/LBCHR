import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'warning-error',
  templateUrl: './warning-error.component.html',
  styleUrls: ['./warning-error.component.css'],
  providers: [ BsModalService, BsModalRef]
})
export class WarningErrorComponent implements OnInit {

  modalRef: BsModalRef;
  @Output() modalShow: EventEmitter<any> = new EventEmitter();
  @ViewChild('warningError') warningError: ModalDirective;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public openModal(){
    this.modalRef = this.modalService.show(this.warningError);
  }
}
