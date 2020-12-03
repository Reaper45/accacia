import styled from "@emotion/styled";
import * as React from "react";
import { createRef, RefObject, useEffect } from "react";
import ReactDOM from "react-dom";

export type CloseFn = () => void;

export interface IModalProps {
  show: boolean;
  close?: CloseFn;
}

const ModalBackdrop = styled("div")<{ show: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(17, 74, 175, 0.33);
  left: 0;
  top: 0;
  z-index: 100;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
`;

const ModalWrapper = styled("div")<Partial<IModalProps>>`
  position: relative;
  margin: 0 auto;
  transition: all 200ms ease-in-out;
  transform: translateY(${(props) => (props.show ? "0%" : "-100%")});
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  background: ${(props) => props.theme.colors.light};
  border-radius: 10px;
  width: 85%;
  .close-btn {
    position: absolute;
    top: -1.5rem;
    right: -1rem;
    color: #fff;
    background: transparent;
    border: none;
    padding: 0;
    outline: 0;
    svg {
      height: 14px;
    }
  }
`;

const ModalContent = styled("div")`
  border-radius: 5px;
  padding: 1.5em 0;
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const modalRoot = document.getElementById("modal-root");

const Modal: React.FC<IModalProps> = ({ children, show, close }) => {
  const node: RefObject<HTMLDivElement> = createRef();

  const containerEl: HTMLDivElement = document.createElement("div");

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    modalRoot?.appendChild(containerEl);
    body.setAttribute("style", "overflow: hidden;");

    return () => {
      modalRoot?.removeChild(containerEl);
      body.removeAttribute("style");
    };
  }, [containerEl]);

  return ReactDOM.createPortal(
    <ModalBackdrop show={show}>
      <ModalWrapper ref={node} show={show}>
        <button className="close-btn" onClick={close}>
          <svg width="18.881" height="18.757" viewBox="0 0 18.881 18.757">
            <g transform="translate(-1763.003 -39.003)">
              <g transform="translate(1765 41)">
                <line
                  x2="14"
                  y2="14"
                  transform="translate(0.381 0.381)"
                  fill="none"
                  stroke="#eaeaea"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
                <line
                  x1="14.639"
                  y2="14.515"
                  transform="translate(0.124 0.124)"
                  fill="none"
                  stroke="#eaeaea"
                  strokeLinecap="round"
                  strokeWidth="3"
                />
              </g>
            </g>
          </svg>
        </button>
        <ModalContent>{children}</ModalContent>
      </ModalWrapper>
    </ModalBackdrop>,
    containerEl
  );
};

export default Modal;
