import React from "react";
import BlogPost from "../models/BlogPost"

class BlogPostRenderer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			blogPost: new BlogPost(),
			filename: props.name,
			afterMount: props.afterMount
		};
	}
	componentDidMount() {
		this.state.blogPost.readArticleFile(this.state.filename)
		.then( data => 
		{			
			this.setState( {filedata: this.state.blogPost.getArticleText()});

			// call handler hook after mounting. Used in unit tests
			if (this.state.afterMount !== undefined) {
				this.state.afterMount(this);
			}
		});
	}

	render() {
		return (
            <div
				dangerouslySetInnerHTML={{
				__html: this.state.filedata
            	}}>					
			</div>
          
		);
	}
}

export default BlogPostRenderer;