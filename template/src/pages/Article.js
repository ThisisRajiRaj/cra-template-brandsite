import React, { Component } from "react";
import Layout from "../components/Layouts";
import articles from "./articleIndex";
import BlogPostRenderer from "../components/BlogPostRenderer";
import WebsiteBanner from "../components/WebsiteBanner";

class Article extends Component {
  constructor(props) {
    super();
    
    const match = props.match;
    if (match === undefined ||
      match.params === undefined || 
      match.params.name === undefined) {
        this.state = {error:"Please send in a valid name"};
        return;
    }
    this.state = {
      name: match.params.name,
      image: null,
      title: "",
      error: undefined,
      renderer: props.renderer
    };
  }
  componentDidMount() {
    if (this.state.name === undefined) {
      this.setState({ error:"Please send in a valid article name"});
    }
    const fetchedItem = articles.find(
      (item) => item.name.toUpperCase() === this.state.name.toUpperCase()
    );

    if (fetchedItem === undefined) {
      this.setState({ error:"Cannot find named article"});
      return;
    }

    this.setState({ title: fetchedItem.title });
    const header = fetchedItem.image;

    this.setState({
      image:
        header === null || header === undefined ? null : "/posts/" + header,
    });
  }

  render() {
    let content = <p>{this.state.error}</p>;
    let renderer = this.state.renderer ?? <BlogPostRenderer name={this.state.name}/> ;
    if (this.state.error === undefined) {
      content = 
        <>
        <p className="pb-3">
            {this.state.image == null || (
              <img src={this.state.image} alt="alternative source" />
            )}
        </p>        
        {renderer}
        </>;
    }
    return (
      <div className="blogpost pb-5">
        <WebsiteBanner bannerStyle="blogBanner pb-3" title={this.state.title} />

        <Layout>          
          <div>            
          {content}
          </div>
        </Layout>
      </div>
    );
  }
}

export default Article;
