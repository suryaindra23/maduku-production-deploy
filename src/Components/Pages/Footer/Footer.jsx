import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import "../../../Assets/dist/footer.scss"
import logo from "../../../Assets/img/Logo.png"

export default function Footer() {
  return (
    <div className="Container">
      <div className="Footer">
        <div className="About">
          <img src={logo} alt="Sarang Madu Logo" width="72" height="auto" />
          <p>
            Sarang maduku adalah salah satu produsen murni sarang madu, Bee
            Polen terbaik di Jawa Timur.
          </p>
          <p>Sarang maduku berdiri sejak Januari 2020 di Malang, Jawa Timur</p>
          <br />
          <p>
            Perumahan Graha Swarna A-15 Jl. Ikan kakap, tunjungsekar, lowokwaru,
            Kota Malang - 65142
          </p>
        </div>
        <div className="Socmed">
          <h3>Media Sosial</h3>
          <div className="SocmedIcon">
            <a
              href="https://wa.me/6281334171989"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} size="4x" color="gray" />
            </a>
          </div>
          <div className="SocmedIcon">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} size="4x" color="gray" />
            </a>
          </div>
          <div className="SocmedIcon">
            <a
              href="https://www.instagram.com/sarangmadukuy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="4x" color="gray" />
            </a>
          </div>
        </div>
        <div className="Mainmenu">
          <h3>Menu Utama</h3>
          <p>Profil</p>
          <p>Produk</p>
          <p>Manfaat</p>
          <p>Galeri</p>
          <p>Testimoni</p>
        </div>
      </div>
      <div className="Copyright">
        <p>Copyright by Lets Dev, 2020</p>
        <div className="contribution" style={{ display: "none" }}>
          <a href="http://www.freepik.com">Designed by Freepik</a>
        </div>
      </div>
    </div>
  )
}
