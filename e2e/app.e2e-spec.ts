import { SoundmindPage } from './app.po';

describe('soundmind App', () => {
  let page: SoundmindPage;

  beforeEach(() => {
    page = new SoundmindPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
