const VERSION = '__data("yylVersion")'
const config = {
  workflow: 'other',
  version: VERSION,
  localserver: {
    root: './',
    port: 5000
  },
  proxy: {
    port: 8887,
    localRemote: {
      'http://fet.yy.com/': 'http://127.0.0.1:5000/'
    },
    homePage: 'http://fet.yy.com/'
  }
}

module.exports = config