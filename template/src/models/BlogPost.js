// Data structure representing a single blog post

// Encapsulates logic to deal with a single post
class BlogPost {

  // Test helper
  setFileText(text) {
    this.filetext = text;
  }

  getMinutesToRead() {    
    return Math.round(this.filetext.split(/[\r\n\s,]+/).length / 300);
  }

  getArticleText() {
    return this.filetext;
  }

  // Read from the file system
   async readArticleFile(filename) {
    try {
      const respTxt = await fetch(`/posts/${filename}.txt`)
        .then(response => {return response.text()});
      this.filetext = respTxt;
    } catch (error) {
      this.setFileText("Could not read file: " + error.text());
    }
  }
}

export default BlogPost;
