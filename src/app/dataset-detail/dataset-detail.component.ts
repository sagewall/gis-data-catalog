import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.sass']
})
export class DatasetDetailComponent implements OnInit {

  public id;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(
      (params: Params) => this.id = params['id']
    );
  }
}
