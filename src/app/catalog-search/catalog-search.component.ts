import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { DatasetSearchService } from '../dataset-search.service';
import { Dataset } from '../dataset';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.sass'],
  providers: [DatasetSearchService]
})
export class CatalogSearchComponent implements OnInit {

  datasets: Observable<Dataset[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private datasetSearchService: DatasetSearchService,
    private router: Router
  ) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.datasets = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.datasetSearchService.search(term)
        : Observable.of<Dataset[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Dataset[]>([]);
        }
      );
  }

  gotoDetail(dataset: Dataset): void {
    const link = ['/catalog/datasets', dataset._id];
    this.router.navigate(link);
  }

}
