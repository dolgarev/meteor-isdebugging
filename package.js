/* global Package */

Package.describe({
  name: 'liberation:meteor-isdebugging',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Adds Meteor._isDebugging flag',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/dolgarev/meteor-isdebugging',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

Package.onUse(function (api) {
  api.versionsFrom('1.5.2')
  api.use('ecmascript')
  api.mainModule('meteor-isdebugging.js')
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('liberation:meteor-isdebugging')
  api.mainModule('meteor-isdebugging-tests.js')
})
