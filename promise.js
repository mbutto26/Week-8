let myPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 1000);
});

myPromise
  .then(function () {
    return 99;
  })
  .then(function (number) {
    console.log(number);
  });

const randomnNumberPromise = new Promise((res, rej) => {
  setTimeout(() => {
    const randomVal = Math.random();

    if (randomVal > 0.5) {
      res(randomVal);
    } else if (randomVal <= 0.5) {
      rej(randomVal);
    }
  }, 1000);
});
randomnNumberPromise
  .then((value) => {
    console.log(`Success!`, value);
  })
  .catch((err, value) => {
    console.log(`Fail`, value);
  })
  .finally(() => {
    console.log(`Complete`);
  });
