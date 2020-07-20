

// Data structure representing a single blog post
// Encapsulates logic to deal with a single post
class BlogPost {
  constructor(filename) {
    this.filename = filename;
  }

  getWordCount(filename) {
    const str = this.getArticleText();
    return Math.round(str.split(" ").length / 300);
  }

  getArticleText() {
    const file = require(`../posts/${this.filename}.txt`);
    let result = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          var allText = rawFile.responseText.toString();
          result = allText;
        }
      }
    };
    rawFile.send(null);
    return result;
  }
}

export default BlogPost;
