import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { getCurWidth} from '../../../CommonFun'
@Component({
  selector: 'app-carousel-header',
  templateUrl: './carousel-header.component.html',
  styleUrls: ['./carousel-header.component.css']
})
export class CarouselHeaderComponent implements OnInit {
  @Input() data:any[]
  @Input() type:String
  constructor() { 

  }
  ngOnInit(): void {
     
  }
  ngOnChanges():void{
    if(this.data !== undefined){
      this.dataArr = this.data;
    }
  } 
  dataArr = [];
  interval = 5000;
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  showNavigationIndicators = getCurWidth() > 990 ? true : false;
  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;
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
