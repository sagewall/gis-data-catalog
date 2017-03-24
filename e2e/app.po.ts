import { browser, element, by } from 'protractor';

export class TempPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarBrandText() {
    return element(by.css('a.navbar-brand')).getText();
  }
}
