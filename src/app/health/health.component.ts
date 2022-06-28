import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _service: NewsapiService) { }

  healthDisplay: any = [];

  ngOnInit(): void {
    this._service.health().subscribe(res => this.healthDisplay = res.articles);
  }

}
