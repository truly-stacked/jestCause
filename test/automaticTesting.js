describe('Loggin Tester', function() {
  it('should successfully log into a user', function() {
    browser.sleep(8000);
    browser.get('http://hangnyc.herokuapp.com/#/signin');
    browser.sleep(1000);
    element(by.model('user.email')).sendKeys('obama@test.com');
    browser.sleep(1000);
    element(by.model('user.password')).sendKeys('obama');
    browser.sleep(3000);
    element(by.css('[class="sbmt btn btn-lg"]')).click();
    browser.sleep(3000);

    let homeUrl ='http://hangnyc.herokuapp.com/#/home',
      currentUrl = browser.getCurrentUrl();
    browser.sleep(3000);

    expect(currentUrl).toEqual(homeUrl, 'Not What I Expected');

  });
});
