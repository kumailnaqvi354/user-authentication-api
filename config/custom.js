/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  baseUrl: 'http://localhost:1337',

  emailProofTokenTTL: 24 * 60 * 60 * 1000, // 24 hours


  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // sendgridSecret: "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",
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  sendGridAPIkey:"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"

};
