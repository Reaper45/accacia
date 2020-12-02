import styled from "@emotion/styled";
import React from 'react'

import { Container, Footer, Nav } from "../components";

import mainBg from "../static/main.png";
import cuisineBg from "../static/cuisine.png";
import experienceBg from "../static/experience.png";

const LandingWrapper = styled("div")`
  background: #000 url(${mainBg}) no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
`;

const SectionWrapper = styled("section")`
  margin: 5rem 0;
  display: flex;
  align-items: flex-start;

  > img {
    border-radius: 8px;
    max-width: 50%;
  }
`;

const SectionContent = styled("div")`
  width: 50%;
  h2 {
    font-size: 2rem;
    font-weight: 300;
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 1.5rem;
  }
  p {
    color: ${(props) => props.theme.colors.secondary};
    line-height: 1.5;

  }
`;

const SectionAction = styled("button")`
  border-radius: 20px;
  text-transform: uppercase;
  border: solid 1px ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.accent};
  background: transparent;
  padding: 10px 30px;
  margin-top: 3rem;
`;

const HomePage = () => {
  return (
    <>
      <LandingWrapper>
        <Nav />
      </LandingWrapper>
      <Container>
        <SectionWrapper>
          <img src={experienceBg} alt="" />
          <SectionContent style={{ marginLeft: "2rem" }}>
            <h2>Experience the incredible Acacia Residency</h2>
            <p>
              Spread over 7800 hectares, the Domaine de Chantilly is peppered
              with historical monuments, prestigious sporting venues and natural
              landscapes, each proudly parading an illustrious history, imposing
              architecture, opulent splendour. This magical setting is ideal for
              quality private and business functions. The Great Stables can hold
              up to 600 people under the stunning 28m-high dome.
            </p>
            <SectionAction>Book Online</SectionAction>
          </SectionContent>
        </SectionWrapper>
        <br />
        <SectionWrapper>
          <SectionContent style={{ marginRight: "2rem" }}>
            <h2>Award-winning Cuisine</h2>
            <p>
              La Table du Connétable finds itself in a remarkable location in
              the heart of the Domaine de Chantilly. This gourmet restaurant is
              starred in the Michelin Guide. The restaurant opens out onto the
              beautiful lawns and gardens of the Château de Chantilly.
            </p>
            <SectionAction>See Menu</SectionAction>
          </SectionContent>
          <img src={cuisineBg} alt="" />
        </SectionWrapper>
        <SectionWrapper>
          <h2>Find Us</h2>
        </SectionWrapper>

        <SectionWrapper>
          <h2>Follow us on Instagram</h2>
          <a href="#">@ACACIARESIDENCY</a>
        </SectionWrapper>
      </Container>
      <Footer/>
    </>
  );
}

export default HomePage
