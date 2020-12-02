import React from "react";
import styled from "@emotion/styled";

import logo from "../static/logo.png";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled("header")`
  padding: 15px 0;
  width: 100%;
`;

const NavWrapper = styled("nav")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  .logo {
    height: 80px;
  }
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primary};
  padding: 8px 16px;
  margin-left: 2rem;
  .active {
    color: ${(props) => props.theme.colors.accent};
  }
`;

const Nav = () => {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <img className="logo" src={logo} alt="Acacia logo" />
        <div>
          <NavItem to="/about-us">About Us</NavItem>
          <NavItem to="/services">Our services &amp; activities</NavItem>
          <NavItem to="/contact-us">Contact us</NavItem>
        </div>
      </NavWrapper>
    </HeaderWrapper>
  );
};

export default Nav;
