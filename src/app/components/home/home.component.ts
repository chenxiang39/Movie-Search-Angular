import { Component, OnInit } from '@angular/core';
import { GetsService} from '../../services/gets.service'
import { filterNullMovieArrInCarousel, filterNullTvArrInCarousel} from '../../CommonFun'
import { getContinueWatch} from '../../LocalStorage'
import ipConfig from '../../../../ipconfig.json'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Movietype :String = "movie";
  public Tvtype :String = "tv";
  public continueWatchData : any[]
  public continueWatchtitle : String = "Continue Watching"
  public currentPlayingData :any[]
  public popularMovietitle : String = "Popular Movies"
  public popularMovieData :any[]
  public topRatedMovietitle : String = "Top Rated Movies"
  public topRatedMovieData :any[]
  public trendingMovietitle : String = "Trending Movies"
  public trendingMovieData :any[]
  public popularTVtitle : String = "Popular TV Shows"
  public popularTVData :any[]
  public topRatedTVtitle : String = "Top Rated TV Shows"
  public topRatedTVData :any[]
  public trendingTVtitle : String = "Trending TV Shows"
  public trendingTVData :any[]
  constructor(private getsService:GetsService) {

  }

  ngOnInit(): void {
      this.continueWatchData = getContinueWatch();
      this.fetchData();
  }
  fetchData(){
    this.getsService.getURL(ipConfig.ip.node + '/gets/currently_playing').subscribe((res:any) =>{
       this.currentPlayingData = filterNullMovieArrInCarousel(res);
    })
    this.getsService.getURL(ipConfig.ip.node + '/gets/popular_movies').subscribe((res:any) =>{
       this.popularMovieData = filterNullMovieArrInCarousel(res);
    })
    this.getsService.getURL(ipConfig.ip.node + '/gets/top_rated_movies').subscribe((res:any) =>{
       this.topRatedMovieData = filterNullMovieArrInCarousel(res);
    })
    this.getsService.getURL(ipConfig.ip.node + '/gets/trending_movies').subscribe((res:any) =>{
       this.trendingMovieData = filterNullMovieArrInCarousel(res);
    })
    this.getsService.getURL(ipConfig.ip.node + '/gets/popular_tv').subscribe((res:any) =>{
       this.popularTVData = filterNullTvArrInCarousel(res);
    })
    this.getsService.getURL(ipConfig.ip.node + '/gets/top_rated_tv').subscribe((res:any) =>{
      this.topRatedTVData = filterNullTvArrInCarousel(res);
   })
   this.getsService.getURL(ipConfig.ip.node + '/gets/trending_tv').subscribe((res:any) =>{
      this.trendingTVData = filterNullTvArrInCarousel(res);
   })
  }
}
