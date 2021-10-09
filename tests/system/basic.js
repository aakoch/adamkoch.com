module.exports = {
  'homepage test': function (browser) {
    browser
      .url('https://6161a32f1a2daa0008148354--adamkoch.netlify.app/')
      .waitForElementVisible('body')
  },
  'Verify blog posts feather can be clicked': function (browser) {
    browser
      .waitForElementVisible('body')
      .assert.titleContains('Koch')
      .click('body > div.cc-window.cc-banner > div > a')
  },
  'Verify some card text was rendered': function (browser) {
    browser
      .assert.visible('#main > div > div > div > div > div:nth-child(1) > div > div.card-footer > small')
      .assert.visible('#main > div > div > div > div > div:nth-child(1) > div > div.icon-container')
      .assert.visible('#main > div > div > div > div > div:nth-child(1) > div > div.icon-container')
      .assert.containsText('#landing-app > div.container > div > div:nth-child(1) > div > div > p', 'Some hardware, but mostly software')
      .assert.containsText('#landing-app > div.container > div > div:nth-child(3) > div > div > p', 'Source code')
      .assert.containsText('#main > div > div > div > div > div:nth-child(2) > div > div.card-body > p', 'Things I\'m working on now')
  },
  'Go to posts page': function (browser) {
    browser
      .click('#main > div > div > div > div > div:nth-child(1) > div > div.icon-container')
      .waitForElementVisible('body')
      .assert.containsText('body', 'My Technology Stack')
      .assert.not.containsText('body', 'Using getters in equals() method')
  },
  'Scroll down': function (browser) {
    browser
      .execute(function () {
        window.scrollBy(0, 1000);
        return true;
      })
      .pause(500)
      .execute(function () {
        window.scrollBy(0, 1000);
        return true;
      })
      .pause(500)
      .execute(function () {
        window.scrollBy(0, 1000);
        return true;
      })
    // .click('#posts-app > div > div:nth-child(2) > div:nth-child(8) > div > div > div > div > div:nth-child(4) > a:nth-child(1)')
    // .execute(function() {
    //   window.scrollBy(0, 1000);
    //   return true;
    // })
  },
  'Verify posts were loaded': function (browser) {
    browser
      .waitForElementVisible('#posts-app > div > div:nth-child(2) > div:nth-child(9)')
      .assert.containsText('body', 'Using getters in equals() method')
      .saveScreenshot('./reports/search-result.png')
  },
  'Test search': function (browser) {
    browser
      // updateValue didn't work with Chrome
      .setValue('#gsc-i-id1', ['whitespace', browser.Keys.ENTER])
      .waitForElementVisible('#___gcse_0 > div > div > div.gsc-results-wrapper-overlay.gsc-results-wrapper-visible')
  },
  'Close browser': function (browser) {
    browser
      .end();
  }
};