import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=4474169307b6448a8465a5644f0d6aff";
  businessApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4474169307b6448a8465a5644f0d6aff";
  entertainmentApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=4474169307b6448a8465a5644f0d6aff";
  sportsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=4474169307b6448a8465a5644f0d6aff";
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=4474169307b6448a8465a5644f0d6aff";
  healthApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=4474169307b6448a8465a5644f0d6aff";
  scienceApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=4474169307b6448a8465a5644f0d6aff";

  topHead():Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  business():Observable<any> {
    return this._http.get(this.businessApiUrl);
  }

  entertainment():Observable<any> {
    return this._http.get(this.entertainmentApiUrl);
  }

  sports():Observable<any> {
    return this._http.get(this.sportsApiUrl);
  }

  tech():Observable<any> {
    return this._http.get(this.techApiUrl);
  }

  health():Observable<any> {
    return this._http.get(this.healthApiUrl);
  }

  science():Observable<any> {
    return this._http.get(this.scienceApiUrl);
  }
}
