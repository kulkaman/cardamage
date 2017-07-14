import { FinalPage } from './app.po';

describe('final App', function() {
  let page: FinalPage;

  beforeEach(() => {
    page = new FinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
