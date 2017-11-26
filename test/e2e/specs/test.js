// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;
    const ulrapi = '/#/test-example';
    browser
      .url(devServer + ulrapi)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('h1')
      .assert.containsText('h1', 'Ejemplo para la pruebas unitarias con VUEX')
      .assert.containsText('p', 'para test de interfaz o renderizado')
      .assert.elementCount('div', 58)
      .end();
  },
};
