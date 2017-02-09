import { Component, OnInit } from '@angular/core';
import { Dataset } from '../dataset';
import { CatalogService } from '../catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  datasets: Dataset[];

  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
    this.catalogService
      .getDatasets()
      .subscribe(datasets => this.datasets = datasets);
  }

}
