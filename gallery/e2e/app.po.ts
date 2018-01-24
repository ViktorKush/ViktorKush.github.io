import { browser, element, by } from 'protractor';

export class GalleryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('epam-root h1')).getText();
  }
}
