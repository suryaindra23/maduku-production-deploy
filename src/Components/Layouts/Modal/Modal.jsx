import React from "react"

import "../../../Assets/dist/modal.scss"

export default function Modal(props) {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none"
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={props.handleClose}>X</button>
        {props.children}
      </section>
    </div>
  )
}
