import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { environment } from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class TagService {

  constructor(private http: Http) { }

  getTags(): Observable<string[]> {
    return this.http.get(`${environment.apiUrl}/tags`)
      .map(res => res.json() as string[]);
  }
}
