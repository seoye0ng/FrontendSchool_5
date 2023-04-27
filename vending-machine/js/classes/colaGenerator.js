class ColaGenerator {
  constructor() {
    this.itemList = document.querySelector('.section1 .cola-list');
  }

  // 시동함수
  async setup() {
    const response = await this.loadData();
    this.colaFactory(response);
  }

  async loadData() {
    // 서버와 통신을 하는 경우 try catch문을 사용해 에러처리를 해주는게 좋음
    try {
      const response = await fetch('./items.json');

      if (response.ok) {
        // 서버의 응답 코드가 200 ~ 299일 경우
        return response.json(); // 객체형태로 변환해서 밖으로 반환
      } else {
        throw new Error(response.status); // throw로 에러를 던지면 가장 가까운 catch가 에러를 받음
      }
    } catch (error) {}
  }

  colaFactory(data) {
    const docFrag = document.createDocumentFragment();
    data.forEach((el) => {
      const item = document.createElement('li');
      const itemTemplate = `
      <button type="button" class="btn-cola" data-item="${el.name}" data-count="${el.count}" data-price="${el.cost}" data-img="${el.img}">
        <img class="cola-img" src="./img/${el.img}" alt="" />
        <span class="cola-name">${el.name}</span>
        <strong class="cola-price">${el.cost}</strong>
      </button>
      `;

      item.innerHTML = itemTemplate;
      docFrag.append(item);
    });
    this.itemList.append(docFrag);
  }
}

export default ColaGenerator;
