import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatasetService } from '../dataset.service';
import { Dataset } from '../dataset';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.sass']
})
export class DatasetDetailComponent implements OnInit {

  dataset$: Observable<Dataset>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private datasetService: DatasetService
  ) {
  }

  ngOnInit() {
    this.dataset$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.datasetService.getDataset(params.get('id')))
    );
  }

  download() {
    this.dataset$.subscribe(dataset => window.open(dataset.downloadUrl));
  }

}
