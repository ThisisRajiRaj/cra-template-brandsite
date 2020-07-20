import React from "react";


function WebsiteBanner(props) {
  const bannerStyle = props.bannerStyle + " hero-image";
  const title = props.title;
  return (
    <>
      <div className={bannerStyle}>
        {props.children}
        <div className="hero-text">
          <h1>{title}</h1>
        </div>
      </div>
      <br /> <br />
    </>
  );
}
export default WebsiteBanner;
