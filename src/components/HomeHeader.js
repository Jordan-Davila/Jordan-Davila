import React, { Component } from "react";

class HomeHeader extends Component {
	render() {
		return (
			<header>
				<h1 style={{ color: this.props.text }}>Jordan Davila</h1>
				<h2 style={{ color: this.props.text }}>
                Designing and Developing unique and<br/>engaging digital experiences.
				</h2>
			</header>
		);
	}
}

export default HomeHeader;
