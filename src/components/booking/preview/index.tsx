import styled from "@emotion/styled";
import React from "react";

import BookingSummary from "./BookingSummary";
import UnitDetails from "./UnitDetails";

const TotalsRow = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem;
  border-top: solid 1px ${(props) => props.theme.colors.primary};
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
    <div>
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
    </div>
  );
};

export default BookingPreview;
