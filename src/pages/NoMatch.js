import React from 'react';
import { Container, Row } from "react-bootstrap";
import WebsiteBanner from "../components/WebsiteBanner";

export const NoMatch = () =>
(
    <>
    <WebsiteBanner bannerStyle="nomatchBanner" title="Page not found" />
    <Container>

      <Row >
        <h2>
        <h5>Looks like you are looking for something that is no longer there on this site. Connect with me using the <a href="/contact">Contact</a> page if you need the item. Thank you!</h5>
        </h2>
      </Row>
      

    </Container>
    <br />
    <br />
  </>
);
export default NoMatch;