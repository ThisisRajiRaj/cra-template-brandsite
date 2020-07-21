import React from "react";
import { Container } from "react-bootstrap";
import articles from "./articleIndex";
import WebsiteBanner from "../components/WebsiteBanner";
import SubscribeBox from '../components/SubscribeBox'
import FilteredBlogPosts from "../components/FilteredBlogPosts";

function ArticleList() {
  return (
    <>
      <WebsiteBanner bannerStyle="blogListBanner" title="">
        <SubscribeBox />
      </WebsiteBanner>
      <Container>
        <FilteredBlogPosts articles={articles} filteredArticles={articles} />        
      </Container>
    </>
  );
}

export default ArticleList;
