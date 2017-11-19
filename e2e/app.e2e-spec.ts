import { AppPage } from './app.po';

describe('gis-data-catalog App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display navbar-brand', () => {
    page.navigateTo();
    expect(page.getNavbarBrandText()).toEqual('GIS Data Catalog');
  });
});
