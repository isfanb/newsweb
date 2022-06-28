import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {

  constructor(private _service: NewsapiService) { }

  topDisplay: any = [];

  ngOnInit(): void {
    this._service.topHead().subscribe(res => {
      console.log(res);
      this.topDisplay = res.articles;
    })
  }
}
