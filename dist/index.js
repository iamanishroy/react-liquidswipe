
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-liquidswipe.cjs.production.min.js')
} else {
  module.exports = require('./react-liquidswipe.cjs.development.js')
}
