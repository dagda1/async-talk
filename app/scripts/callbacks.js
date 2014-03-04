function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
};

BulkLoader.prototype.load = function(callback){
  var self = this;

  $.getJSON('/login').done(function(data) {
    $.getJSON('/users').done(function(data) {
      self.users = data;
      $.getJSON('/contacts').done(function(data) {
        self.contacts = data;
        $.getJSON('/contacts').done(function(data) {
          self.companies = data;
          callback(self);
        });
      });
    });
  });
};

export default BulkLoader;
