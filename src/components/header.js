import React, { useState } from "react"
import NavBar from "react-responsive-menubar/lib/NavBar"

const Header = () => {
  const [showNavBar, setShowNavbar] = useState(false)

  return (
    <header className="header" style={{ position: "relative" }}>
      <NavBar
        handleSideNavToggle={() => setShowNavbar(!showNavBar)}
        showSideNav={showNavBar}
        logoStyles={{ display: "none" }}
        navBarStyles={{ boxShadow: "none", backgroundColor: "white" }}
        linkStyles={{ color: "smoke", fontWeight: "bold" }}
      >
        <a href="/">home</a>
        <a href="/">contact</a>
      </NavBar>
    </header>
  )
}

export default Header
