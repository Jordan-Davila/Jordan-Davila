import React, { Component } from "react";
import marked from "marked";

class Resume extends Component {
    constructor(props) {
		super(props);
		this.state = { markdown: false };
	}

    componentDidMount() {
        let root = document.documentElement;
        root.style.setProperty("--root-html-font-size", '16pt');
        root.style.setProperty("--root-html-line-height", '1.5');
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
