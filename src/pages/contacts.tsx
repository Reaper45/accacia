import React from "react";

import { Container } from "../components";
import Layout from "../components/Layout";
import mainBg from "../static/main.png";

const ContactsPage = () => {
  return (
    <Layout
      image={mainBg}
      top={() => (
        <Container>
          <h1>Contact Us</h1>
          <div
            className="description"
            style={{ width: "60%", color: "#fff", fontSize: "1.2rem" }}
          >
            If you require more information about Acacia Residency destinations
            or if you are interested in exploring development or partnership
            opportunities with us, please contact us today at Serena Africa +254
            732 123 333
          </div>
        </Container>
      )}
    />
  );
};

export default ContactsPage;
