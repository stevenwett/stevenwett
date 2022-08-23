import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProjectGeminiPartnerPortal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: props.settings,
			projects: props.projects,
		};
	}

	componentDidMount() {
		if (!this.state.settings.debug) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}

	render() {
		// const {} = this.state;

		return (
			<div className="page page-work-single news-on-spotify">
				<Header route="/work" />
				<div className="panel single-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<div className="category">
										<Link to="/work">Work</Link> <span>/</span> UX Case Study
									</div>
									<h1>News on Spotify</h1>
								</div>
								<div className="single-feature">
									<div className="ratio ratio-4x3">
										{/*<iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FayI9htWSBxjK4CtQWnp4BC%2FUX-Design-Final-Case-Study%3Fpage-id%3D0%253A1%26node-id%3D3%253A8%26scaling%3Dscale-down-width" allowFullScreen></iframe>*/}
									</div>
								</div>
								<Row className="single-details">
									<Col xs={12} md={6} className="detail">
										<h2>Roles</h2>
										<p>UX Designer</p>
									</Col>
									<Col xs={12} md={6} className="detail">
										<h2>Software</h2>
										<p>Figma</p>
									</Col>
									<Col xs={12} md={6} className="detail">
										<h2>UX Skills</h2>
										<p>HMW, Sprint Map, Wireframes, Prototypes, User Recruting, User Testing</p>
									</Col>
									<Col xs={12} md={6} className="detail">
										<h2>Year</h2>
										<p>2022</p>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default ProjectGeminiPartnerPortal;
