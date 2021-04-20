import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./Assets/dist/app.scss"
import "./Assets/dist/normalize.scss"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

serviceWorker.register()
