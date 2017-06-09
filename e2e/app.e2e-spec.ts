import { DdwebPage } from './app.po';

describe('ddweb App', () => {
  let page: DdwebPage;

  beforeEach(() => {
    page = new DdwebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
