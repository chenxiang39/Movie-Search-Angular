import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subscription } from "rxjs";
import { GetsService} from '../../services/gets.service';
import { initDetail,filterNullMovieDetail, generateYearTimeVote, initVideo,filterVideo,filterCast,filterReview,filterNullTvDetail, filterNullTvArrInCarousel, filterNullMovieArrInCarousel} from '../../CommonFun';
import ipConfig from '../../../../ipconfig.json'
import {addMylist,checkContain,removeMylist,getMylist,addContinueWatch} from '../../LocalStorage'
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  changeURLscription: Subscription
  constructor(private route: ActivatedRoute,
    private router: Router,
    private getsService:GetsService
    ) {

  }
  public type;
  public id;
  public videoData = initVideo();
  public detailData = initDetail();
  public yearTimeVote = '';
  public isNeedAddCheckList = true;
  public showChecklist = false;
  public twitterlink = '';
  public facebooklink = '';
  public time;
  public castData = [];
  public reviewData = [];
  public recommendedTitle = '';
  public recommendedData = [];
  public similarTitle = '';
  public similarData = [];
  ngOnInit(): void {
    this.route.params.subscribe((data) =>{
      this.type = data.type;
      this.id = data.id;
      this.fetchData(this.type,this.id)
    })
  }
  fetchData(type,id){
      if(type === 'movie'){
          this.getsService.getURL(ipConfig.ip.node + '/gets/detail_movie?id='+ id).subscribe((res:any) =>{
            this.detailData = filterNullMovieDetail(res);
            let cur = {
              title : this.detailData.title,
              id : this.id,
              poster_path : this.detailData.poster_path,
              backdrop_path : this.detailData.backdrop_path,
              type : this.type
            }
            addContinueWatch(cur);
            this.yearTimeVote = generateYearTimeVote(this.detailData);
            this.getsService.getURL(ipConfig.ip.node + '/gets/cast_movie?id=' + id).subscribe((res:any)=>{
              this.castData = filterCast(res);
            })
            this.getsService.getURL(ipConfig.ip.node + '/gets/review_movie?id=' + id).subscribe((res:any)=>{
              this.reviewData = filterReview(res);
            })
            this.getsService.getURL(ipConfig.ip.node + '/gets/recommended_movie?id=' + id).subscribe((res:any)=>{
              this.recommendedData = filterNullMovieArrInCarousel(res);
              this.recommendedTitle = 'Recommended Movies';
            })
            this.getsService.getURL(ipConfig.ip.node + '/gets/similar_movie?id=' + id).subscribe((res:any)=>{
              this.similarData = filterNullMovieArrInCarousel(res);
              this.similarTitle = 'Similar Movies'
            })
            let curInfo = {
              poster_path : this.detailData.poster_path,
              type : this.type,
              id : this.id,
              title : this.detailData.title,
            }
            this.isNeedAddCheckList = checkContain(getMylist(), curInfo);
            this.getsService.getURL(ipConfig.ip.node + '/gets/video_movie?id='+ id).subscribe((res:any) =>{
              this.videoData = filterVideo(res);
              if(this.detailData.title !== 'N/A'){
                this.twitterlink = ' ' + this.detailData.title + '\n' + 
                'https://www.youtube.com/watch?v=' + this.videoData.key + '\n' + 
                "#USC  #CSCI571  #FightOn"
                this.twitterlink = encodeURIComponent(this.twitterlink);
                this.facebooklink = 'https://www.youtube.com/watch?v=' + this.videoData.key;
                this.facebooklink = encodeURIComponent(this.facebooklink);
              }
            })
          }) 
      }
      else if(type === 'tv'){
        this.getsService.getURL(ipConfig.ip.node + '/gets/detail_tv?id='+ id).subscribe((res:any) =>{
          this.detailData = filterNullTvDetail(res);
          let cur = {
            title : this.detailData.title,
            id : this.id,
            poster_path : this.detailData.poster_path,
            backdrop_path : this.detailData.backdrop_path,
            type : this.type
          }
          addContinueWatch(cur);
          this.yearTimeVote = generateYearTimeVote(this.detailData);
          this.getsService.getURL(ipConfig.ip.node + '/gets/cast_tv?id=' + id).subscribe((res:any)=>{
            this.castData = filterCast(res);
          })
          this.getsService.getURL(ipConfig.ip.node + '/gets/review_tv?id=' + id).subscribe((res:any)=>{
            this.reviewData = filterReview(res);
          })
          this.getsService.getURL(ipConfig.ip.node + '/gets/recommended_tv?id=' + id).subscribe((res:any)=>{
            this.recommendedData = filterNullTvArrInCarousel(res);
            this.recommendedTitle = 'Recommended TV Shows';
          })
          this.getsService.getURL(ipConfig.ip.node + '/gets/similar_tv?id=' + id).subscribe((res:any)=>{
            this.similarData = filterNullTvArrInCarousel(res);
            this.similarTitle = 'Similar TV Shows';
          })
          let curInfo = {
            poster_path : this.detailData.poster_path,
            type : this.type,
            id : this.id,
            title : this.detailData.title
          }
          this.isNeedAddCheckList = checkContain(getMylist(), curInfo);
          this.getsService.getURL(ipConfig.ip.node + '/gets/video_tv?id='+ id).subscribe((res:any) =>{
            this.videoData = filterVideo(res);
            if(this.detailData.title !== 'N/A'){
              this.twitterlink = ' ' + this.detailData.title + '\n' + 
              'https://www.youtube.com/watch?v=' + this.videoData.key + '\n' + 
              "#USC  #CSCI571  #FightOn"
              this.twitterlink = encodeURIComponent(this.twitterlink);
              this.facebooklink = 'https://www.youtube.com/watch?v=' + this.videoData.key;
              this.facebooklink = encodeURIComponent(this.facebooklink);
            }
          })
        }) 
      }
    }
  checklistBtnFun(){
    this.isNeedAddCheckList = !this.isNeedAddCheckList
    let curInfo = {
      poster_path : this.detailData.poster_path,
      type : this.type,
      id : this.id,
      title : this.detailData.title
    }
    //add
    if(this.isNeedAddCheckList){
      addMylist(curInfo);
    }
    //remove
    else{
      removeMylist(curInfo);
    }
    this.showChecklist = true;
    this.time = setTimeout(
      //arrow function(this => class)
      //traditional function(this => window),the settimeout function executes on the window scope
      () => {
      this.showChecklist = false;
      clearTimeout(this.time);
    },5000)
  }
  cancelchecklist(){
    this.showChecklist = false;
    clearTimeout(this.time);
  }
}
