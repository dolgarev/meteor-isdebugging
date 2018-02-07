/* global __meteor_runtime_config__ */

import { Meteor } from 'meteor/meteor'

if (!Meteor._isDebugging) {
  if (Meteor.isServer) {
    Meteor.startup(() => {
      const meteorAppMode = (
        process.env.METEOR_APP_MODE || Meteor.settings.METEOR_APP_MODE || ''
      ).split(',')
      const isDebugging = meteorAppMode.indexOf('debugging') !== -1
      __meteor_runtime_config__._isDebugging = isDebugging || Meteor.isDevelopment
      Meteor._isDebugging = __meteor_runtime_config__._isDebugging
    })
  }

  if (Meteor.isClient) {
    Meteor._isDebugging = __meteor_runtime_config__._isDebugging
  }
}
