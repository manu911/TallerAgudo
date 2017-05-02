import { TallerWebPage } from './app.po';

describe('taller-web App', function() {
  let page: TallerWebPage;

  beforeEach(() => {
    page = new TallerWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
