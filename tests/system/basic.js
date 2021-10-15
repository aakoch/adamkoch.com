module.exports = {
  'homepage test': function (browser) {
    browser
      .url('http://localhost:5000')
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
      .click('#___gcse_0 > div > div > div.gsc-results-wrapper-overlay.gsc-results-wrapper-visible > div.gsc-results-close-btn.gsc-results-close-btn-visible')
      .execute(function () {
        window.scrollBy(0, -1000);
        return true;
      })
      .pause(500)
  },
  'Verify comment form is rendered on post page': function (browser) {
    browser
    .waitForElementVisible('body > div.page-header > nav > div.navbar-brand > a')
      .click('body > div.page-header > nav > div.navbar-brand > a')
      .waitForElementVisible('#main > div > div > div > div > div:nth-child(1) > div > div.card-text > div > a:nth-child(1)', 50000)
      .click('#main > div > div > div > div > div:nth-child(1) > div > div.card-text > div > a:nth-child(1)')
      .url('http://localhost:5000/posts/2021/10/14')
      .waitForElementVisible('#commentForm > fieldset > div.postTitle > h1')
      .assert.containsText('body', 'Recruiter Tips')
    //     .saveScreenshot('./reports/search-result.png')
  },
  'Verify comment form is rendered on contact page': function (browser) {
    browser
    .click('body > div.page-header > nav > div.navbar-brand > a')
    .waitForElementVisible('#footer > span:nth-child(1) > a')
    .execute(function () {
      window.scrollBy(0, 1000);
      return true;
    })
    .pause(500)
      .click('#footer > span:nth-child(1) > a')
      .waitForElementVisible('#commentForm > fieldset > div:nth-child(7) > div')
      .assert.containsText('body', 'Not displayed but the md5 hash is used for Gravatar image')
    //     .saveScreenshot('./reports/search-result.png')
  },
  'Close browser': function (browser) {
    browser
      .end();
  }
};