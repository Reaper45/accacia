import React, { useState } from "react";
import styled from "@emotion/styled";

import Modal from "../Modal";
import BookingPreview from "./preview";
import ReservationForm from "./ReservationForm";

import logo from "../../static/logo-inv.png";

const BookingWrapper = styled("div")`
  background: #fffffe;
`;

const Header = styled("header")`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0 3rem;
  margin-bottom: 1.5rem;

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
  border-top: solid 1px ${(props) => props.theme.colors.primary};

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

const Booking: React.FC<{ close?: () => void }> = ({ close }) => {
  const [active, setStep] = useState<"preview" | "reserve">("preview");

  const steps: {
    preview: React.ReactNode;
    reserve: React.ReactNode;
  } = {
    preview: <BookingPreview />,
    reserve: <ReservationForm />,
  };

  const activeComponent: React.ReactNode = steps[active];

  const handleSubmit = () => {
    if (active === "preview") {
      setStep("reserve");
    } else {
      console.log("submit");
    }
  };

  return (
    <Modal show close={close}>
      <BookingWrapper>
        <Header>
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <div className="title">Lodwar</div>
        </Header>

        {activeComponent}

        <Footer>
          <div>
            {active === "preview" && <button onClick={close}>Cancel</button>}
            {active === "reserve" && (
              <button onClick={() => setStep("preview")}>Back</button>
            )}
          </div>
          <div>
            <button onClick={handleSubmit}>
              {active === "preview" ? "Book now!" : "Make Payment"}
            </button>
          </div>
        </Footer>
      </BookingWrapper>
    </Modal>
  );
};

export default Booking;
