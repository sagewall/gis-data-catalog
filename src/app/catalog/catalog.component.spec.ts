/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatasetComponent } from '../dataset/dataset.component';
import { DatasetDetailComponent } from '../dataset-detail/dataset-detail.component';
import { RouterModule } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { CatalogSearchService } from '../catalog-search.service';
import { CatalogComponent } from './catalog.component';
import { CatalogSearchComponent } from '../catalog-search/catalog-search.component';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        HttpModule,
        RouterTestingModule
      ],
      declarations: [
        CatalogComponent,
        CatalogSearchComponent,
        DatasetComponent,
        DatasetDetailComponent
      ],
      providers: [
        CatalogService,
        CatalogSearchService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
