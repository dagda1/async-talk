import getJSON from "read";
import async from "generator-utils";

function BulkLoader(){
  this.users = [];
  this.companies = [];
  this.contacts = [];
};

BulkLoader.prototype.iterator = function * () {
  var a = yield 1;
  var b = yield 2;
  var c = yield 3;

  // this.users = yield [{name: 'bob', email: 'bob@hotmail.com'}];
  // this.contacts = yield [{name: 'brian', email: 'brian@hotmail.com'}];
  // this.companies = yield [{name: 'company', email: 'company@hotmail.com'}];

  // return this;
};

// BulkLoader.prototype.load = function() {
//   let self = this;
// 
//   return async(function * () {
//     try {
//       var token = yield getJSON('/login');
//       self.users = yield getJSON('/users');
//       self.contacts = yield getJSON('/contacts');
//       self.companies = yield getJSON('/companies');
// 
//       return self;
//     } catch (err) {
//       throw err;
//     }
//   });
// };
// 
export default BulkLoader;
