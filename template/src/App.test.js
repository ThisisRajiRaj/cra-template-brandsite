import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

test("nav bar exists", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find("nav").length).toBe(1);
});

test("carousel exists", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find("div.carousel").length).toBe(1);
});

test("app header exists", () => {
  const wrapper = mount(<App />);
  expect(wrapper.find("div.App-header").length).toBe(1);
});
