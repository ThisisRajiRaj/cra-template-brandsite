import BlogPost from "./BlogPost";

test("empty list", () => {
  const undertest = new BlogPost();
  undertest.setFileText("");
  expect(undertest.getMinutesToRead()).toBe(0);
});

test("300 words", () => {
  let articles = GetArticlesWithWordCount(300);
  const undertest = new BlogPost();
  undertest.setFileText(articles);
  expect(undertest.getMinutesToRead()).toBe(1);
});

test("825 words", () => {
  let articles = GetArticlesWithWordCount(825);
  const undertest = new BlogPost();
  undertest.setFileText(articles);
  expect(undertest.getMinutesToRead()).toBe(3);
});

test("with new lines", () => {
  let articles = GetArticlesWithWordCount(100);
  articles += "\r\n";
  articles += GetArticlesWithWordCount(100);
  articles += "\r\n";
  articles += GetArticlesWithWordCount(300);

  const undertest = new BlogPost();
  undertest.setFileText(articles);
  expect(undertest.getMinutesToRead()).toBe(Math.round(500 / 300));
});

function GetArticlesWithWordCount(maxWords) {
  let articles = "";
  for (var i = 0; i < maxWords; i++) {
    articles += "word ";
  }
  return articles;
}
