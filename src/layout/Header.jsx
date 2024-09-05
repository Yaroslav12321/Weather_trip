// import { NavLink, Link } from 'react-router-dom';
// import logo from "../files/photo/logo.png";
// import "../css/main.css";
// import { DateTimeDisplay } from "../components/DateTimeZone";

// const setActive = ({isActive}) => isActive ? 'active-link' : '';

// function Header () {
// return (
//   <header className="header">
//     <DateTimeDisplay />
// <nav className="nav">
//        <Link to="/"><img  className="brandLogo" src={ logo } alt="logo" /></Link>
//       <ul className="nav_list">
//         <li className='nav_list__item'><NavLink to='/' className={setActive}>Home</NavLink></li>
//         <li className='nav_list__item'><NavLink to='/News' className={setActive}>News</NavLink></li>
//         <li className='nav_list__item'><NavLink to='/About' className={setActive}>About</NavLink></li>
//       </ul>
//   </nav>
//   </header>
// )
// }

// export { Header }; 


import { NavLink, Link } from 'react-router-dom';
import logo from "../files/photo/logo.png";
import "../css/main.css";
import { useState } from 'react';
import { DateTimeDisplay } from "../components/DateTimeZone";

const setActive = ({isActive}) => isActive ? 'active-link' : '';

function Header () {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <DateTimeDisplay />
      <nav className="nav">
        <Link to="/"><img className="brandLogo" src={ logo } alt="logo" /></Link>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
          <span className="menu-icon__line"></span>
        </div>
        <ul className={`nav_list ${menuOpen ? 'open' : ''}`}>
          <li className='nav_list__item'>
            <NavLink to='/' className={setActive} onClick={closeMenu}>Home</NavLink>
          </li>
          <li className='nav_list__item'>
            <NavLink to='/News' className={setActive} onClick={closeMenu}>News</NavLink>
          </li>
          <li className='nav_list__item'>
            <NavLink to='/About' className={setActive} onClick={closeMenu}>About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };

