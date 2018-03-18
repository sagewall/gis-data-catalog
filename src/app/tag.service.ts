import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class TagService {

  constructor( protected httpClient: HttpClient ) { }

  getTags(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/tags`);
  }
}
