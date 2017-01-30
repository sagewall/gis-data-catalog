import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Dataset } from './dataset';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CatalogService {

  private catalogUrl = 'catalog/datasets';

  constructor(private http: Http) { }

  getDatasets(): Promise<Dataset[]> {
    return this.http.get(this.catalogUrl)
      .toPromise()
      .then(response => response.json().data as Dataset[])
      .catch(this.handleError);
  }

  getDataset(id: number): Promise<Dataset> {
    const url = `${this.catalogUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Dataset)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
