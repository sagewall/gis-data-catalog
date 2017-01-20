import { browser, element, by } from 'protractor';

export class GisDataCatalogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root .navbar-brand')).getText();
  }
}
