export default function Modal({ header, body, footer }) {
  return (
    <>
      <div className="Modal_header">{header ? header : "Header"}</div>
      <div className="modal_body">{body ? body : "This is Modal Body"}</div>
      <div className="Modal_footer">{footer ? footer : "Footer"}</div>
    </>
  );
}
