import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'confirmatin-modal',
  templateUrl: './confirmatin-modal.component.html',
  styleUrls: ['./confirmatin-modal.component.css']
})
export class ConfirmatinModalComponent implements OnInit {

  modalRef: BsModalRef;
  @Output() modalShow: EventEmitter<any> = new EventEmitter();
  @ViewChild('confirmationModal') confirmationModal: ModalDirective;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  public openModal(){
    this.modalRef = this.modalService.show(this.confirmationModal);
    // this.modalShow.emit(template);
  }


}
