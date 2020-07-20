import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import BlogPost from "../models/BlogPost";


const BlogCard = ({ item }) => {
  const blogPost = new BlogPost(item.name)
  const wordCount = blogPost.getWordCount(item.name);
  return (    
    <>
      <Card
        className="mb-3 mr-1 ml-1"
        bg="dark"
        text="white"
        style={{ width: "20em" }}
      >
        <Card.Header as="h5">{item.date}</Card.Header>
        <Card.Body>
          <Card.Title>
            <h3>{item.title}</h3>
          </Card.Title>
          <Card.Subtitle>
             <p>{wordCount} minute read </p> 
          </Card.Subtitle>
          <Card.Text></Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link key={item.name} to={`/blog/${item.name}`}>
            <Button variant="primary">Read Now</Button>
          </Link>
        </Card.Footer>
      </Card>
      <br />
    </>
  );
};

export default BlogCard;
