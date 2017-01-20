import { GisDataCatalogPage } from './app.po';

describe('gis-data-catalog App', function() {
  let page: GisDataCatalogPage;

  beforeEach(() => {
    page = new GisDataCatalogPage();
  });

  it('should display narbar-brand GIS Data Catalog', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('GIS Data Catalog');
  });
});
