import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class AppComponent  {
  title = "Movie-TV-Search-AngularJS";
  public isMenuCollapsed = true;
  ngOnInit(): void {
     
  }
  ngOnChanges():void{
      
  }
  navHidden(){
    this.isMenuCollapsed = true;
  }
}
