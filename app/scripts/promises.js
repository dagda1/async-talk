import getJSON from "read";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
};

BulkLoader.prototype.load = function(callback){
  var self = this;

  // try {
  //   var token = getJSON('/login');
  //   var users = getJSON('/users');
  //   var companies = getJSON('/companies');
  //   var contacts = getJSON('/contacts');

  //   return [users, companies, contacts];
  // } cacth (e) {
  //   //handler error
  // }
};

export default BulkLoader;
