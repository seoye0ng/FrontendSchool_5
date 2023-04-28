// resolve
function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = 'Hello Hello';
    resolve(hello);
  });
}

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();
