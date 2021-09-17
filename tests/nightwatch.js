module.exports = {
  'Demo test ecosia.org' : function(browser) {
    browser
      .url('https://61444e7e362d570007247463--adamkoch.netlify.app/')
      .waitForElementVisible('body')
      .assert.titleContains('Koch')
      .assert.visible('#main > div > div > div > div > div:nth-child(1) > div > div.card-footer > small')
      .assert.visible('#main > div > div > div > div > div:nth-child(1) > div > div.icon-container')
      .click('#main > div > div > div > div > div:nth-child(1) > div > div.icon-container')
      .waitForElementVisible('body')
      .assert.containsText('body', 'My Technology Stack')
      .assert.not.containsText('body', 'Using getters in equals() method')
      .click('#posts-app > div > div:nth-child(2) > div:nth-child(8) > div > div > div > div > div:nth-child(4) > a:nth-child(1)')
      .waitForElementVisible('body')
      .end();
  }
};