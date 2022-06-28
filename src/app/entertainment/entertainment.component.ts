import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  constructor(private _service: NewsapiService ) { }

  entertainmentDisplay: any  = [];

  ngOnInit(): void {
    this._service.entertainment().subscribe(res => this.entertainmentDisplay = res.articles);
  }

}
