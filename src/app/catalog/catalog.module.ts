import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { DatasetComponent } from '../dataset/dataset.component';
import { DatasetDetailComponent } from '../dataset-detail/dataset-detail.component';
import { CatalogService } from '../catalog.service';
import { CatalogSearchComponent } from '../catalog-search/catalog-search.component';
import { LeafletMapComponent } from '../leaflet-map/leaflet-map.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CatalogComponent,
    DatasetComponent,
    DatasetDetailComponent,
    CatalogSearchComponent,
    LeafletMapComponent
  ],
  providers: [CatalogService]
})
export class CatalogModule {
}
