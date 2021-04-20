import React, { useEffect, useState } from "react";

import RenderImage from "../../../Commons/ReactSmoothImage";
import "../../../Assets/dist/honeycard.scss";

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
  listdics,
}) {
  const [imgSrc, setSrc] = useState(src);
  const [active, setActive] = useState(1);
  const [active1, setActive1] = useState(1);
  const [price, setPrice] = useState("");
  const [pricedis, setPricedis] = useState("");
  const borderRadius =
    window.innerWidth < 768 ? "20px 20px 0 0" : "20px 0 0 20px";
  const height = window.innerWidth < 768 ? "250px" : "450px";
  const width = window.innerWidth < 768 ? "100%" : "400px";
  const style = {
    borderRadius,
    height,
    overflow: "hidden",
    width,
  };

  useEffect(() => {
    switch (active) {
      case 1:
        setPrice(priceLists.price125ml);
        break;

      case 2:
        setPrice(priceLists.price325ml);
        break;
      case 3:
        setPrice(priceLists.price500ml);
        break;
      case 4:
        setPrice(priceLists.price1000ml);
        break;
      default:
        break;
    }
  }, [active]);

  useEffect(() => {
    switch (active1) {
      case 1:
        setPricedis(listdics.pricedis125ml);
        break;
      case 2:
        setPricedis(listdics.pricedis325ml);
        break;
      case 3:
        setPricedis(listdics.pricedis500ml);
        break;
      case 4:
        setPricedis(listdics.pricedis1000ml);
        break;
      default:
        break;
    }
  }, [active1]);

  function onClick(number1, number, source) {
    setActive1(number1);
    setActive(number);
    setSrc(source);
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
          <p>Rasa &nbsp;&nbsp;: {taste}</p>
          <p>Warna : {color}</p>
          <p>
            Harga Normal &nbsp;: <br></br>
            <strong className="Pr">
              <s>{pricedis}</s>
            </strong>
          </p>
          <p>
            Harga Discount &nbsp;:&nbsp;
            <strong className="price">
              <h2>{price}</h2>
            </strong>
          </p>
          <h3>VARIAN UKURAN</h3>
          <div className="row">
            <div className="col-6">
              <button
                className={active1 === 1 || active === 1 ? "active" : ""}
                onClick={() => onClick(1, 1, src)}
              >
                125 mL
              </button>
            </div>
            <div className="col-6">
              <button
                className={active1 === 2 || active === 2 ? "active" : ""}
                onClick={() => onClick(2, 2, src2)}
              >
                325 mL
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <button
                className={active1 === 3 || active === 3 ? "active" : ""}
                onClick={() => onClick(3, 3, src3)}
              >
                500 mL
              </button>
            </div>
            <div className="col-6">
              <button
                className={active1 === 4 || active === 4 ? "active" : ""}
                onClick={() => onClick(4, 4, src4)}
              >
                1000 mL
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
