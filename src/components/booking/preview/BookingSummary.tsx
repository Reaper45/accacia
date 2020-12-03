import React from "react";
import styled from "@emotion/styled";

const FieldWrapper = styled("div")`
  background: #eaeaea;
  padding: 0.75rem 3rem;
  flex-grow: 1;
  small,
  b {
    display: block;
  }
`;

const BookingSummaryItem = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
  margin-bottom: 3px;
  .to {
    position: absolute;
    background: ${(props) => props.theme.colors.grey};
    border: solid 2px #fff;
    border-radius: 20px;
    width: 30px;
    height: 30px;
    left: calc(50% - 15px);
    text-align: center;
    svg {
      width: 10px;
    }
  }
`;

const Field: React.FC<{ value: string; label: string }> = ({
  value,
  label,
}) => {
  return (
    <FieldWrapper>
      <small>{label}</small>
      <b>{value}</b>
    </FieldWrapper>
  );
};

const BookingSummary = () => {
  return (
    <div>
      <BookingSummaryItem className="">
        <Field label="Check in" value="2020/20/09" />
        <div className="to">
          <svg width="15.024" height="25.805" viewBox="0 0 15.024 25.805">
            <g transform="translate(-952.488 -269.597)">
              <g transform="translate(-1770.891 405.219)">
                <line
                  x2="10.781"
                  y2="10.781"
                  transform="translate(2725.5 -133.5)"
                  fill="none"
                  stroke="#eaeaea"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  y1="10.781"
                  x2="10.781"
                  transform="translate(2725.5 -122.719)"
                  fill="none"
                  stroke="#eaeaea"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </g>
            </g>
          </svg>
        </div>
        <Field label="Check out" value="2020/20/09" />
      </BookingSummaryItem>
      <BookingSummaryItem className="">
        <Field label="No. of rooms" value="1" />
        <Field label="Adults per room" value="2" />
        <Field label="Children per room" value="0" />
      </BookingSummaryItem>
    </div>
  );
};

export default BookingSummary;
