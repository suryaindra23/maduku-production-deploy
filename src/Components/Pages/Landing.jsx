import React, { useContext, useEffect } from "react"
import { NavbarContext } from "../../Context"
import { useScrollPosition } from "../Utils/useScrollPosition"
import Home from "../Sections/Home"
import Product from "../Sections/Product"
import Galeri from "../Sections/Galeri"
import Testimoni from "../Sections/Testimoni"
import PureHoney from "../Pages/PureHoney/PureHoney";
import Benefits from "../Pages/Benefits/Benefits"
import Contact from "../Pages/Contact/Contact"
import Footer from "../Pages/Footer/Footer"
import "../../Assets/dist/landing.scss"

export default function Landing() {
  const { setDistY, sideNav } = useContext(NavbarContext)
  useScrollPosition(({ prevPos, currPos }) => {
    const y = currPos.y * -1
    setDistY(y)
  })

  useEffect(() => {
    if (sideNav) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden"
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "hidden auto"
    }
  }, [sideNav])

  return (
    <div className={`landing-app ${sideNav ? "blur" : ""}`}>
      <Home />
      <Product />
      <PureHoney />
      <Benefits />
      <Galeri />
      <Testimoni />
      <Contact />
      <Footer />
    </div>
  )
}
