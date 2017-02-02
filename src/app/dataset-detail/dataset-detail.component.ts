import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Dataset } from '../dataset';
import * as L from 'leaflet';
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
    const leafletMap = L.map('leaflet-map')
      .setView([39.728, -105.202], 13);

    L.tileLayer(this.dataset.tileLayer)
      .addTo(leafletMap);
  }
}
