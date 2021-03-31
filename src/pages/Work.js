import React, { Component } from "react";
import ContentContainer from "../components/ContentContainer";
import Main from "../components/Main";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import { Transition, TransitionGroup } from "react-transition-group";
import { Play, Exit } from "../timelines";
// import { onTransitionWillStart } from "react-router-page-transition";

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = { type: "Featured" };
    }
    selectType(type, e) {
        e.preventDefault();
        this.setState({type: type})
    }
	render() {
		return (
			<Main page={"work"}>
				<Nav back="/" page="Work" />
				<ContentContainer>
                    {/* eslint-disable-next-line array-callback-return */}
					{window.projects.map((project, index) => {
                            return <Link key={index} to={`/projects/${project.slug}`}>
                                <div className="label">{project.name}</div>
                                <div className="num">0{index+1}</div>
                                <i class="icon-link"></i>
                            </Link>
                    })}

                    <p className="description">
						I'm constantly experimenting outside of client work to uncover unique layouts,
						styles, and interactions, and of late have been taking a lot of inspiration from
						print design in particular.
				    </p>
				</ContentContainer>
			</Main>
		);
	}
}

export default Work;
