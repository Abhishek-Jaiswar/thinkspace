import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default App