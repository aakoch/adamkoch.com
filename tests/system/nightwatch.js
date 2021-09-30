


  // elements: {
  //   gdpr: '.cc-banner a'
  // },

describe('homepage test with describe', function() {
  
  before(function(browser) {
    this.homepage = browser.page.home();
  });

  test('startHomepage', () => {
    this.homepage.navigate();
    this.homepage.expect.section('@indexContainer').to.be.not.visible;
  });

  test('Ensure blog posts feather can be clicked', function (browser) {

      this // ?
      .waitForElementVisible('body')
      .assert.titleContains('Koch')
      .click('@gdpr')
      .assert.visible('#main > div > div > div > div > div:nth-child(1) > div > div.card-footer > small')
      .assert.visible('#main > div > div > div > div > div:nth-child(1) > div > div.icon-container')
  })
  test('Go to posts page', function (browser) {
    browser
      .click('#main > div > div > div > div > div:nth-child(1) > div > div.icon-container')
      .waitForElementVisible('body')
      .assert.containsText('body', 'My Technology Stack')
      .assert.not.containsText('body', 'Using getters in equals() method')
      .click('#posts-app > div > div:nth-child(2) > div:nth-child(8) > div > div > div > div > div:nth-child(4) > a:nth-child(1)')
      .waitForElementVisible('#posts-app > div > div:nth-child(2) > div:nth-child(9)')
      .assert.containsText('body', 'Using getters in equals() method')
      .saveScreenshot('./reports/search-result.png')
  })
  test('Scroll down', function (browser) {
    browser
      .end();
  })


  after(browser => browser.end());
})