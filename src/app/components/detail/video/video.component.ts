import { Component, OnInit, Input} from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
import { debounceTime } from 'rxjs/operators'
import { getCurWidth, filterVideo} from '../../../CommonFun'
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  resizeObservable: Observable<Event>
  resizeSubscription: Subscription
  @Input() data : {}
  constructor() { 

  }
  


  
  width = getCurWidth() > 990 ? 0.5 * getCurWidth(): 0.8 * getCurWidth();
  height = this.width / 2;
  videoData = filterVideo([]);
  ngOnChanges():void{
    if(this.data !== undefined){
      this.videoData = {...this.videoData, ...this.data};
    }
  }
  ngOnInit(): void {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.head.appendChild(tag);
      this.resizeObservable = fromEvent(window, 'resize')
     //after 200ms check size
      this.resizeSubscription = this.resizeObservable.pipe(debounceTime(200)).subscribe(e =>{
        this.width = getCurWidth() > 990 ? 0.5 * getCurWidth(): 0.8 * getCurWidth();
        this.height = this.width / 2;
      })
  }
  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }
}
