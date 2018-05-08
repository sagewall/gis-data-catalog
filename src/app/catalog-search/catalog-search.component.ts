import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { DatasetSearchService } from '../dataset-search.service';
import { Dataset } from '../dataset';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.sass'],
  providers: [DatasetSearchService]
})
export class CatalogSearchComponent implements OnInit {

  datasets$: Observable<Dataset[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private datasetSearchService: DatasetSearchService,
    private router: Router
  ) {
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.datasets$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(value => this.datasetSearchService.search(value))
    );
  }

  gotoDetail(dataset: Dataset): void {
    const link = ['/catalog/datasets', dataset._id];
    this.router.navigate(link);
  }

}
