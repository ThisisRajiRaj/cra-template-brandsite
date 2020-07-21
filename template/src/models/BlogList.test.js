import BlogList from "./BlogList";


test("empty list", () => {
  const undertest = new BlogList([])
  expect(undertest.getFilteredArticles().length).toBe(0);
}); 

test("multiple years", () => {
  const articles = [
    {
        "date": "September 6, 2018",
        "name": "post1",
        "title": "post1"
    },
    {
        "date": "September 11, 2019",
        "name": "post2",
        "title": "post2"
    },
    {
        "date": "February 18, 2020",
        "name": "post3",
        "title": "post3"
    }
];
  const undertest = new BlogList(articles);
  expect(undertest.getFilteredArticles().length).toBe(3);
}); 

test("same year", () => {
  const articlesInSameYear = [
    {
      "date": "September 6, 2019",
      "name": "post1",
      "title": "post1"
    },
    {
      "date": "September 11, 2019",
      "name": "post2",
      "title": "post2"
    },
    {
      "date": "February 18, 2019",
      "name": "post3",
      "title": "post3"
    }
  ];
  
  const articles = articlesInSameYear;
  const undertest = new BlogList(articles);
  undertest.setFilteredArticles("All")
  expect(undertest.getFilteredArticles().length).toBe(3);

  undertest.setFilteredArticles(2019);
  expect(undertest.getFilteredArticles().length).toBe(3);

  undertest.setFilteredArticles(2020);
  expect(undertest.getFilteredArticles().length).toBe(0);
}); 
