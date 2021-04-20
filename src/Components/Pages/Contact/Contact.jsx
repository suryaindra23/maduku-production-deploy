import React from "react"

import "../../../Assets/dist/contact.scss"
import bukalapak from "../../../Assets/img/icons/bukalapak.png"
import shopee from "../../../Assets/img/icons/shopee.png"
import tokped from "../../../Assets/img/icons/tokped.png"

export default function Contact() {
  return (
    <div className="ContactContainer">
      <div className="title">
        <h1>
          <span>Pemesanan</span>
        </h1>
      </div>
      <p className="description">
        Dapatkan segera produk kami pada Online Shop berikut :
      </p>
      <div className="OnlineShop">
        <div className="Icon">
          <a
            href="https://tokopedia.com/sarangmadukusidoarjo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <img src={tokped} alt="Tokopedia" width="24" height="24" />
              Tokopedia Sidoarjo
            </p>
          </a>
        </div>
        <div className="Icon">
          <a
            href="https://shopee.co.id/sarang_maduku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <img src={shopee} alt="Shopee" width="24" height="24" />
              Shopee
            </p>
          </a>
        </div>
        <div className="Icon">
          <a
            href="https://www.bukalapak.com/u/captaindon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <img src={bukalapak} alt="Bukalapak" width="24" height="24" />
              Bukalapak
            </p>
          </a>
        </div>
        <div className="Icon">
          <a
            href="https://tokopedia.com/sarangmaduku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>
              <img src={tokped} alt="tokopedia" width="24" height="24" />
              Tokopedia Malang
            </p>
          </a>
        </div>
      </div>
    </div>

  )
}
