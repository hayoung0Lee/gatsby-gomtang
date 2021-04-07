import React from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import styled from "styled-components";

const ContactStyle = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  grid-column: 2 / -2;
  display: grid;
`;

const ContactPage = () => (
  <Layout>
    <Container>
      <ContactStyle>Contact Page </ContactStyle>
    </Container>
  </Layout>
);

export default ContactPage;
