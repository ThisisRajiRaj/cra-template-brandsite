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
    this.setFileText(await fetch(`/posts/${filename}.html`)
        .then(response => (response.text()))
        .catch(error => ("Could not read file: " + error.toString()))
    );
  }
}

export default BlogPost;
