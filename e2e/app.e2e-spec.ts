import { PaymentPage } from './app.po';

describe('payment App', () => {
  let page: PaymentPage;

  beforeEach(() => {
    page = new PaymentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
