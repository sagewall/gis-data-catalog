import { Component, OnInit } from '@angular/core';
import { Dataset } from '../dataset';
import { DatasetService } from '../dataset.service';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass']
})
export class CatalogComponent implements OnInit {

  datasets: Dataset[];
  tags: string[];

  constructor(
    private datasetService: DatasetService,
    private tagService: TagService
  ) { }

  ngOnInit() {
    this.datasetService
      .getDatasets()
      .subscribe(datasets => this.datasets = datasets);

    this.tagService
      .getTags()
      .subscribe(tags => this.tags = tags);
  }

}
