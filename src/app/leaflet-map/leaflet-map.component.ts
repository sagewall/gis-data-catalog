import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from '../dataset';
import * as L from 'leaflet';
import * as esri from 'esri-leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.sass']
})
export class LeafletMapComponent implements OnInit {

  @Input() dataset: Dataset;

  constructor() {
  }

  ngOnInit() {
    const leafletMap = L.map('leaflet-map')
      .setView([this.dataset.lat, this.dataset.lon], this.dataset.zoom);

    esri.basemapLayer('Gray').addTo(leafletMap);

    esri.dynamicMapLayer({
      url: this.dataset.dynamicMapLayer
    }).addTo(leafletMap);
  }

}
