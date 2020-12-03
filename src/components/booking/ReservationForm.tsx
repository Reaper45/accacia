import styled from "@emotion/styled";
import React from "react";

const ReservationFormWrapper = styled("div")`
  display: flex;
  align-items: flex-start;
  border-top: solid 1px ${(props) => props.theme.colors.grey};
  > div {
    flex-grow: 1;
  }
  h4 {
    margin: 0 0 1.5rem;
  }
`;

const FormWrapper = styled("div")`
  padding: 1rem 3rem;
  .field {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    label {
      min-width: 100px;
    }
    input {
      width: 100%;
      font-size: 1rem;
      padding: 6px 12px;
      border-radius: 4px;
      border: solid 1px ${(props) => props.theme.colors.grey};
    }
  }
`;

const PaymentSection = styled("div")`
  border-top: solid 1px ${(props) => props.theme.colors.grey};
  margin-top: 2rem;
  padding-top: 2rem;
`;

const ReservationSummary = styled("div")`
  background: ${(props) => props.theme.colors.primary};
  padding: 1rem 2rem;
  min-height: 550px;
`;

const ReservationForm: React.FC<{ back?: () => void }> = () => {
  return (
    <ReservationFormWrapper>
      <FormWrapper>
        <h4>Complete your reservation</h4>

        <div>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div className="field">
            <label>Phone</label>
            <input type="text" name="phone" />
          </div>
          <div className="field">
            <label>Address</label>
            <input type="text" name="address" />
          </div>
          <div className="field">
            <label>City</label>
            <input type="text" name="city" />
          </div>
          <div className="field">
            <label>Country</label>
            <input type="text" name="country" />
          </div>

          <PaymentSection>
            <h4>Select Payment Method</h4>
            <div className="field">
              <label>Payment</label>
              <select name="payment" id="">
                <option value="mpesa">MPESA</option>
              </select>
            </div>
          </PaymentSection>
        </div>
      </FormWrapper>
      <ReservationSummary>
        <h4>Reservation Summary</h4>
      </ReservationSummary>
    </ReservationFormWrapper>
  );
};

export default ReservationForm;
