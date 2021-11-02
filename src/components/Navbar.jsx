import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import {
  Nav, Logo, Ul, Li, Icon,
} from './navbarStyle';

const Navbar = () => (
  <Nav>
    <Logo className="logo">
      Bookstore CMS
    </Logo>
    <Ul>
      <Li active="1">
        <Link to="/" style={{ textDecoration: 'none' }}>
          Books
        </Link>
      </Li>
      <Li>
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
  </Nav>
);

export default Navbar;
