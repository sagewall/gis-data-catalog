import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Dataset } from './dataset';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Dataset[]> {
    return this.http
      .get(`${environment.apiUrl}/datasets/search/${term}`)
      .map(response => response.json() as Dataset[]);
  }

}
