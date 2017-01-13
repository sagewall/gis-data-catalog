import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Dataset } from './dataset';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CatalogService {

  private catalogUrl = '../assets/mocks/datasets.json';

  constructor(private http: Http) { }

  getDatasets(): Promise<Dataset[]> {
    return this.http.get(this.catalogUrl)
      .toPromise()
      .then(response => <Dataset[]>response.json().datasets)
      .catch(this.handleError);
  }

  getDataset(id: number): Promise<Dataset> {
    return this.getDatasets()
      .then(datasets => datasets.find(dataset => dataset.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
