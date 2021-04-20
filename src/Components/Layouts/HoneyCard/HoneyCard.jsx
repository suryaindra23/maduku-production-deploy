import React, { useEffect, useState } from "react"

import RenderImage from "../../../Commons/ReactSmoothImage"
import "../../../Assets/dist/honeycard.scss"

export default function HoneyCard({
  src,
  src2,
  src3,
  src4,
  title,
  desc,
  taste,
  color,
  priceLists,
}) {
  const [imgSrc, setSrc] = useState(src)
  const [active, setActive] = useState(1)
  const [price, setPrice] = useState("")
  const borderRadius =
    window.innerWidth < 768 ? "20px 20px 0 0" : "20px 0 0 20px"
  const height = window.innerWidth < 768 ? "250px" : "450px"
  const width = window.innerWidth < 768 ? "100%" : "400px"
  const style = {
    borderRadius,
    height,
    overflow: "hidden",
    width,
  }

  useEffect(() => {
    switch (active) {
      case 1:
        setPrice(priceLists.price125ml)
        break

      case 2:
        setPrice(priceLists.price325ml)
        break
      case 3:
        setPrice(priceLists.price500ml)
        break
      case 4:
        setPrice(priceLists.price1000ml)
        break
      default:
        break
    }
  }, [active])

  const onClick = (number, source) => {
    setActive(number)
    setSrc(source)
  }

  return (
    <div className="col-lg-6 col-md-12">
      <div className="HoneyCard">
        <div className="HoneyCardImg">
          <RenderImage src={imgSrc} style={style} />
        </div>
        <div className="HoneyCardContent">
          <h3>{title}</h3>
          <p>{desc}</p>
          <p>Rasa &emsp;: {taste}</p>
          <p>Warna : {color}</p>
          <p>
            Harga &nbsp;: <strong className="price">{price}</strong>
          </p>
          <h3>VARIAN UKURAN</h3>
          <div className="row">
            <div className="col-6">
              <button
                className={active === 1 ? "active" : ""}
                onClick={() => onClick(1, src)}
              >
                125 mL
              </button>
            </div>
            <div className="col-6">
              <button
                className={active === 2 ? "active" : ""}
                onClick={() => onClick(2, src2)}
              >
                325 mL
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button
                className={active === 3 ? "active" : ""}
                onClick={() => onClick(3, src3)}
              >
                500 mL
              </button>
            </div>
            <div className="col-6">
              <button
                className={active === 4 ? "active" : ""}
                onClick={() => onClick(4, src4)}
              >
                1000 mL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
