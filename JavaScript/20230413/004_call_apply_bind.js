// apply, call, bind

// call - 안에 사용할 this의 값을 바꿔주고 싶을 때
var peter = {
  name: 'Peter Parker',
  sayName: function () {
    console.log(this.name);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName(); // Peter Parker
peter.sayName.call(bruce); // Bruce Wayne

//
var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사) {
    console.log(this.name + 감탄사);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce, '!'); // Bruce Wayne!
peter.sayName('!'); // Peter Parker!
peter.sayName(); // Peter Parkerundefined

//////

// apply
var peter = {
  name: 'Peter Parker',
  sayName: function (is, is2) {
    console.log(this.name + ' is ' + is + ' or ' + is2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};

peter.sayName.apply(bruce, ['batman', 'richman']); // Bruce Wayne is batman or richman

// call과 apply 비교
// 비교1
var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce, '!', '!!');

// 비교2
var peter = {
  name: 'Peter Parker',
  sayName: function (감탄사1, 감탄사2) {
    console.log(this.name + 감탄사1 + 감탄사2);
  },
};

var bruce = {
  name: 'Bruce Wayne',
};
peter.sayName.call(bruce, ['!', '!!']);

//////

// bind
function sayName() {
  console.log(this.name);
}

var bruce = {
  name: 'bruce',
  sayName: sayName,
};

var peter = {
  name: 'peter',
  sayName: sayName.bind(bruce),
};

peter.sayName(); // bruce
bruce.sayName(); // bruce
