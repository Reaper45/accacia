import React from "react";

import { Container, Footer, MainImgWrapper, Nav } from "../components";
import mainBg from "../static/main.png";

const ContactsPage = () => {
  return (
    <>
      <MainImgWrapper img={mainBg}>
        <Nav />
        <Container>
          <h1>Contact Us</h1>
          <div className="description">
            If you require more information about Acacia Residency destinations
            or if you are interested in exploring development or partnership
            opportunities with us, please contact us today at Serena Africa +254
            732 123 333
          </div>
        </Container>
      </MainImgWrapper>

      <Footer />
    </>
  );
};

export default ContactsPage;
