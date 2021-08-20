import {Component, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import {GetsService} from '../../services/gets.service'
import ipConfig from '../../../../ipconfig.json'
import {filterSearch} from '../../CommonFun'

  @Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
  })

export class SearchComponent {
  @Output() navbarHidden = new EventEmitter<string>();
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private getsService : GetsService,
              public router : Router,
              public route : ActivatedRoute
    ) {}

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(query => {
        return this.getsService.getURL(ipConfig.ip.node + '/gets/multi_search?query='+ query).pipe(
          map(res => {
            return filterSearch(res);
          }),
          catchError(()=>{
            return of ([]);
          })
        )
    }
    )
  )
    formatter = (obj) =>{
      // this.router.navigate(['/watch/',obj.media_type,obj.id]);
      this.navbarHidden.emit("");
      return ""
    }
}