import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.sass']
})
export class DatasetComponent {

  @Input() dataset;

}
