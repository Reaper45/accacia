import styled from "@emotion/styled";
import React from "react";

import BookingSummary from "./BookingSummary";
import UnitDetails from "./UnitDetails";

import logo from "../../../static/logo-inv.png";

const PreviewWrapper = styled("div")`
  background: #fffffe;
`;

const Header = styled("header")`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 3rem;
  margin-bottom: 2rem;

  .logo {
    height: 60px;
    margin-left: -10px;
  }
  > div {
    padding: 0 3rem;
    :first-of-type {
      padding-left: 0;
      border-right: solid 1px ${(props) => props.theme.colors.primary};
    }
  }
  .title {
    font-size: 2rem;
    font-weight: 100;
    color: ${(props) => props.theme.colors.grey};
  }
`;

const Footer = styled("footer")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem 0;
  div {
    button {
      border: none;
      font-weight: 600;
      font-size: 1rem;
      padding: 1rem 3.5rem;
      border-radius: 30px;
      height: 100%;
    }
    :first-of-type {
      button {
        padding-left: 0;
        padding-right: 0;
        background: transparent;
        color: ${(props) => props.theme.colors.dark};
      }
    }
    :last-of-type {
      button {
        background: ${(props) => props.theme.colors.accent};
        color: ${(props) => props.theme.colors.light};
      }
    }
  }
`;

const TotalsRow = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  border-top: solid 1px ${(props) => props.theme.colors.primary};
  border-bottom: solid 1px ${(props) => props.theme.colors.primary};
  box-shadow: 0px -55px 30px rgba(0, 0, 0, 0.04);

  .description {
    color: #999999;
    b {
      margin-right: 2rem;
      color: ${(props) => props.theme.colors.dark};
    }
  }
  .total {
    text-align: right;
    > b {
      color: ${(props) => props.theme.colors.dark};
      font-size: 0.85rem;
    }
    .label {
      color: ${(props) => props.theme.colors.accent};
      margin-right: 1rem;
    }
  }
  .amount {
    color: ${(props) => props.theme.colors.accent};
    font-weight: 700;
    font-size: 2rem;
    small {
      font-size: 1rem;
    }
  }
`;

const BookingPreview = () => {
  return (
    <PreviewWrapper>
      <Header>
        <div>
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="title">Lodwar</div>
      </Header>

      <BookingSummary />

      <UnitDetails />

      <TotalsRow>
        <div className="description">
          <b>Taxes</b> All included
        </div>
        <div className="total">
          <div className="">
            <span className="label">KES</span>

            <span className="amount">
              134,549
              <small>.30</small>
            </span>
          </div>
          <b>Total Amount</b>
        </div>
      </TotalsRow>
      <Footer>
        <div>
          <button>Cancel</button>
        </div>
        <div>
          <button>Book now!</button>
        </div>
      </Footer>
    </PreviewWrapper>
  );
};

export default BookingPreview;
