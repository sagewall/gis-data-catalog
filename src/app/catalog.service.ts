import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

  private catalogUrl = '//localhost:3000/api/datasets';

  constructor(private http: Http) { }

  getDatasets(){
    return this.http.get(this.catalogUrl)
      .map(res => res.json());
  }

  getDataset(id: string){
    const url = `${this.catalogUrl}/${id}`;
    return this.http.get(url)
      .map(res => res.json());
  }

}
