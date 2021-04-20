import { createContext } from "react"

export const NavbarContext = createContext({
  active: 1,
  sideNav: false,
  distY: 0,
  setActive: () => {},
  setSideNav: () => {},
  setDistY: () => {},
})
