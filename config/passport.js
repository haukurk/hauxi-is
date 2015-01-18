/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  twitter: {
    name: 'Twitter',
    protocol: 'oauth',
    strategy: require('passport-twitter').Strategy,
    options: {
      consumerKey: '3iHpxytZyBLUW3yB0glAycyVZ',
      consumerSecret: 'ibgfnV08gBbpX9FGCYI7bS4F8NjlLYjhiPh9kU048LMQnEcD2j',
      callbackURL: "http://127.0.0.1:1337/auth/twitter/callback"
    }
  }
};
