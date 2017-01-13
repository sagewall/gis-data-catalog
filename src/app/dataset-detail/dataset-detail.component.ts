import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Dataset } from '../dataset';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.sass']
})
export class DatasetDetailComponent implements OnInit {

  dataset: Dataset;

  constructor(
    private route: ActivatedRoute,
    private catalogService: CatalogService
  ) { }


  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.catalogService.getDataset(+params['id']))
      .subscribe(dataset => this.dataset = dataset);
  }

  download() {
    window.open(this.dataset.downloadUrl);
  }

  preview() {
    window.open(this.dataset.previewUrl);
  }
}
