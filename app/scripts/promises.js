import getJSON from "read";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
};

BulkLoader.prototype.load = function(callback){
  var self = this;

  return new RSVP.Promise(function(resolve, reject) {
    var hashOfPromises = {
      users: getJSON('/users'),
      contacts: getJSON('/contacts'),
      companies: getJSON('/companies')
    };

    getJSON('/login').then(function(token) {

      RSVP.hash(hashOfPromises).then(function(hash) {
        self.users = hash.users;
        self.companies = hash.companies;
        self.contacts = hash.contacts;

        return resolve(self);
      });
    });
  });
};

export default BulkLoader;
