import React from "react";
import BlogPost from "../models/BlogPost"

class TextFile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			blogPost: new BlogPost(props.name)
		};
	}

	render() {
		return (
            <div
            dangerouslySetInnerHTML={{
              __html: this.state.blogPost.getArticleText()
            }}></div>
          
		);
	}
}

export default TextFile;