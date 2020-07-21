import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import BlogPost from "../models/BlogPost";

class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogItem: props.item,
      wordCount: 0,
    };
  }

  componentDidMount() {
    const blogPost = new BlogPost();

    blogPost.readArticleFile(this.state.blogItem.name).then(() => {
      this.setState({ wordCount: blogPost.getMinutesToRead() });
    });
  }

  render() {
    const linkToPost = "/blog/" + this.state.blogItem.name;
    return (
      <>
        <Card
          className="mb-3 mr-1 ml-1"
          bg="dark"
          text="white"
          style={{ width: "20em" }}
        >
          <Card.Header as="h5">{this.state.blogItem.date}</Card.Header>
          <Card.Body>
            <Card.Title>
              <h3>{this.state.blogItem.title}</h3>
            </Card.Title>
            <Card.Subtitle>
              <p>{this.state.wordCount} minute read </p>
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" href={linkToPost}>
              Read Now
            </Button>
          </Card.Footer>
        </Card>
        <br />
      </>
    );
  }
}

export default BlogCard;
