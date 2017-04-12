import { StockCriticoFrontPage } from './app.po';

describe('stock-critico-front App', () => {
  let page: StockCriticoFrontPage;

  beforeEach(() => {
    page = new StockCriticoFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
