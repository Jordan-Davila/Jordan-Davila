import React, { Component } from "react";
import marked from "marked";

class Resume extends Component {
    constructor(props) {
		super(props);
		this.state = { markdown: false };
	}

    componentDidMount() {
        const readmePath = require("../assets/resume.md");

        fetch(readmePath)
          .then(response => {
            return response.text()
          })
          .then(text => {
            this.setState({
              markdown: marked(text)
            })
          })
      }

	render() {
		const { markdown } = this.state;

        return (
            <section className="resume">
                <article dangerouslySetInnerHTML={{__html: markdown}}></article>
            </section>
        )
	}
}

export default Resume;
