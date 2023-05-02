class VendingMachineEvents {
  constructor() {
    const vMachine = document.querySelector('.section1');
    this.balance = vMachine.querySelector('.bg-box p');
    this.itemList = vMachine.querySelector('.cola-list');
    this.inputCostEl = vMachine.querySelector('#input-money');
    this.btnPut = vMachine.querySelector('#input-money+.btn');
    this.btnReturn = vMachine.querySelector('.bg-box+.btn');
    this.btnGet = vMachine.querySelector('.btn-get');
    this.stagedList = vMachine.querySelector('.get-list');

    const myinfo = document.querySelector('.section2');
    this.myMoney = myinfo.querySelector('.bg-box strong');

    const getInfo = document.querySelector('.section3');
    this.getList = getInfo.querySelector('.get-list');
    this.txtTotal = getInfo.querySelector('.total-price');
  }

  // 장바구니 콜라 생성 함수
  stagedItemGenerator(target) {
    const stagedItem = document.createElement('li');
    stagedItem.dataset.item = target.dataset.item;
    stagedItem.dataset.price = target.dataset.price;
    stagedItem.innerHTML = `
        <img src="img/${target.dataset.img}" alt="" />
        ${target.dataset.item}
        <strong>1
            <span class="a11y-hidden">개</span>
        </strong>
    `;

    this.stagedList.append(stagedItem);
  }

  bindEvent() {
    /**
     * 1. 입금 버튼 기능
     * 입금 버튼을 누르면
     *  1) 소지금 === 소지금 - 입금액
     *  2) 잔액 === 기존 잔액 + 입금액
     *  3) 입금액이 소지금보다 많으면 경고창 출력
     *  4) 입금액이 정상적으로 입금되면 입금창은 초기화
     */
    this.btnPut.addEventListener('click', () => {
      // 입력값
      const inputCost = parseInt(this.inputCostEl.value);
      // 소지금 : parseInt(25,000원) => 쉼표 앞까지만 숫자로 변환 / Number를 사용하면 NaN이 출력
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));

      if (inputCost) {
        if (inputCost > 0 && inputCost <= myMoneyVal) {
          // 입금액이 소지금보다 적거나 같다면
          // 쉼표 처리해주기 위해서 international객체를 사용
          this.myMoney.textContent = new Intl.NumberFormat().format(myMoneyVal - inputCost) + '원';

          this.balance.textContent = new Intl.NumberFormat().format((balanceVal ? balanceVal : 0) + inputCost) + '원';
        } else {
          // 입금액이 소지금보다 많다면
          alert('소지금이 부족합니다!');
        }
        // 입금액 초기화
        this.inputCostEl.value = null;
      }
    });

    /**
     * 2. 거스름돈 반환 버튼
     *  1) 반환버튼을 누르면 소지금 === 잔액 + 소지금
     *  2) 반환버튼을 누르면 잔액창이 초기화
     */
    this.btnReturn.addEventListener('click', () => {
      // 잔액
      const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
      // 소지금
      const myMoneyVal = parseInt(this.myMoney.textContent.replaceAll(',', ''));

      if (balanceVal) {
        this.myMoney.textContent = new Intl.NumberFormat().format(balanceVal + myMoneyVal) + '원';
        this.balance.textContent = null;
      }
    });

    /**
     * 3. 자판기 장바구니 채우기
     *  1) 아이템을 누르면 잔액 === 잔액 - 아이템 가격
     *  2) 아이템 가격이 잔액보다 크다면 경고 메세지 출력
     *  3) 아이템이 장바구니에 들어감
     *  4) 아이템의 count가 -1, 아이템의 카운트가 0이 되면 품절 표시
     */
    this.btnsCola = document.querySelectorAll('.section1 .btn-cola');

    this.btnsCola.forEach((item) => {
      item.addEventListener('click', (event) => {
        const balanceVal = parseInt(this.balance.textContent.replaceAll(',', ''));
        const targetEl = event.currentTarget;
        const targetElPrice = parseInt(event.currentTarget.dataset.price);
        const stagedListitem = this.stagedList.querySelectorAll('li');
        let isStaged = false; // 이미 선택되었는가?

        if (balanceVal >= targetElPrice) {
          this.balance.textContent = new Intl.NumberFormat().format(balanceVal - targetElPrice) + '원';

          for (const item of stagedListitem) {
            // 클릭한 콜라의 이름과 장바구니에 있던 콜라의 이름이 같은지 비교
            if (targetEl.dataset.item === item.dataset.item) {
              // 이미 장바구니에 콜라가 있다면 카운트 +1
              item.querySelector('strong').firstChild.textContent =
                parseInt(item.querySelector('strong').firstChild.textContent) + 1;

              isStaged = true;
              break;
            }
          }

          // 처음 선택했을 경우에만 장바구니에 콜라를 생성
          if (!isStaged) {
            // 장바구니 콜라 생성
            this.stagedItemGenerator(event.currentTarget);
          }

          // 자판기 콜라 개수 차감 (묵시적 형변환))
          targetEl.dataset.count--;

          if (parseInt(targetEl.dataset.count) === '0') {
            targetEl.insertAdjacentHTML(
              'beforeEnd',
              `<strong class="soldout">
                <span>품절</span>
              </strong>`
            );

            targetEl.disabled = 'disabled';
          }
        } else {
          alert('입금한 금액이 부족합니다!');
        }
      });
    });

    /**
     * 4. 획득 버튼 기능
     * 1) 장바구니에 있는 음료수 목록이 획득한 음료 목록으로 이동
     * 2) 획득한 음료의 모든 금액을 합하여 총 금액을 업데이트
     */

    this.btnGet.addEventListener('click', () => {
      const itemStagedList = this.stagedList.querySelectorAll('li');
      const itemGetList = this.getList.querySelectorAll('li');
      let totalPrice = 0;

      for (const itemStaged of itemStagedList) {
        let isGet = false; // 이미 획득했는가?

        for (const itemGet of itemGetList) {
          // 장바구니의 콜라가 이미 획득한 몰록에 있다면
          if (itemStaged.dataset.item === itemGet.dataset.item) {
            itemGet.querySelector('strong').firstChild.textContent =
              parseInt(itemGet.querySelector('strong').firstChild.textContent) +
              parseInt(itemStaged.querySelector('strong').firstChild.textContent);

            isGet = true;
            break;
          }
        }

        if (!isGet) {
          this.getList.append(itemStaged);
        }
      }
      // 장바구니 목록 초기화
      this.stagedList.innerHTML = null;

      // 획득한 음료 리스트를 순회하면서 총금액 계산
      this.getList.querySelectorAll('li').forEach((item) => {
        totalPrice += parseInt(item.dataset.price) * parseInt(item.querySelector('strong').firstChild.textContent);
      });
      this.txtTotal.textContent = `총금액 : ${new Intl.NumberFormat().format(totalPrice)} 원`;
    });
  }
}

export default VendingMachineEvents;
