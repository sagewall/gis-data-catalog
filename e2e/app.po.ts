import { browser, by, element } from 'protractor';

export class GisDataCatalogPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarBrandText() {
    return element(by.css('a.navbar-brand')).getText();
  }
}
