import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dataset } from './dataset';
import { Observable } from 'rxjs/observable';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class DatasetService {

  constructor( protected httpClient: HttpClient ) { }

  getDatasets(): Observable<Dataset[]> {
    return this.httpClient.get<Dataset[]>(`${environment.apiUrl}/datasets`);
  }

  getDataset(id: string): Observable<Dataset> {
    const url = `${environment.apiUrl}/datasets/${id}`;
    return this.httpClient.get<Dataset>(url);
  }

}
