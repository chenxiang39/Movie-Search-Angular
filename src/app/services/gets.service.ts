import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GetsService {

  constructor(private httpClient:HttpClient) {

  }

  getURL(url){
    return this.httpClient.get(url);
  }
    
}
