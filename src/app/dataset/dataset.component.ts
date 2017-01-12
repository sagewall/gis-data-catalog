import { Component, OnInit, Input } from '@angular/core';
import { CatalogComponent } from '../catalog/catalog.component';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.sass']
})
export class DatasetComponent implements OnInit {

  @Input() dataset;

  constructor( private catalogComponent: CatalogComponent) { }

  ngOnInit() {
  }

}
