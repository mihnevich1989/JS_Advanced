'use strict';

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      resolve(pos.coords);
    }, function (err) {
      reject(console.warn(`ERROR(${err.code}): ${err.message}`));
    });
  });
}

async function getMyCity() {
  try {
    const coords = await getMyCoordinates();
    const resBigdatacloud = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=ru`);
    const body = await resBigdatacloud.json();
    console.log(body);
  } catch (error) {
    console.log(error);
  }

}

getMyCity();
