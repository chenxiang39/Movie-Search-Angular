import { Component,OnInit,Input} from '@angular/core';
import { initCastDetail, initExternal, filterCastDetail, filterExternal} from '../../../CommonFun'
import { GetsService} from '../../../services/gets.service';
import ipConfig from '../../../../../ipconfig.json';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.css']
})
export class CastComponent implements OnInit {
  @Input() data : []
  public castData : []
  public modalData = initCastDetail();
  public castExternalData = initExternal();
  public castURL : ''
  constructor(
    private getsService:GetsService,
    private modalService: NgbModal
  ) { }
  ngOnChanges():void{
    if(this.data !== undefined){
      this.castData = this.data;
    }
    
  }
  ngOnInit(): void {
  }
  castBtnFun(id,modal){
    this.getsService.getURL(ipConfig.ip.node + '/gets/cast_detail?id=' + id).subscribe((res:any)=>{
      this.modalData = filterCastDetail(res);
      this.getsService.getURL(ipConfig.ip.node + '/gets/cast_external?id=' + id).subscribe((res:any)=>{
        this.castExternalData = filterExternal(res);
        this.modalService.open(modal, { scrollable: true });
      })
    }) 
  }
}
