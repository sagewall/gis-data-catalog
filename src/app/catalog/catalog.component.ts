import { Component, OnInit } from '@angular/core';
import { Dataset } from '../dataset';
import { DatasetService } from '../dataset.service';
import { DatasetSearchService } from '../dataset-search.service';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.sass'],
  providers: [DatasetSearchService]
})
export class CatalogComponent implements OnInit {

  datasets: Dataset[];
  tags: string[];
  selectedTag: string;

  constructor(
    private datasetService: DatasetService,
    private datasetSearchService: DatasetSearchService,
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

  filterDatasets(tag) {
    if (tag !== this.selectedTag) {
      this.selectedTag = tag;
      this.datasetSearchService
        .search(tag)
        .subscribe(datasets => this.datasets = datasets);
    } else {
      this.selectedTag = null;
      this.datasetService
        .getDatasets()
        .subscribe(datasets => this.datasets = datasets);
    }
  }
}
