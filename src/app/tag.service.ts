import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class TagService {

  constructor(protected httpClient: HttpClient) {
  }

  getTags(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${environment.apiUrl}/tags`);
  }
}
