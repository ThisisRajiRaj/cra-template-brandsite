import BlogPostRendererer from "./BlogPostRenderer";
import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve("intial"),
  })
);
test("no blog text", async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      text: () => {
        return "";
      },
    })
  );
  const afterMount = (comp) => {
    expect(fetch).toHaveBeenCalledWith("/posts/noblog.txt");
    expect(comp.state.filedata).toBe("");
  };
  var comp = <BlogPostRendererer name="noblog" afterMount={afterMount} />;
  mount(comp);
});

test("empty blog text", async () => {
  fetch.mockImplementationOnce(() =>
    Promise.resolve({
      text: () => {
        return "hello";
      },
    })
  );
  const afterMount = (comp) => {
    expect(fetch).toHaveBeenCalledWith("/posts/emptyblog.txt");
    expect(comp.state.filedata).toBe("hello");
  };
  var comp = <BlogPostRendererer name="emptyblog" afterMount={afterMount} />;
  mount(comp);
});

test("error fetching file", async () => {
  fetch.mockImplementationOnce(() => Promise.reject("File not found"));
  const afterMount = (comp) => {
    expect(fetch).toHaveBeenCalledWith("/posts/filenotfound.txt");
    expect(comp.state.filedata).toBe("Could not read file: File not found"); 
  };
  var comp = <BlogPostRendererer name="filenotfound" afterMount={afterMount} />;
  mount(comp);
});
