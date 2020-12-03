import React from 'react'
import styled from "@emotion/styled";

const BookingFormWrapper = styled("div")`
  background: #fff;
  padding: 5px;
  border-radius: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  margin-bottom: 2rem;

  button {
    background: ${(props) => props.theme.colors.accent};
    border: none;
    color: ${(props) => props.theme.colors.light};
    font-weight: 600;
    font-size: 1rem;
    padding: 1rem 3.5rem;
    border-radius: 30px;
    height: 100%;
  }
`;

const FormField = styled("div")`
  padding: 0 1rem;
  border-right: solid 1px ${(props) => props.theme.colors.primary};

  :first-of-type {
    margin-left: 1rem;
  }
  :last-of-type {
    border-right: none;
  }
  label {
    display: block;
    font-weight: 600;
  }
  input {
    border: none;
    font-size: 1rem;
    outline: none;
    color: #999999;
  }
`;

const BookingForm: React.FC<{
  handleClick: () => void;
}> = ({ handleClick }) => {
  return (
    <BookingFormWrapper>
      <FormField>
        <label htmlFor="">Location</label>
        <input />
      </FormField>
      <FormField>
        <label htmlFor="">Check In</label>
        <input />
      </FormField>
      <FormField>
        <label htmlFor="">Check Out</label>
        <input />
      </FormField>
      <FormField>
        <label htmlFor="">Guests</label>
        <input />
      </FormField>
      <button onClick={handleClick}>Book Online</button>
    </BookingFormWrapper>
  );
};

export default BookingForm
