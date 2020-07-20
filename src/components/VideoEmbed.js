import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import { Row, Col } from "react-bootstrap";

function EmbedHelper({ source }) {
  return (
    <div>
      <ResponsiveEmbed aspectRatio="16by9" className="video">
        <embed src={source} />
      </ResponsiveEmbed>
    </div>
  );
}

export const VideoEmbed = ({ source1, source2, title1, title2 }) => (
  <Row>
    <Col>
      <EmbedHelper source={source1} />
      <h6>{title1}</h6>
    </Col>    
    <Col >
      <EmbedHelper source={source2} />
      <h6>{title2}</h6>
    </Col>
    
  </Row>
);
export default VideoEmbed;
