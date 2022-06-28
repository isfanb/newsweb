import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private _service: NewsapiService) { }

  sportsDisplay: any = [];

  ngOnInit(): void {
    this._service.sports().subscribe(res => this.sportsDisplay = res.articles)
  }

}
