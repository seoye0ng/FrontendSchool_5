// 객체는 key-value 쌍으로 이루어져 있다
const babaYaga = {
  name: 'John Wick',
  age: 53,
  from: '벨라루스',
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  },
  0: '123456',
};

console.log(babaYaga.name);
console.log(babaYaga.age);
console.log(babaYaga['name']);
console.log(babaYaga['age']);

// babaYaga.0 error // 그래서 arr.1이 안되는 것
babaYaga['0']; // 123456
babaYaga[0]; // 123456

// 유사배열객체는 실무에서도 사용하지 않기 때문에 잊으셔도 됩니다. ---
const arr = {
  0: 10,
  1: 20,
  2: 30,
  length: 3,
};

arr[0]; // 10
arr[1]; // 20
arr[2]; // 30
arr.length; // 3
// 배열이 아닙니다. 유사배열객체라고 합니다.
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠릅니다.

const human = {
  name: 'bsy',
  age: 26,
  from: 'korea',
  asking: function () {
    console.log('hello world!');
  },
  job: 'developer',
  0: '01020579265',
};

human.name = 'syb';
console.log(human.name); // 'syb'
console.log(human.asking()); // hello world!
delete human.job;

// 다른 언어와 동작방식이 다르다. in연산자가 키를 순회해서
console.log('age' in human); // true
console.log(20 in [10, 20, 30, 40]); // false

const aespa = {
  members: ['카리나', '윈터', '지젤', '닝닝'],
  from: '광야',
  sing: function () {
    return '적대적인 고난과 슬픔은 널 더 popping 진화시켜!';
  },
};
// 별표 **
console.log(aespa.hasOwnProperty('sing')); // true
console.log(aespa.hasOwnProperty('itzy')); // false

// 별표 ***
// 다른언어는 aespa.keys()와 같은 방식으로 사용 // js에서는 불편한 코드
console.log(Object.keys(aespa)); // ['members', 'from', 'sing']
console.log(Object.values(aespa)); // [Array(4), '광야', ƒ]
