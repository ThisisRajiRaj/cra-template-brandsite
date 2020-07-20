import React from "react";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import WebsiteBanner from "../components/WebsiteBanner";
import { Container } from "react-bootstrap";

export const Contact = () => (
  <>
    <WebsiteBanner bannerStyle="contactBanner" title="Contact" />
    
    <Container>
    <h2>
        <p>Connect with us on our social media</p>
         <a href="https://twitter.com/[%REPLACE%]" >
            <FaTwitterSquare />
          </a>
          <a href="https://linkedin.com/in/[%REPLACE%]">
            <FaLinkedin />
          </a>
          </h2>
          </Container>
    <br />
    <br />
  </>
);
export default Contact;
