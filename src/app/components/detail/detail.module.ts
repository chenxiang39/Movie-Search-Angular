import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoComponent } from './video/video.component';
import { CastComponent } from './cast/cast.component';
import { ReviewComponent } from './review/review.component';
import { CarouselItemComponent } from '../home/carousel-item/carousel-item.component';
import { ModalComponent } from './cast/modal/modal.component'
@NgModule({
  declarations: [
  VideoComponent,
  CastComponent,
  ReviewComponent,
  CarouselItemComponent,
  ModalComponent
],
  imports: [
    BrowserModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [DetailModule]
})
export class DetailModule { }