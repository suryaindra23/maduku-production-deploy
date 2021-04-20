import React from "react"
import RenderSmoothImage from "../../Commons/ReactSmoothImage"

export default function Card({ src, title, caption, classname }) {
  const style = {
    height: "100%",
    minWidth: "100%",
  }

  return (
    <div className="card-app">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className={`img-box ${classname}`}>
            <RenderSmoothImage src={src} style={style} />
          </div>
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <div className="content">
            <h3>{title}</h3>
            <p>{caption}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
