import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [VideoModule],
  exports: [VideoModule],
  bootstrap: [VideoModule]
})
export class VideoModule {}
