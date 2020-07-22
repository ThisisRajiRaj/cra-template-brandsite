import FilteredBlogPosts from "./FilteredBlogPosts";
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("test year selection", () => {
  const articles = [
    {
      date: "September 6, 2018",
      name: "post1",
      title: "post1",
    },
    {
      date: "September 11, 2019",
      name: "post2",
      title: "post2",
    },
    {
      date: "February 18, 2020",
      name: "post3",
      title: "post3",
    },
  ];
  testYearChange(articles, "2018", 1);
});


test("test year selection: multiple blogs in selected year", () => {
    const articles = [
      {
        date: "September 6, 2018",
        name: "post1",
        title: "post1",
      },
      {
        date: "September 11, 2018",
        name: "post2",
        title: "post2",
      },
      {
        date: "February 18, 2020",
        name: "post3",
        title: "post3",
      },
    ];
    testYearChange(articles, "2018", 2);
});


test("test year selection: 0 blogs in selected year", () => {
    const articles = [
      {
        date: "September 6, 2018",
        name: "post1",
        title: "post1",
      }
    ];
    testYearChange(articles, "2017", 0);
});


test("test year selection: all blogs in selected year", () => {
    const articles = [
      {
        date: "September 6, 2018",
        name: "post1",
        title: "post1",
      }
    ];
    testYearChange(articles, "2018", 1);
});


test("empty articles list", () => {
    const articles = [];    ;
    testYearChange(articles, "2018", 0);
});

function testYearChange(articles, yearToPick, numberToExpectAfter) {
  const wrapper = mount(
    <FilteredBlogPosts articles={articles} filteredArticles={articles} />
  );

  expect(wrapper.find("Dropdown").text()).toBe("All");
  expect(wrapper.find("BlogCard").length).toBe(articles.length);
  
  // Change year 
  wrapper.find("Dropdown").prop("onSelect")(yearToPick);

  // expect to find just specific # of blog cards after update
  wrapper.instance().forceUpdate();
  wrapper.update();
  expect(wrapper.find("Dropdown").text()).toBe(yearToPick);
  expect(wrapper.find("BlogCard").length).toBe(numberToExpectAfter);
}
