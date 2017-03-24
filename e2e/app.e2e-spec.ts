import { TempPage } from './app.po';

describe('gis-data-catalog App', () => {
  let page: TempPage;

  beforeEach(() => {
    page = new TempPage();
  });

  it('should display GIS Data Catalog in navbar', () => {
    page.navigateTo();
    expect(page.getNavbarBrandText()).toEqual('GIS Data Catalog');
  });
});
