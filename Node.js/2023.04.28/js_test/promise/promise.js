// resolve
function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = 'Hello Hello';
    resolve(hello);
  });
}

sayHello().then((resolveData) => {
  console.log(resolveData);
});

// reject
function sayHello() {
  return new Promise((resolve, reject) => {
    reject(new Error());
  });
}

sayHello()
  .then((resolveData) => {
    console.log(resolveData);
  })
  .catch((error) => {
    console.log(error);
  });
