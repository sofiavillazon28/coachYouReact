import React from 'react'
import searchIcon from "../../assets/images/icons/search.svg"
import logo from "../../assets/images/logo/logo-1.svg"

const Header = () => {
  return (
    <header className="header position-sticky md:position-fixed">
      <nav id="header-nav" className="nav">
        <div className="container px-15 flex justify-between items-center p-relative md:px-0">
          <div className="flex  gap-xl">
            <a href="/">
              <img src={logo} alt="" className="nav__logo" width="114" height="39" />
            </a>
            <ul className="list flex items-center gap-xl hidden md:flex">
              <li>
                <a className="list__link p2" href="/">Home</a>
              </li>
              <li>
                <a className="list__link p2" href="/list">Couches</a>
              </li>
            </ul>
          </div>
          <div className="list flex items-center gap-md">
            <img className="hidden md:flex" src={searchIcon} alt="searchIcon"/>
              <span className="divider-line h-full"></span>
              <a className="list__link p3" href="/login">Login</a>
              <a href="/register"><button className="button-white" href="/register">Join Us</button></a>
          </div>
        </div>
      </nav>

    </header>
  );
};

export default Header;