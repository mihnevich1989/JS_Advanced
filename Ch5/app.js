'use strict';

const user = {
  name: 'Vasia',
  birthday: '03/02/2024'
};

function birthdayCheck({ birthday }) {
  const birthdayDate = new Date(birthday);
  const now = new Date();
  if (birthdayDate.getMonth() === now.getMonth() && birthdayDate.getDay() === now.getDay()) {
    return true;
  }
  return false;
}
console.log(birthdayCheck(user));
