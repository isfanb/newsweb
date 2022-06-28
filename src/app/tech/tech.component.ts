import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private _service: NewsapiService) { }

  techDisplay: any = [];

  ngOnInit(): void {
    this._service.tech().subscribe(res => this.techDisplay = res.articles);
  }

}
