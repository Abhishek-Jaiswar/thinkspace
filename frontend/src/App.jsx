import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App