exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://app.stage.flowhealthlabs.com',
      show: false,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'FH_test'
}