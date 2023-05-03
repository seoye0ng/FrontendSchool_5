const article = document.querySelector('article');
const openBtn = document.querySelector('.btn-open');
const closeBtn = document.querySelector('.btn-close');
const dim = document.querySelector('.dim');

// 첫번째 포커스 요소
const firstEl = article.querySelector('a');

openBtn.addEventListener('click', () => {
  article.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  article.classList.remove('active');
});
dim.addEventListener('click', () => {
  article.classList.remove('active');
});

closeBtn.addEventListener('keydown', (e) => {
  // 내가 누르고 있는 키 정보를 알려줌
  // console.log(e.key);
  // tab만 눌렀을 때 (Shift+tab일땐 실행되지 않음)
  if (!e.shiftKey && e.key === 'Tab') {
    e.preventDefault();
    firstEl.focus();
  } else if (e.shiftKey && e.key === 'Tab') {
  }
});

firstEl.addEventListener('keydown', (e) => {
  // Shift+tab 같이 눌렀을 때 실행
  if (e.shiftKey && e.key === 'Tab') {
    e.preventDefault();
    closeBtn.focus();
  }
});
