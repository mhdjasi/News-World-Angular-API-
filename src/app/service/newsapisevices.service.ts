import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapisevicesService {

  constructor( private http:HttpClient) {  }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8761cd4159054dc5b4bf33853e83bd0d";

  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8761cd4159054dc5b4bf33853e83bd0d";

  bussinessApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8761cd4159054dc5b4bf33853e83bd0d";

  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8761cd4159054dc5b4bf33853e83bd0d";

  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8761cd4159054dc5b4bf33853e83bd0d";

  technologyApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8761cd4159054dc5b4bf33853e83bd0d";







  topHeading():Observable<any>{
    return this.http.get(this.newsApiUrl);
  }

  sportsnews():Observable<any>{
    return this.http.get(this.sportsApiUrl);
  }

  bussinessnews():Observable<any>{
    return this.http.get(this.bussinessApiUrl);
  }

  healthnews():Observable<any>{
    return this.http.get(this.healthApiUrl);
  }

  entertainmentnews():Observable<any>{
    return this.http.get(this.entertainmentApiUrl);
  }

  technologynews():Observable<any>{
    return this.http.get(this.technologyApiUrl);
  }


}
