import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Dataset } from './dataset';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Dataset[]> {
    return this.http
      .get(`catalog/datasets/?name=${term}`)
      .map(response => response.json().data as Dataset[]);
  }

}
