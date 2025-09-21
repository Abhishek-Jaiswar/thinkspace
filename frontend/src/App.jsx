import React from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import AuthInitializer from "./components/AuthInitializer"

const App = () => {

  return (
    <AuthInitializer>
      <div>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </AuthInitializer>
  )
}

export default App