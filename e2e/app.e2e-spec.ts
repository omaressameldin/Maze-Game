import { MazePage } from './app.po';

describe('maze App', () => {
  let page: MazePage;

  beforeEach(() => {
    page = new MazePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
