import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }
  //token=5c1accc5427a94e42da2cf4d6d11ca31
  newsApiUrl = "https://gnews.io/api/v4/top-headlines?country=us&token=5c1accc5427a94e42da2cf4d6d11ca31";
  businessApiUrl = "https://gnews.io/api/v4/top-headlines?country=us&topic=business&token=5c1accc5427a94e42da2cf4d6d11ca31";
  entertainmentApiUrl = "https://gnews.io/api/v4/top-headlines?country=us&topic=entertainment&token=5c1accc5427a94e42da2cf4d6d11ca31";
  sportsApiUrl = "https://gnews.io/api/v4/top-headlines?country=us&topic=sports&token=5c1accc5427a94e42da2cf4d6d11ca31";
  techApiUrl = "https://gnews.io/api/v4/top-headlines?country=us&topic=technology&token=5c1accc5427a94e42da2cf4d6d11ca31";
  healthApiUrl = "https://gnews.io/api/v4/top-headlines?country=us&topic=health&token=5c1accc5427a94e42da2cf4d6d11ca31";
  scienceApiUrl = "https://gnews.io/api/v4/top-headlines?country=us&topic=science&token=5c1accc5427a94e42da2cf4d6d11ca31";

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
