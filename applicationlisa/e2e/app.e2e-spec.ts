import { ApplicationlisaPage } from './app.po';

describe('applicationlisa App', () => {
  let page: ApplicationlisaPage;

  beforeEach(() => {
    page = new ApplicationlisaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
