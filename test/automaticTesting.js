describe('Loggin Tester', function() {
  it('should successfully log into a user', function() {
    browser.sleep(4000);
    browser.get('http://hangnyc.herokuapp.com/#/signin');
    browser.sleep(1000);
    element(by.model('user.email')).sendKeys('obama@test.com');
    browser.sleep(1000);
    element(by.model('user.password')).sendKeys('obama');
    browser.sleep(3000);
    element(by.css('[class="sbmt btn btn-lg"]')).click();
    browser.sleep(3000);
    element(by.css('[class="event-card"]')).click();
    browser.sleep(3000);
    element(by.css('[class="attendee ng-scope"]')).click();
    browser.sleep(8000);
    element(by.css('[class="homeButton md-button md-ink-ripple"]')).click();
    browser.sleep(3000);
    element(by.css('[class="settings heading md-button md-ink-ripple"]')).click();
    browser.sleep(1000);
    element(by.css('[class="logout md-button md-ink-ripple"]')).click();

    let homeUrl ='http://hangnyc.herokuapp.com/#/signin',
      currentUrl = browser.getCurrentUrl();
    browser.sleep(3000);
    expect(browser.getTitle()).toEqual('Hang');
    expect(currentUrl).toEqual(homeUrl, 'Not What I Expected');

  });
});
