import React from "react"
import RenderSmoothImage from "../../Commons/ReactSmoothImage"
import Banner from "../../Assets/img/Home.jpg"

export default function Home() {
  const style = {
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: 1,
  }

  const toProduct = (yOffset) => {
    const y =
      document.querySelector(".product-app").getBoundingClientRect().top +
      window.pageYOffset +
      yOffset

    window.scrollTo({ top: y, behavior: "smooth" })
  }

  return (
    <div className="home-app">
      <div className="content">
        <div className="row">
          <div className="col-lg-5 col-sm-12">
            <h1>
              Sarang&nbsp;
              <br />
              Maduku
            </h1>
            <h3>"Authentic Honey 100%"</h3>
            <p>
              &emsp;Sarang maduku adalah salah satu produsen Madu Murni, Sarang
              Madu, Bee Polen terbaik di Jawa Timur. Sarang Maduku berdiri sejak
              Januari 2020 berlokasi di Malang, Jawa Timur.
            </p>
            <button onClick={() => toProduct(-100)}>Lihat produk</button>
          </div>
          <div className="col-lg-7 col-sm-12">
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/yeSqYxon3cc"
              frameborder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              title="Maduku"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <RenderSmoothImage src={Banner} style={style} />
    </div>
  )
}
