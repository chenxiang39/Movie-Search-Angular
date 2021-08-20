import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselHeaderComponent } from './carousel-header.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [CarouselHeaderComponent],
  exports: [CarouselHeaderComponent],
  bootstrap: [CarouselHeaderComponent]
})
export class CarouselHeaderModule {}