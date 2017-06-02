import { GisDataCatalogPage } from './app.po';

describe('gis-data-catalog App', () => {
  let page: GisDataCatalogPage;

  beforeEach(() => {
    page = new GisDataCatalogPage();
  });

  it('should display GIS Data Catalog in navbar', done => {
    page.navigateTo();
    page.getNavbarBrandText()
      .then(msg => expect(msg).toEqual('GIS Data Catalog'))
      .then(done, done.fail);
  });
});
