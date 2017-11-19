import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarBrandText() {
    return element(by.css('.navbar-brand')).getText();
  }
}
