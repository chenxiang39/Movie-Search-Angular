import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [CastModule, ModalComponent],
  exports: [CastModule],
  bootstrap: [CastModule]
})
export class CastModule {}
