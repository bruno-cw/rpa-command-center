import { CommandClientPage } from './app.po';

describe('command-client App', function() {
  let page: CommandClientPage;

  beforeEach(() => {
    page = new CommandClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
