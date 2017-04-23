import { Angular4QuickStartPage } from './app.po';

describe('angular4-quick-start App', () => {
  let page: Angular4QuickStartPage;

  beforeEach(() => {
    page = new Angular4QuickStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
