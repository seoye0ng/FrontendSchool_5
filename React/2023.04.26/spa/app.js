const container = document.querySelector('#root');

// 환경변수 - 보통 파일을 따로 만들어서 환경변수들을 저장하고 불러와서 사용
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTENT_URL = 'https://api.hnpwa.com/v0/item/$id.json';

// 현재 사용자가 보고있는 페이지의 정보와 화면에 보여질 아이템의 갯수를 저장하는 객체
const store = {
  currentPage: 1,
  datasPerPage: 20,
};

// api 데이터를 받아오는 함수
async function getData(url) {
  try {
    const response = await fetch(url); // fetch는 비동기통신이기 때문에 await을 써서 기다려달라고 해야함. await는 async안에서만 사용할 수 있음
    if (!response.ok) {
      throw new Error('네트워크에 문제가 있습니다.');
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

async function newsFeed() {
  const newsFeed = await getData(NEWSLIST_URL); // getData앞에 async를 붙여줬으니까 비동기함수가 됨. 그래서 getData가 완료되기를 기다려야 하기 때문에 await를 붙여줌
  const totalPages = Math.ceil(newsFeed.length / store.datasPerPage);
  const newsList = [];

  newsList.push('<ul>');

  for (let i = (store.currentPage - 1) * store.datasPerPage; i < store.currentPage * store.datasPerPage; i++) {
    newsList.push(`
        <li>
            <a href='#/detail/${newsFeed[i].id}'>${newsFeed[i].title}${newsFeed[i].comments_count}</a>
        </li>
    `);
  }

  newsList.push('</ul>');

  let pageList = ``;
  for (let i = 0; i < totalPages; i++) {
    pageList += `<li><a herf='#/page/${i + 1}'>${i + 1}</a></li>`;
  }

  newsList.push(`
    <nav>
        <ul>
            ${pageList}
        </ul>
    </nav>
  `);

  container.innerHTML = newsList.join('');
}

// 뉴스 디테일 페이지 구성 함수
async function newsDetail() {
  const id = location.hash.substring(9); // hash(#)으로부터 9번째 이후부터의 문자열 반환
  const newsContent = await getData(CONTENT_URL).replace('$id', id); // getData는 비동기 함수이므로 await를 써줘야 undefined가 뜨지 않음

  container.innerHTML = `
    <h1>${newsContent.title}</h1>
    <div><a hreg='#/page/${store.currentPage}'>목록으로 돌아가기</a></div>
  `;
}

// 라우터 : 화면을 중계하는 함수
function router() {
  const routePath = location.hash;

  if (routePath === '') {
    newsFeed();
  } else if (routePath.includes('#/page/')) {
    store.currentPage = parseInt(routePath.substring(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener('hashchange', router);

router();
