import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { Row } from "react-bootstrap";
import BlogCard from "./BlogCard";
import BlogList from "../models/BlogList";

class FilteredBlogPosts extends Component {
  
  constructor(props) {
    super();
    this.state = {      
      yearSelected: "All",
      uniqueYears: [],
      blogList: new BlogList(props.articles)
    };    

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.setState((state) => ({
      yearSelected: evt.toString(),
    }));
    this.state.blogList.setFilteredArticles(evt.toString());
  }

  render() {
    return (
      <>
        <div>
          <label>Filter posts by year</label>
          <DropdownButton
            id="yeardropdown"
            title={this.state.yearSelected}
            onSelect={this.handleClick}
          >
            <Dropdown.Header>
              <b>Filter by year</b>
            </Dropdown.Header>
            <Dropdown.Item key={`yeardropdownAll`} id={`yeardropdownAll`} eventKey="All">
              All
            </Dropdown.Item>
            {this.state.blogList.getUniqueYears().map((year) => (
              <Dropdown.Item id={`yeardropdown${year}`} key={`yeardropdown${year}`} eventKey={year}>
                {year}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
        <br />
        <Row>
          {this.state.blogList.getFilteredArticles().map((item) => (
            <BlogCard key={item.name} item={item} />
          ))}
        </Row>
      </>
    );
  }
}

export default FilteredBlogPosts;
