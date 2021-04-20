import React from "react"

import HoneyCard from "../../Layouts/HoneyCard/HoneyCard"
import multiflora from "../../../Assets/img/purehoney/Multiflora.jpg"
import durian from "../../../Assets/img/purehoney/Durian.jpg"
import randu from "../../../Assets/img/purehoney/Randu.jpg"
import kelengkeng from "../../../Assets/img/purehoney/Kelengkeng.jpg"
import kopi from "../../../Assets/img/purehoney/Kopi.jpg"
import kaliandra from "../../../Assets/img/purehoney/Kaliandra.jpg"
import rambutan from "../../../Assets/img/purehoney/Rambutan.jpg"
import mangga from "../../../Assets/img/purehoney/Mangga.jpg"

//325 mL variant
import multiflora2 from "../../../Assets/img/purehoney/varian2/Multiflora.jpg"
import durian2 from "../../../Assets/img/purehoney/varian2/Durian.jpg"
import randu2 from "../../../Assets/img/purehoney/varian2/Randu.jpg"
import kelengkeng2 from "../../../Assets/img/purehoney/varian2/Kelengkeng.jpg"
import kopi2 from "../../../Assets/img/purehoney/varian2/Kopi.jpg"
import kaliandra2 from "../../../Assets/img/purehoney/varian2/Kaliandra.jpg"
import rambutan2 from "../../../Assets/img/purehoney/varian2/Rambutan.jpg"

//500 mL variant
import multiflora3 from "../../../Assets/img/purehoney/varian3/Multiflora.jpg"
import durian3 from "../../../Assets/img/purehoney/varian3/Durian.jpg"
import randu3 from "../../../Assets/img/purehoney/varian3/Randu.jpg"
import kelengkeng3 from "../../../Assets/img/purehoney/varian3/Kelengkeng.jpg"
import kopi3 from "../../../Assets/img/purehoney/varian3/Kopi.jpg"
import kaliandra3 from "../../../Assets/img/purehoney/varian3/Kaliandra.jpg"
import rambutan3 from "../../../Assets/img/purehoney/varian3/Rambutan.jpg"

//1000 mL variant
import multiflora4 from "../../../Assets/img/purehoney/varian4/Multiflora.jpg"
import durian4 from "../../../Assets/img/purehoney/varian4/Durian.jpg"
import randu4 from "../../../Assets/img/purehoney/varian4/Randu.jpg"
import kelengkeng4 from "../../../Assets/img/purehoney/varian4/Kelengkeng.jpg"
import kopi4 from "../../../Assets/img/purehoney/varian4/Kopi.jpg"
import kaliandra4 from "../../../Assets/img/purehoney/varian4/Kaliandra.jpg"
import rambutan4 from "../../../Assets/img/purehoney/varian4/Rambutan.jpg"

import "../../../Assets/dist/purehoney.scss"

export default function PureHoney() {
  const products = [
    {
      title: "Multifora",
      desc: "Madu dari berbagai jenis nectar bunga",
      taste: "Manis aja",
      color: "Kuning emas",
      pricelists: {
        price125ml: "Rp. 22.000",
        price325ml: "Rp. 50.000",
        price500ml: "Rp. 70.000",
        price1000ml: "Rp. 95.000",
      },
      img: multiflora,
      img2: multiflora2,
      img3: multiflora3,
      img4: multiflora4,
    },
    {
      title: "Durian",
      desc: "Madu dari nectar bunga durian",
      taste: "Manis legit",
      color: "Coklat tua",
      pricelists: {
        price125ml: "Rp. 25.000",
        price325ml: "Rp. 52.000",
        price500ml: "Rp. 82.000",
        price1000ml: "Rp. 110.000",
      },
      img: durian,
      img2: durian2,
      img3: durian3,
      img4: durian4,
    },
    {
      title: "Randu",
      desc: "Madu dari nectar kapuk randu",
      taste: "Manis asam",
      color: "Coklat bening",
      pricelists: {
        price125ml: "Rp. 24.000",
        price325ml: "Rp. 55.000",
        price500ml: "Rp. 77.000",
        price1000ml: "Rp. 105.000",
      },
      img: randu,
      img2: randu2,
      img3: randu3,
      img4: randu4,
    },
    {
      title: "Kelengkeng",
      desc: "Madu dari nectar bunga kelengkeng",
      taste: "Manis wangi",
      color: "Coklat kuning",
      pricelists: {
        price125ml: "Rp. 28.000",
        price325ml: "Rp. 62.000",
        price500ml: "Rp. 85.000",
        price1000ml: "Rp. 120.000",
      },
      img: kelengkeng,
      img2: kelengkeng2,
      img3: kelengkeng3,
      img4: kelengkeng4,
    },
    {
      title: "Kopi",
      desc: "Madu dari nectar bunga kopi",
      taste: "Manis segar",
      color: "Coklat",
      pricelists: {
        price125ml: "Rp. 26.000",
        price325ml: "Rp. 52.000",
        price500ml: "Rp. 85.000",
        price1000ml: "Rp. 115.000",
      },
      img: kopi,
      img2: kopi2,
      img3: kopi3,
      img4: kopi4,
    },
    {
      title: "Kaliandra",
      desc: "Madu dari nectar bunga kaliandra",
      taste: "Manis disukai anak",
      color: "Kuning telor",
      pricelists: {
        price125ml: "Rp. 30.000",
        price325ml: "Rp. 65.000",
        price500ml: "Rp. 90.000",
        price1000ml: "Rp. 120.000",
      },
      img: kaliandra,
      img2: kaliandra2,
      img3: kaliandra3,
      img4: kaliandra4,
    },
    {
      title: "Rambutan",
      desc: "Madu dari nectar bunga rambutan",
      taste: "Manis bikin nagih",
      color: "Coklat bening",
      pricelists: {
        price125ml: "Rp. 28.000",
        price325ml: "Rp. 55.000",
        price500ml: "Rp. 85.000",
        price1000ml: "Rp. 115.000",
      },
      img: rambutan,
      img2: rambutan2,
      img3: rambutan3,
      img4: rambutan4,
    },
    {
      title: "Mangga",
      desc: "Madu dari nectar bunga mangga",
      taste: "Manis dan asam",
      color: "Coklat kuning",
      pricelists: {
        price125ml: "Rp. 30.000",
        price325ml: "Rp. 65.000",
        price500ml: "Rp. 90.000",
        price1000ml: "Rp. 124.000",
      },
      img: mangga,
      img2: mangga,
      img3: mangga,
      img4: mangga,
    },
  ]

  return (
    <div className="VariantContainer">
      <div className="title">
        <h1>
          <span>8 Varian (Pure Honey)</span>
        </h1>
      </div>
      <div className="PHoneyContainer">
        <div className="row">
          {products.map((p, i) => {
            return (
              <HoneyCard
                key={i}
                src={p.img}
                src2={p.img2}
                src3={p.img3}
                src4={p.img4}
                desc={p.desc}
                title={p.title}
                taste={p.taste}
                color={p.color}
                priceLists={p.pricelists}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
