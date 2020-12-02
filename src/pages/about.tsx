import React from "react";

import { Container } from "../components";
import Layout from "../components/Layout";
import mainBg from "../static/main.png";

const AboutPage = () => {
  return (
    <Layout
      image={mainBg}
      top={() => (
        <Container>
          <h1>ABOUT THE ACACIA RESIDENCY</h1>
          <div className="description">
            The Acacia Residency has established itself as one of the world’s
            leading hospitality brands offering quality accommodation, unique
            holiday and conference solutions, cultural heritage and adventure
            tourism.{" "}
          </div>
        </Container>
      )}
    />
  );
};

export default AboutPage;
