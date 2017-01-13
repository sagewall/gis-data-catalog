import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CatalogComponent} from "./catalog.component";
import {DatasetComponent} from "../dataset/dataset.component";
import {CatalogService} from "../catalog.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CatalogComponent,
    DatasetComponent
  ],
  providers: [CatalogService],
  exports: [CatalogComponent]
})
export class CatalogModule {
}
