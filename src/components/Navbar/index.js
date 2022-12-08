import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';

const Navbar = () => {

  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.png')} alt='' height="80px" />
          <h1>StarBuzz</h1>
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/about' activeStyle>
            ABOUT US
          </NavLink>
          <NavLink to='/joinus' activeStyle>
            JOIN US
          </NavLink>
          <NavLink to='/media' activeStyle>
            MEDIA
          </NavLink>
          <NavLink to='/blog' className="blog" activeStyle>
            --BLOG
          </NavLink>
          <NavLink to='/careers' activeStyle>
            CAREERS
          </NavLink>
          <NavLink to='/contact' activeStyle>
            CONTACT
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;