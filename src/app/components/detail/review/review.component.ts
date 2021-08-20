import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() data = []
  public reviewData = []
  constructor() { }
  ngOnChanges():void{
    if(this.data !== undefined){
      this.reviewData = this.data;
    }
  }
  ngOnInit(): void {

  }
}
