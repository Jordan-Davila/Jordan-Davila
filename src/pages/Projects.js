import React, { Component } from "react";
import Main from "../components/Main";
import ContentContainer from "../components/ContentContainer";
import Nav from "../components/Nav";
import _ from "lodash";

class Projects extends Component {
	componentWillMount() {
		let project = _.find(window.projects, this.props.match.params);
		this.setState(project);
	}

	getImages() {
		let images = [];
        for (let index = 0; index < this.state.images.length; index++) {
            images.push(`/images/${this.state.image_path}/${this.state.images[index]}`);
        }
		return images;
	}

	render() {
		return (
			<Main page={"projects"}>
				<Nav back="/work" page="Projects" />
				<ContentContainer>
					<div className="project-info">
						<h1>{this.state.name}</h1>
						<section className="info">
                            <div class="tech">
                                <h2>TECH</h2>
                                {this.state.tags.map((tag, index) => {
                                    return <h3 key={index}>{tag}</h3>

                                })}
                            </div>
							<div className="description">
								<div className="title-year">
                                    <h2>DESCRIPTION</h2>
                                    <h2>{this.state.year}</h2>
                                </div>
								<p>{this.state.description}</p>
							</div>
						</section>
                        <section class="links">
                            {this.state.links.map((link, index) => {
                                // eslint-disable-next-line react/jsx-no-target-blank
                                return <a key={index} href={link.url} target="_blank" className={`link ${link.classColor}`}>{link.name}</a>
                            })}
                        </section>
					</div>

                    {this.state.images.length ? (
                        <div className="images">
                            {this.getImages().map(path => (
                                <img alt="" key={path} src={path} />
                            ))}
					    </div>
                    ) : (null)}

				</ContentContainer>
			</Main>
		);
	}
}

export default Projects;
