import React, { Fragment } from "react"
import Card from "../Utils/Card"
import ProductOne from "../../Assets/img/Produk 1.jpg"
import ProductTwo from "../../Assets/img/Produk 2.jpg"
import ProductThree from "../../Assets/img/Produk 3.jpg"

export default function Product() {
  const cardContent = [
    {
      src: ProductOne,
      title: "Pure Honey",
      caption:
        "\xa0\xa0Pure Honey by Sarang Maduku adalah madu murni fresh (raw honey) yang bersumber dari nektar bunga yang berbeda di mana lebah digembalakan di sekitar perkebunan randu, Kelengkeng, rambutan, durian, kopi, mangga, kaliandra & multiflora. Aroma wangi akan terasa saat dicium dan dirasakan saat ditelan. Terdapat gas dan busa pada madu menandakan aktifnya enzim diastase di dalam madu. Enzim inilah yang tidak dapat dipalsukan.",
      class: "prod-one",
    },
    {
      src: ProductTwo,
      title: "Bee Pollen",
      caption:
        "\xa0\xa0Bee Pollen adalah serbuk sari dari lebah yang mengandung karbohidrat, protein, asam lemak, antioksidan, serta vitamin dan mineral. Bee pollen terbentuk dari campuran serbuk sari, nektar, madu, dan cairan tubuh lebah.",
      class: "prod-two",
    },
    {
      src: ProductThree,
      title: "Sarang Madu",
      caption:
        "\xa0\xa0Sarang madu adalah tempat menyimpan madu yang dikumpulkan lebah, terdiri atas lilin lebah yang berbentuk seperti penampang sel segi enam dan mengandung madu murni, bee pollen, propolis, vitamin, dan zat baik di dalam atau sekitarnya.",
      class: "prod-three",
    },
  ]

  return (
    <div className="product-app">
      <div className="particle jar-one"></div>
      <div className="particle jar-two"></div>
      <div className="particle jar-three"></div>
      <div className="title">
        <h1>
          <span>Produk Utama</span>
        </h1>
      </div>
      <div className="container">
        {cardContent.map((item, i) => (
          <Fragment key={i}>
            <Card
              src={item.src}
              title={item.title}
              caption={item.caption}
              classname={item.class}
            />
          </Fragment>
        ))}
      </div>
    </div>
  )
}
