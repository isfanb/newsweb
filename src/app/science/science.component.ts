import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private _service: NewsapiService) { }
  
  scienceDisplay: any = [];

  ngOnInit(): void {
    this._service.science().subscribe(res => this.scienceDisplay = res.articles);
  }

}
