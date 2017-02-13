import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Dataset } from './dataset';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

  private catalogUrl = 'https://localhost:3443/api/datasets';

  constructor(private http: Http) { }

  getDatasets(): Observable<Dataset[]> {
    return this.http.get(this.catalogUrl)
      .map(res => res.json() as Dataset[]);
  }

  getDataset(id: string): Observable<Dataset> {
    const url = `${this.catalogUrl}/${id}`;
    return this.http.get(url)
      .map(res => res.json() as Dataset);
  }

}
