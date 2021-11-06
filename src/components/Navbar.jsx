import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';
import {
  Nav, Logo, Ul, Li, Icon, CollapseContainer, MenuIcon,
} from './navbarStyle';

const Navbar = () => {
  const humburgerIconRef = useRef(null);
  const closeIconRef = useRef(null);
  const collapseRef = useRef(null);
  const collapseMenu = () => {
    if (window.innerWidth <= 768) {
      humburgerIconRef.current.classList.toggle('d-none');
      closeIconRef.current.classList.toggle('d-none');
      collapseRef.current.classList.toggle('menu-open');
    }
  };
  return (
    <Nav>
      <Logo className="logo">
        Bookstore CMS
      </Logo>
      <MenuIcon ref={humburgerIconRef}>
        <GiHamburgerMenu
          onClick={collapseMenu}
        />
      </MenuIcon>
      <div ref={closeIconRef} className="d-none">
        <AiFillCloseCircle
          style={{
            fontSize: '30px',
            color: '#0290ff',
          }}
          onClick={collapseMenu}
        />
      </div>
      <CollapseContainer ref={collapseRef}>
        <Ul>
          <Li active="1" onClick={collapseMenu}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              Books
            </Link>
          </Li>
          <Li onClick={collapseMenu}>
            <Link to="/categories" style={{ textDecoration: 'none' }}>
              Categories
            </Link>
          </Li>
        </Ul>
        <Icon>
          <FaUserAlt style={{
            width: '1.063rem',
            height: '1.063rem',
            color: '#0290ff',
          }}
          />
        </Icon>
      </CollapseContainer>
    </Nav>
  );
};

export default Navbar;
