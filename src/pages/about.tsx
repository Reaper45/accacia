import React from "react";

import { Container } from "../components";
import Layout from "../components/Layout";
import { SectionWrapper, SectionContent } from "./home";

import mainBg from "../static/main.png";
import aboutImg from "../static/about.png";

const AboutPage = () => {
  return (
    <>
      <Layout
        image={mainBg}
        top={() => (
          <Container>
            <h1 style={{ width: "60%" }}>ABOUT THE ACACIA RESIDENCY</h1>
            <div
              className="description"
              style={{ width: "60%", color: "#fff", fontSize: "1.2rem" }}
            >
              The Acacia Residency has established itself as one of the world’s
              leading hospitality brands offering quality accommodation, unique
              holiday and conference solutions, cultural heritage and adventure
              tourism.{" "}
            </div>
          </Container>
        )}
      >
        {() => (
          <Container>
            <SectionWrapper>
              <SectionContent style={{ marginLeft: "2rem" }}>
                <p>
                  The common operating philosophy at all Acacia properties is
                  attention to even the smallest details, exceptionally personal
                  service and a continuous effort to meet and even foretell
                  customer requirements. In addition, each property celebrates
                  and reflects its area’s artistic idioms and cultural
                  expressions with a view to giving clients a unique experience
                  in every Acacia. These values are central to Acacia’s ethos
                  and are the key elements that contribute to the strength and
                  uniqueness of the brand.
                </p>

                <h5 style={{ marginLeft: "1rem 0" }}>Acacia Care</h5>

                <p>
                  We pride ourselves on the calibre of our service; but then
                  we’re very fortunate in our staff. We employ only the best;
                  and not only do we ensure that they benefit from extensive
                  training, health and community support, but we also believe in
                  encouraging their full participation in both our present and
                  our future.
                </p>
                <h5 style={{ margin: "1rem 0" }}>Acacia Quality</h5>

                <p>
                  We believe our guests deserve the best - and this extends from
                  the vibrancy of our cuisine to our choice of wines. We also
                  believe in delivering optimum style of surroundings,
                  uncompromising standards of comfort, extensive global
                  connectivity and efficient business support. All properties in
                  Asia and Africa are styled so as to complement the landscape,
                  nurture the environment and celebrate the rich tapestry of
                  local culture.
                </p>
              </SectionContent>
              <SectionContent style={{ marginLeft: "5rem", width: "25%" }}>
                <h3 style={{ lineHeight: "1.5" }}>
                  Our Mission is to create outstanding facilities faithfully
                  reflecting ethnic designs that offer the highest standards of
                  product and service and to provide Management and staff with
                  an environment that enables them to deliver operating
                  standards beyond the level of our guests’ expectations,
                  resulting in satisfactory returns to our stakeholders.
                </h3>
              </SectionContent>
            </SectionWrapper>
            <div style={{}}>
              <img style={{ width: "100%" }} src={aboutImg} alt="" />
            </div>
            <SectionContent style={{ width: "70%", padding: "3rem 0" }}>
              <h4 style={{ marginBottom: "1.5rem" }}>
                Treasuring Our Heritage
              </h4>
              <div>
                Tourism is about people, and we believe in introducing our
                visitors to the real character of their hosts. Our holiday
                destinations in East Africa and South Asia offer unusually
                complex and colourful ethnic tapestries, featuring a charismatic
                mix of peoples ranging from the scarlet-cloaked Maasai to the
                vibrant Baluch people of southeast Pakistan. This heritage is,
                however, fragile; and in order that it may be both preserved and
                nurtured for the future, we believe that the benefits of tourism
                must be shared with the local community.
              </div>
            </SectionContent>
          </Container>
        )}
      </Layout>
    </>
  );
};

export default AboutPage;
