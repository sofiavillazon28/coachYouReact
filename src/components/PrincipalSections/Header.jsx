import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Link } from 'react-router-dom';

import searchIcon from "../../assets/images/icons/search.svg"
import logo from "../../assets/images/logo/logo-1.svg"
import AvatarDropDown from '../Molecules/AvatarDropDown';

const Header = () => {
  const { user } = useContext(UserContext)

  return (
    <header className="header position-sticky md:position-fixed">
      <nav id="header-nav" className="nav">
        <div className="container px-15 flex justify-between items-center p-relative md:px-0">
          <div className="flex  gap-xl">
            <Link to="/">
              <img src={logo} alt="Logo CoachYou" className="nav__logo" width="114" height="39" />
            </Link>
            <ul className="list flex items-center gap-xl hidden md:flex">
              <li>
                <Link className="list__link p2" to="/">Home</Link>
              </li>
              <li>
                <Link className="list__link p2" to="/list">Coaches</Link>
              </li>
            </ul>
          </div>
          {!user && 
            <div className="list flex items-center gap-md">
                <img className="hidden md:flex" src={searchIcon} alt="searchIcon"/>
                <span className="divider-line h-full"></span>
                <Link className="list__link p3" to="/login">Login</Link>
                <Link to="/register"><button className="button-white">Join Us</button></Link>
            </div>
          }
          {user && (
            <>
              <AvatarDropDown user={user} />
            </>
          )}
        </div>
      </nav>

    </header>
  );
};

export default Header;