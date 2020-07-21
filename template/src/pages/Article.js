import React from "react";
import Layout from "../components/Layouts";
import articles from "./articleIndex";
import BlogPostRenderer from "../components/BlogPostRenderer";
import WebsiteBanner from '../components/WebsiteBanner';


const Article = ({ match }) => {
  const name = match.params.name;
  const fetchedItem = articles.find(item => item.name.toUpperCase() === name.toUpperCase());
  const title = fetchedItem.title;
  const header = fetchedItem.image;

  let image = (header === null || header === undefined) ? null : "/posts/" + header;

  return (
    <div className="blogpost">
      <WebsiteBanner bannerStyle="blogBanner pb-3" title={title} />
      
      <Layout>
        <p>{(image == null) || <img src={image} alt="alternative source" />}</p>

        <br />
        <div><BlogPostRenderer name={name} /></div>
      </Layout>
      <br/><br/>
    </div>
  );
};

export default Article;
