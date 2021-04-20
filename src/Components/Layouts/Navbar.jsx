import React, { useContext, useEffect, useState } from "react"
import { NavbarContext } from "../../Context"
import Logo from "../../Assets/img/Logo.png"
import "../../Assets/dist/navbar.scss"

export default function Navbar() {
  const { active, setActive, sideNav, setSideNav, distY } = useContext(
    NavbarContext
  )
  const [navScroll, setNavScroll] = useState(false)
  const scrollToElements = (element, navNumber) => {
    let dom, y
    setActive(navNumber)

    const scrollTo = (dom, yOffset) => {
      y = dom.getBoundingClientRect().top + window.pageYOffset + yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }

    switch (element) {
      case "profile":
        dom = document.querySelector(".home-app")
        scrollTo(dom, 0)
        break
      case "product":
        dom = document.querySelector(".product-app")
        scrollTo(dom, -100)
        break
      case "manfaat":
        dom = document.querySelector(".BenefitContainer")
        scrollTo(dom, -100)
        break
      case "galeri":
        dom = document.querySelector(".galeri-app")
        scrollTo(dom, -100)
        break
      case "testimoni":
        dom = document.querySelector(".testimoni-app")
        scrollTo(dom, -100)
        break
      default:
        dom = document.querySelector(".ContactContainer")
        scrollTo(dom, -100)
        break
    }
  }

  useEffect(() => {
    // set for the navbar to be seen or not
    if (distY > 100) {
      setNavScroll(true)
    } else {
      setNavScroll(false)
    }
  }, [distY])

  return (
    <nav
      className={`navbar-app ${navScroll ? "scrolled" : ""} ${
        sideNav ? "show" : ""
      }`}
    >
      <ul className="desktop">
        <li>
          <img src={Logo} alt="Logo.png" />
        </li>
        <li
          className={active === 1 ? "active" : ""}
          onClick={() => scrollToElements("profile", 1)}
        >
          Profile
        </li>
        <li
          className={active === 2 ? "active" : ""}
          onClick={() => scrollToElements("product", 2)}
        >
          Produk
        </li>
        <li
          className={active === 3 ? "active" : ""}
          onClick={() => scrollToElements("manfaat", 3)}
        >
          Manfaat
        </li>
        <li
          className={active === 4 ? "active" : ""}
          onClick={() => scrollToElements("galeri", 4)}
        >
          Galeri
        </li>
        <li
          className={active === 5 ? "active" : ""}
          onClick={() => scrollToElements("testimoni", 5)}
        >
          Testimoni
        </li>
        <li
          className={active === 6 ? "active" : ""}
          onClick={() => scrollToElements("kontak", 6)}
        >
          Kontak dan Sosial Media
        </li>
        <li
          className={`burger-menu ${sideNav ? "open" : ""}`}
          onClick={() => setSideNav(!sideNav)}
        >
          <span></span>
          <span></span>
          <span></span>
        </li>
      </ul>
      <ul className={`mobile ${sideNav ? "show" : ""}`}>
        <li
          className={active === 1 ? "active" : ""}
          onClick={() => scrollToElements("profile", 1)}
        >
          Profile
        </li>
        <li
          className={active === 2 ? "active" : ""}
          onClick={() => scrollToElements("product", 2)}
        >
          Produk
        </li>
        <li
          className={active === 3 ? "active" : ""}
          onClick={() => scrollToElements("manfaat", 3)}
        >
          Manfaat
        </li>
        <li
          className={active === 4 ? "active" : ""}
          onClick={() => scrollToElements("galeri", 4)}
        >
          Galeri
        </li>
        <li
          className={active === 5 ? "active" : ""}
          onClick={() => scrollToElements("testimoni", 5)}
        >
          Testimoni
        </li>
        <li
          className={active === 6 ? "active" : ""}
          onClick={() => scrollToElements("kontak", 6)}
        >
          Kontak dan Sosial Media
        </li>
      </ul>
    </nav>
  )
}
