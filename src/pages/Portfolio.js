import React from "react";
import { Container } from "react-bootstrap";
import VideoEmbed from "../components/VideoEmbed";
import WebsiteBanner from '../components/WebsiteBanner';

export const Portfolio = () => (
  <>
    <WebsiteBanner bannerStyle="porfolioBanner" title="Portfolio"/>
    <Container>
      <h2 className="title">#region Videos</h2>
      <br />
      <VideoEmbed
        source1="https://www.youtube.com/embed/JkaxUblCGz0"
        source2="https://www.youtube.com/embed/R2DU85qLfJQ"
        title1="Placeholder title 1" 
        title2="Placeholder title 2"
      />
       <VideoEmbed
        source1="https://www.youtube.com/embed/JkaxUblCGz0"
        source2="https://www.youtube.com/embed/R2DU85qLfJQ"
        title1="Placeholder title 1" 
        title2="Placeholder title 2"
      />
      <br />
      
    </Container>
    <br />
    <br />
    <Container className="themed-container" fluid="sm">
      <h2 className="title">
        #REGION WRITING
        <br />
        Checkout our posts in our <a href="/blog">BLOG</a> page.
      </h2>
      <br />
    </Container>
  </>
);

export default Portfolio;
