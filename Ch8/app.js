'use strict';

class User {
  #login;
  #_password;
  constructor(login, pass) {
    this.#login = login;
    this.#password = pass;
  }

  set #password(pass) {
    this.#_password = pass.split("").reverse().join("");
  }
  get login() { return this.#login; }

  get #password() {
    return this.#_password.split("").reverse().join("");
  }

  checkPassword(pass) {
    return this.#password === pass;
  }

  changePassword(oldPass, newPass) {
    if (!this.checkPassword(oldPass)) {
      return false;
    }
    this.#password = newPass;
    return true;
  }
}

const user = new User('mih', '123');
console.log(user.changePassword('123', '222'));
console.log(user.login);
