const cars = ['BMW', 'Volvo', 'Saab', 'Ford', 'Flat', 'Audi'];

let text = '';

`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>Volvo</h2>
</section>
...
`;

text += '<section><h2>' + cars[0] + '</h2></section>';
text += '<section><h2>' + cars[1] + '</h2></section>';
text += '<section><h2>' + cars[2] + '</h2></section>';
text += '<section><h2>' + cars[3] + '</h2></section>';
text += '<section><h2>' + cars[4] + '</h2></section>';

console.log(text);
document.body.innerHTML = text;

///

// for반복문
const cars2 = ['BMW', 'Volvo', 'Saab', 'Ford', 'Flat', 'Audi'];
let text2 = '';
for (let i = 0; i < cars2.length; i++) {
  text2 += '<section><h2>' + cars2[i] + '</h2></section>';
}

console.log(text);
document.body.innerHTML = text;

///

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// let을 생략하면 안된다! i가 전역으로 생성된다.
for (i = 0; i < 10; i += 2) {
  console.log(i);
}

// 무한반복 코드, 이런 코드는 작성도 하지 말아야 한다.
// 의도한 무한반복은 매우 위험하다.
// 무한반복은 메모리를 많이 잡아먹기 때문에
for (;;) {
  console.log('실행하지 마세요');
}
