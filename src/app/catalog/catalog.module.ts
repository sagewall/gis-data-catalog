import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../in-memory-data.service';

import {CatalogComponent} from './catalog.component';
import {DatasetComponent} from '../dataset/dataset.component';
import {DatasetDetailComponent} from '../dataset-detail/dataset-detail.component';
import {CatalogService} from '../catalog.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    CatalogComponent,
    DatasetComponent,
    DatasetDetailComponent
  ],
  providers: [CatalogService]
})
export class CatalogModule {
}
