import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {YouTubePlayerModule} from '@angular/youtube-player'
import { HomeComponent } from './components/home/home.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { CarouselHeaderComponent } from './components/home/carousel-header/carousel-header.component';
import { CarouselItemComponent } from './components/home/carousel-item/carousel-item.component';
import { DetailComponent } from './components/detail/detail.component' 
import { VideoComponent } from './components/detail/video/video.component'
import { CastComponent } from './components/detail/cast/cast.component';
import { ReviewComponent } from './components/detail/review/review.component';
import { ModalComponent } from './components/detail/cast/modal/modal.component';
import { SearchComponent } from './components/search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyListComponent,
    CarouselHeaderComponent,
    CarouselItemComponent,
    DetailComponent,
    VideoComponent,
    CastComponent,
    ReviewComponent,
    ModalComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
