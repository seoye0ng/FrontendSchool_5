// async function message() {
//   let hello = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('hello');
//     }, 100);
//   });

//   let world = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('world');
//     }, 100);
//   });

//   console.log(`${hello} ${world}`);
// }

// message();

// -- async를 promise로 바꾸기 --
function message() {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('hello');
    }, 100);
  }).then((result) => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(result + ' world');
      }, 100);
    }).then((message) => {
      console.log(message);
    });
  });
}

message();

// -- async를 promise.all로 바꾸기 --
function message() {
  Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello');
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('world');
      }, 100);
    }),
  ]).then(([hello, world]) => {
    console.log(`${hello} ${world}`);
  });
}

message();

// -- 위코드를 다시 async await로 바꿔보기 --
async function message() {
  const [hello, world] = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('hello');
      }, 100);
    }),
    new Promise((resolve) => {
      setTimeout(() => {
        resolve('world');
      }, 100);
    }),
  ]);

  console.log(`${hello} ${world}`);
}

message();
