import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { Dataset } from './dataset';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class DatasetSearchService {

  constructor( protected httpClient: HttpClient ) { }

  search(term: string): Observable<Dataset[]> {
    return this.httpClient
      .get<Dataset[]>(`${environment.apiUrl}/datasets/search/${term}`);
  }

}
