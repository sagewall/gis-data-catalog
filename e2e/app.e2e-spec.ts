import { TempPage } from './app.po';

describe('gis-data-catalog App', () => {
  let page: TempPage;

  beforeEach(() => {
    page = new TempPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
