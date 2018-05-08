import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dataset } from './dataset';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable()
export class DatasetSearchService {

  constructor(protected httpClient: HttpClient) {
  }

  search(term: string): Observable<Dataset[]> {
    if (!term.trim()) {
      return of<Dataset[]>([]);
    }
    return this.httpClient
      .get<Dataset[]>(`${environment.apiUrl}/datasets/search/${term}`)
      .pipe(
        catchError(() => of<Dataset[]>([]))
      );
  }

}
