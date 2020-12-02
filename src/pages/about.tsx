import React from "react";

import { Container, Footer, MainImgWrapper, Nav } from "../components";
import mainBg from "../static/main.png";

const AboutPage = () => {
  return (
    <>
      <MainImgWrapper img={mainBg}>
        <Nav />
        <Container>
          <h1>ABOUT THE ACACIA RESIDENCY</h1>
          <div className="description">
            The Acacia Residency has established itself as one of the world’s
            leading hospitality brands offering quality accommodation, unique
            holiday and conference solutions, cultural heritage and adventure
            tourism.{" "}
          </div>
        </Container>
      </MainImgWrapper>

      <Footer />
    </>
  );
};

export default AboutPage;
