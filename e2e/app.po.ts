import { browser, by, element } from 'protractor';

export class SoundmindPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToLogin() {
    return browser.get('/api/login');
  }

  navigateToSignup() {
    return browser.get('/api/signup');
  }

  getValueInputLoginName() {
    return element(by.name('email')).getAttribute('value');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
