import React, { useState } from "react"
import RenderSmooth from "../../../Commons/ReactSmoothImage"

import Benefit from "./Benefit/Benefit"
import BeePollen from "../../Layouts/Modal/BeePollen/BeePollen"
import HoneyComb from "../../Layouts/Modal/HoneyComb/HoneyComb"
import PureHoney from "../../Layouts/Modal/PureHoney/PureHoney"

import "../../../Assets/dist/benefits.scss"
import purehoney from "../../../Assets/img/Produk 1.jpg"
import beepollen from "../../../Assets/img/BeePollen.jpg"
import sarangmadu from "../../../Assets/img/Produk 3.jpg"

export default function Benefits() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const padding = window.innerWidth < 768 ? "20px" : "0"
  const width = window.innerWidth < 768 ? "100%" : "400px"
  const style = {
    borderRadius: "20px",
    height: "240px",
    padding,
    width,
    overflow: "hidden",
  }

  return (
    <div className="BenefitContainer">
      <div className="title">
        <h1>
          <span>Manfaat</span>
        </h1>
      </div>
      <div className="Item">
        <PureHoney show={show} hideModal={() => setShow(false)} />
        <Benefit
          clicked={() => setShow(true)}
          title="Pure Honey"
          description="Manfaat &amp; Khasiat Pure Honey by Sarang Maduku terdapat keunikan masing-masing..."
        />
        <RenderSmooth src={purehoney} style={style} />
      </div>
      <div className="Item">
        <BeePollen show={show2} hideModal={() => setShow2(false)} />
        <RenderSmooth src={beepollen} style={style} />
        <Benefit
          clicked={() => setShow2(true)}
          title="Bee Pollen"
          description="Kegunaan dari konsumsi Bee Pollen menjadi sangat penting bagi perawatan kesehatan, antara lain..."
        />
      </div>
      <div className="Item">
        <HoneyComb show={show3} hideModal={() => setShow3(false)} />
        <Benefit
          clicked={() => setShow3(true)}
          title="Sarang Madu"
          description="Manfaat &amp; Khasiat konsumsi sarang madu antara lain..."
        />
        <RenderSmooth src={sarangmadu} style={style} />
      </div>
    </div>
  )
}
