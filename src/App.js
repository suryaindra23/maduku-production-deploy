import React, { useState, useMemo } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { NavbarContext } from "./Context"
import smoothscroll from "smoothscroll-polyfill"

// Components
import Navbar from "./Components/Layouts/Navbar"
import Landing from "./Components/Pages/Landing"
import Footer from "./Components/Pages/Footer/Footer"
import Contact from "./Components/Pages/Contact/Contact"

// kick off the polyfill!
smoothscroll.polyfill()

function App() {
  const [active, setActive] = useState(1)
  const [sideNav, setSideNav] = useState(0)
  const [distY, setDistY] = useState(0)
  const navContext = useMemo(
    () => ({
      active,
      setActive,
      sideNav,
      setSideNav,
      distY,
      setDistY,
    }),
    [active, setActive, sideNav, setSideNav, distY, setDistY]
  )

  return (
    <div className="App">
      <NavbarContext.Provider value={navContext}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/footer" component={Footer} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </NavbarContext.Provider>
    </div>
  )
}

export default App
