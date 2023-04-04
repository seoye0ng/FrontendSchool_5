const avengers = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort());

// 숫자는 제대로 정렬이 되지 않는다
const nums1 = [3, 1, 8, 6];
console.log(nums1.sort()); // [1, 3, 6, 8]

const nums2 = [3, 1, 8, 6, 11];
console.log(nums2.sort()); // [1, 11, 3, 6, 8]
// 'sort를 어느 알고리즘으로 할꺼냐'는 브라우저의 자유

// 오름차순
console.log(nums2.sort((a, b) => a - b));
// 내림차순
console.log(nums2.sort((a, b) => b - a));

// 실무 사용 코드
// https://www.notion.so/native/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd?deepLinkOpenNewTab=true
function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0));
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0));
  }
}

// 딥하게 sort를 탐색해보겠다!?
const nums = [3, 1, 11, 8, 6];
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
  })
);

const numss = [3, 1, 11, 8, 6];
console.log(
  numss.sort((a, b) => {
    console.log(a, b);
    console.log(a - b);
  })
);
