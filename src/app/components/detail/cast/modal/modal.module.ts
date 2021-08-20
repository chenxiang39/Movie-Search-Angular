import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [ModalModule],
  exports: [ModalModule],
  bootstrap: [ModalModule]
})
export class ModalModule {}
