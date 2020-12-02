import React from "react";
import styled from "@emotion/styled";

import { Container } from ".";
import { NavLink } from "react-router-dom";

const FooterWrapper = styled("footer")`
  padding: 1rem 0;
  background: #1b1b1b;
  .top {
    display: flex;
    align-item: flex-start;
    justify-content: space-between;
    padding: 1rem 0;
    margin-bottom: 1rem;
  }

  .links {
    display: flex;
    align-item: flex-start;
    justify-content: space-between;
    width: 50%;
    h5 {
      color: #999999;
      margin-bottom: 1.5rem;
    }
  }

  .form {
    max-width: 350px;
    h5 {
      color: ${(props) => props.theme.colors.light};
      margin-bottom: 8px;
    }
    p {
      color: #999999;
    }
    input {
      background: #000000;
      border: none;
      padding: 10px 16px;
      margin-top: 1.5rem;
      width: 100%;
      ::placeholder {
        color: #999999;
      }
    }
    label {
      color: #999999;
      margin-top: 1.5rem;
      display: block;
      text-transform: uppercase;
    }
  }

  .bottom {
    padding: 1rem 0;
    color: #999999;
  }
  border-bottom: solid 3px ${(props) => props.theme.colors.accent};
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
  padding: 8px 0;
  margin-top: 8px;
  display: block;
`;


const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className="top">
          <div className="links">
            <div className="link-group">
              <h5>NEED HELP?</h5>
              <NavItem to="#">Contact Us</NavItem>
              <NavItem to="#">FAQS</NavItem>
              <NavItem to="#">How to shop</NavItem>
            </div>
            <div className="link-group">
              <h5>THE COMPANY</h5>
              <NavItem to="#">Our Story</NavItem>
              <NavItem to="#">Store Locator</NavItem>
              <NavItem to="#">Corporate information</NavItem>
            </div>
            <div className="link-group">
              <h5>FIND US ON</h5>
              <NavItem to="#">Facebook</NavItem>
              <NavItem to="#">Twitter</NavItem>
              <NavItem to="#">Instagram</NavItem>
            </div>
          </div>
          <div className="form">
            <h5>SIGN UP FOR ACACIA RESIDENCY UPDATES</h5>
            <p>
              By entering your email address below, you consent to receiving our
              newsletter with access to our latest collections, events and
              initiatives. More details on this are provided in our Privacy
              Policy
            </p>
            <input placeholder="Email Adress" />
            <label htmlFor="">Store Locator</label>
          </div>
        </div>
        <div className="bottom">
          © 2020 The Acacia Residency. - All rights reserved.
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
