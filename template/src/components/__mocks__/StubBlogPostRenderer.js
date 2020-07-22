import React, {Component} from "react";

class StubBlogPostRenderer extends Component {
    constructor(props) {
        super();
        this.state = {
            text: props.text
        }
    }
    componentDidMount() {
    }

    render () {
        return (
            <>
            {this.state.text}
            </>
        );
    }
}


export default StubBlogPostRenderer;