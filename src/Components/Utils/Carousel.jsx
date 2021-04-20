import React, { Fragment, useState } from "react"
import RenderImage from "../../Commons/ReactSmoothImage"

export default function Carousel({ contents }) {
  const [active, setActive] = useState(0)
  const stars = [
    <i className="fas fa-star"></i>,
    <i className="fas fa-star"></i>,
    <i className="fas fa-star"></i>,
    <i className="fas fa-star"></i>,
    <i className="fas fa-star"></i>,
  ]
  const style = {
    borderRadius: "50%",
    height: "150px",
    margin: "0 auto",
    overflow: "hidden",
    width: "150px",
  }

  return (
    <div className="carousel-app container">
      <i
        className={`fas fa-chevron-left arrow ${
          active === 0 ? "display-none" : ""
        }`}
        onClick={() => setActive(active - 1)}
      ></i>
      <div className="content">
        {contents.map((item, i) => (
          <Fragment key={i}>
            <div className={`img-box ${active === i ? "active" : ""}`} key={i}>
              <RenderImage src={item.src} style={style} />
              <h1>{item.name}</h1>
              <div className="stars">
                {stars.map((item, i) => (
                  <Fragment key={i}>{item}</Fragment>
                ))}
              </div>
              <p
                className={`via-marketplace ${item.marketplace.toLowerCase()}`}
              >
                Via {item.marketplace}
              </p>
              <p>
                <em>"{item.caption}"</em>
              </p>
            </div>
          </Fragment>
        ))}
      </div>
      <i
        className={`fas fa-chevron-right arrow ${
          active === contents.length - 1 ? "display-none" : ""
        }`}
        onClick={() => setActive(active + 1)}
      ></i>
    </div>
  )
}
