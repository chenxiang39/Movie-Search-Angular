import { Component, OnInit } from '@angular/core';
import { getMylist } from '../../LocalStorage'
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  mylistData = [];
  mobile = false;
  constructor(
  ) { }
  ngOnInit(): void {
    this.mylistData = getMylist();
  }
}
