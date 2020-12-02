import styled from "@emotion/styled";

export const Container = styled("div")`
  width: 80%;
  padding: 15px;
  margin: 0 auto;
`;

export const MainImgWrapper = styled("div")<{ img: string }>`
  background: #000 url(${(props) => props.img}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    color: ${(props) => props.theme.colors.light};
    font-size: 6rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  padding-top: 2rem;
  padding-bottom: 2rem;
`;


export { default as Footer } from "./Footer";
export { default as Nav } from "./Nav";
