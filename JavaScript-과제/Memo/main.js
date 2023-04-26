let memos = JSON.parse(localStorage.getItem('memos'));
memos = memos ?? [];

const Editor = toastui.Editor;

const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '300px',
  initialEditType: 'markdown',
  previewStyle: 'vertical',
  placeholder: '메모를 입력해 주세요.',
});

// 메모 추가하기
function addMemo() {
  const title = document.querySelector('.memo-title').value;
  const content = editor.getHTML();

  memos.push({ title, content });
  localStorage.setItem('memos', JSON.stringify(memos));

  showMemo();

  // 인풋값 초기화 해주기
  document.querySelector('.memo-title').value = '';
  editor.setHTML() = '';
}
