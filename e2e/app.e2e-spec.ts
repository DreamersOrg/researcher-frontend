import { ResearcherFrontendPage } from './app.po';

describe('researcher-frontend App', () => {
  let page: ResearcherFrontendPage;

  beforeEach(() => {
    page = new ResearcherFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
