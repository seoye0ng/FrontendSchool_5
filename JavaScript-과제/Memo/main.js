let memos = JSON.parse(localStorage.getItem('memos'));
memos = memos ?? [];

const Editor = toastui.Editor;

const editor = new Editor({
  el: document.querySelector('#editor'),
  height: '500px',
  initialEditType: 'markdown',
  previewStyle: 'vertical',
});

// addMemo
function addMemo() {
  const title = document.querySelector('.memo-title').value;
  const content = editor.getHTML();

  memos.push({ title, content });
  localStorage.setItem('memos', JSON.stringify(memos));
  showMemo();
}

// showMemo
