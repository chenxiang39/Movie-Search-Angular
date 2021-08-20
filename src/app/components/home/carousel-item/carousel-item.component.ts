import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { getCurWidth,divideImgArr} from '../../../CommonFun'
import { fromEvent, Observable, Subscription } from "rxjs";
import { debounceTime } from 'rxjs/operators'
@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})

export class CarouselItemComponent implements OnInit {
  resizeObservable: Observable<Event>
  resizeSubscription: Subscription
  @Input() title:String
  @Input() data:any[]
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
  constructor() { 
    
  }
  ngOnChanges():void{
    if(this.data !== undefined){
      this.originDataArr = this.data;
      this.pcDataArr = divideImgArr(this.originDataArr,6);
    }
  } 
  ngOnInit(): void {
     this.resizeObservable = fromEvent(window, 'resize')
     //after 200ms check size
     this.resizeSubscription = this.resizeObservable.pipe(debounceTime(200)).subscribe(e =>{
      this.mobile =  getCurWidth() > 990 ? false : true;
        this.showNavigationIndicators = getCurWidth() > 990 ? true : false;
    })
  }
  ngOnDestroy() {
    this.resizeSubscription.unsubscribe();
  }
  mobile =  getCurWidth() > 990 ? false : true;
  originDataArr = [];
  pcDataArr = [];
  interval = 0;
  paused = true;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;　
  pauseOnFocus = true;
  showNavigationIndicators = getCurWidth() > 990 ? true : false;
  
  // window.onresize = function(){
  //   this.mobile = getCurWidth() > 990 ? false : true;
  //   this.showNavigationIndicators = getCurWidth() > 990 ? true : false;
  // }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }
  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
