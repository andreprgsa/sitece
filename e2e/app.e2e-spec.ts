import { TestCePage } from './app.po';

describe('test-ce App', function() {
  let page: TestCePage;

  beforeEach(() => {
    page = new TestCePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
