import Article from "./Article";
import React from "react";
import articles from "./articleIndex";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StubBlogPostRenderer from "../components/__mocks__/StubBlogPostRenderer";
import BlogPostRenderer from "../components/BlogPostRenderer";
import ReactDOM from 'react-dom'

Enzyme.configure({ adapter: new Adapter() });


test("cannot find named article", async () => {  
  const wrapper = mount(<Article match={{params: {name: "cannotfindnamed"}}} />);    
  expect(wrapper.find("div.container").text()).toBe("Cannot find named article");
});

test("can find article", async () => {
  let firstArticle = "noarticles imported";
  if (articles.length > 0) {
    firstArticle = articles[0].name;
  }
  const stub = <StubBlogPostRenderer text="Hello world React!"/>
  const params = {
    name:{firstArticle}
  }
  const wrapper = mount(<Article renderer={stub} match={{params: {name:firstArticle}}} />);    

  wrapper.instance().forceUpdate();
  wrapper.update();

  expect(wrapper.text()).toMatch(/Hello world React/);
});

 