'use strict';

const User = {
  init(login, pass) {
    this.login = login;
    this.password = pass;
  },
  log() {
    console.log('Log');
  }
};

const user = Object.create(User);
user.init('log', '123');
console.log(user);
const admin = Object.create(user);
admin.init('adm', '3333')
admin.isAdmin = true;
console.log(admin);
