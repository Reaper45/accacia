import React from "react";
import styled from "@emotion/styled";

import roomImg from "../../../static/main.png";

const UnitDetailsWrapper = styled("div")`
  padding: 2rem 3rem;
  display: flex;
  align-items: center;
  > div:last-of-type {
    margin-left: 3rem;
    flex-grow: 1;
  }

  .charge {
    border-top: solid 1px ${(props) => props.theme.colors.primary};
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
    b {
      color: ${(props) => props.theme.colors.accent};
    }
  }
`;

const Description = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    div {
      font-size: 2rem;
    }
  }
  .total {
    text-align: right;
    > small {
      color: ${(props) => props.theme.colors.grey};
      font-size: 0.75rem;
    }
    .label {
      color: ${(props) => props.theme.colors.grey};
      margin-right: 1rem;
      font-size: 1rem;
    }
    .amount {
      color: ${(props) => props.theme.colors.dark};
      font-weight: 700;
      font-size: 1.5rem;
      small {
        font-size: 1rem;
      }
    }
  }
`;

const ImgPreview = styled("div")<{ image: string }>`
  display: block;
  border-radius: 8px;
  width: 350px;
  height: 250px;
  background: #000 url(${(props) => props.image}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const UnitDetails = () => {
  return (
    <UnitDetailsWrapper>
      <ImgPreview image={roomImg} />
      <div>
        <Description>
          <div className="title">
            <div>Prestige Terrace Suite</div>
            <small>Special resident discount</small>
          </div>
          <div className="total">
            <small>From</small>

            <div>
              <span className="label">KES</span>

              <span className="amount">
                47,597
                <small>.50</small>
              </span>
            </div>
            <small>Per night</small>
          </div>
        </Description>

        <div className="charge">
          <div>15% off - just for you</div>
          <b> -15% </b>
        </div>
      </div>
    </UnitDetailsWrapper>
  );
};

export default UnitDetails;
