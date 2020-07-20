import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { FaTwitterSquare, FaLinkedin } from "react-icons/fa";
import HomeCarousel from '../components/HomeCarousel'

export const Home = () => (
  <div className="App-header">
    <div className="home">
    <HomeCarousel />

      <Container fluid>
        <br /><br />
        <Row>
          <p>
          [%REPLACE%]
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio nibh, facilisis nec feugiat a, facilisis eget enim. Quisque purus urna, finibus vel turpis vitae, pellentesque porttitor felis. Morbi dictum urna vel hendrerit scelerisque. Maecenas nec interdum nunc. Donec sollicitudin vel orci in porta. Integer ac sagittis orci. Etiam aliquam dignissim eleifend. Etiam porta metus tellus, at porttitor nisl dapibus nec. Maecenas luctus congue odio eget rutrum
          </p>
        </Row>
        <br />
        <div className="home">
          <Row>
            <p>
              <Button variant="flat" href="/about">
                Learn more
          </Button>
            </p>
          </Row>
          <Row>
            <Col>
              <a href="https://twitter.com/<twitteralias>">
                <FaTwitterSquare />
              </a>
              <a href="https://linkedin.com/in/<linkedinalias>">
                <FaLinkedin />
              </a>
            </Col>
          </Row>
        </div>

        <br />
        <br />
        <h6 className="home">Copyright © 2020 [%REPLACE%]company</h6>
      </Container>
    </div>
  </div>
);
export default Home;
