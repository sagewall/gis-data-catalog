import { Component, OnInit } from '@angular/core';
import { Dataset } from '../dataset';
import { DatasetService } from '../dataset.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  datasets: Dataset[];

  constructor(private datasetService: DatasetService) { }

  ngOnInit() {
    this.datasetService
      .getDatasets()
      .subscribe(datasets => this.datasets = datasets);
  }

}
