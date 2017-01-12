import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogService } from './catalog.service';
import { DatasetComponent } from './dataset/dataset.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    DatasetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
