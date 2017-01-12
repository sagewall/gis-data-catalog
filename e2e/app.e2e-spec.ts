import { GisDataCatalogPage } from './app.po';

describe('gis-data-catalog App', function() {
  let page: GisDataCatalogPage;

  beforeEach(() => {
    page = new GisDataCatalogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
