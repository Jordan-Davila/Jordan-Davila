import React, { Component } from "react";
import ContentContainer from "../components/ContentContainer";
import Main from "../components/Main";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

class Error extends Component {
	render() {
		return (
			<Main page={"error"}>
				<Nav back="/" page="Error" />
				<ContentContainer>
					<div className="title">
						<h1>404</h1>
                        <div className="wrap">
                            <Link to="/">
                                <div className="label">Back to Home</div>
                                <i className="icon-link"></i>
                            </Link>
                            <p>Something clearly went wrong.</p>
						</div>
					</div>
				</ContentContainer>
			</Main>
		);
	}
}

export default Error;
