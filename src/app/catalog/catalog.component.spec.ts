/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DatasetComponent } from '../dataset/dataset.component';
import { DatasetDetailComponent } from '../dataset-detail/dataset-detail.component';
import { RouterModule } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { CatalogComponent } from './catalog.component';
import { HttpModule } from '@angular/http';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule,
        HttpModule
      ],
      declarations: [
        CatalogComponent,
        DatasetComponent,
        DatasetDetailComponent
      ],
      providers: [CatalogService]
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
