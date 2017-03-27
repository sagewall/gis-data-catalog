import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatasetService } from '../dataset.service';
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
    private datasetService: DatasetService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.datasetService.getDataset(params['id']))
      .subscribe(dataset => this.dataset = dataset);
  }

  download() {
    window.open(this.dataset.downloadUrl);
  }

}
