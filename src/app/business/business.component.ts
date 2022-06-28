import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

  constructor(private _service: NewsapiService) { }

  businessDisplay: any = [];

  ngOnInit(): void {
    this._service.business().subscribe(res => {
      console.log(res);
      this.businessDisplay = res.articles;
    })   
  }

}
