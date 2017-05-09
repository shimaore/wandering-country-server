// Generated by CoffeeScript 1.12.5
(function() {
  var PouchDB, debug, get_client_db, seem;

  seem = require('seem');

  debug = (require('debug'))('wandering-country-server:db');

  PouchDB = require('pouchdb');

  module.exports = get_client_db = seem(function(ev) {
    var db, user_db;
    db = this.cfg.prov;
    user_db = (function(_this) {
      return function(name) {
        return new PouchDB(_this.cfg.userdb_base_uri + '/' + name);
      };
    })(this);
    return {
      db: db,
      user_db: user_db
    };
  });

}).call(this);
