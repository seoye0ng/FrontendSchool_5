import './Modal.css';

export default function Modal({ children, modalClose }) {
  return (
    <div className="modal-backdrop">
      <article className="modal">
        {children}
        <h2>홈페이지에 오신 것을 환영합니다!</h2>
        <p>좋은 하루!!</p>
        <button onClick={modalClose}>close</button>
      </article>
    </div>
  );
}
