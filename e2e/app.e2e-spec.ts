import { GisDataCatalogUpdatePage } from './app.po';

describe('gis-data-catalog-update App', () => {
  let page: GisDataCatalogUpdatePage;

  beforeEach(() => {
    page = new GisDataCatalogUpdatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
