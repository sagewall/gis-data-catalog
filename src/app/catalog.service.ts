import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Dataset } from './dataset';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

  constructor(private http: Http) { }

  getDatasets() {
    return this.http.get('../assets/mocks/datasets.json')
      .map(response => <Dataset[]>response.json().datasets);
  }

}
