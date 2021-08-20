import { Component, Input, OnInit } from '@angular/core';
import { initCastDetail, initExternal} from '../../../../CommonFun'
import { NgbModal} from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modaldata:{}
  @Input() externaldata:{}
  constructor(
    private modal : NgbModal
  ) { }
  modalData = initCastDetail();
  externalData = initExternal();
  ngOnChanges():void{
    if(this.modaldata !== undefined){
      this.modalData = this.modaldata;
    }
    if(this.externaldata !== undefined){
      this.externalData = this.externaldata;
    }
  }
  ngOnInit(): void {
    
  }
  closeFun(){
    this.modal.dismissAll();
  }
}
