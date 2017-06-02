/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { CatalogModule } from './catalog/catalog.module';
import { HelpComponent } from './help/help.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HelpComponent,
        PageNotFoundComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        CatalogModule,
        RouterTestingModule
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'GIS Data Catalog'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('GIS Data Catalog');
  }));

  it('should render title in .navbar-grand', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('GIS Data Catalog');
  }));
});
