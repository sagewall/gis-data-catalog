import { Component, OnInit, Input } from '@angular/core';
import { Dataset } from '../dataset';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.sass']
})
export class LeafletMapComponent implements OnInit {

  @Input() dataset: Dataset;

  constructor() { }

  ngOnInit() {
    console.log(this.dataset.tileLayer);
    const leafletMap = L.map('leaflet-map')
      .setView([39.728, -105.202], 13);

    L.tileLayer(this.dataset.tileLayer)
      .addTo(leafletMap);
  }

}
