import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProjectGeminiPartnerPortal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		// const {} = this.state;

		return (
			<div className="page page-projects-single">
				<Header route="/ux-projects" />
				<div className="panel panel-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={6}>
								<p className="back"><Link to="/ux-projects">&lsaquo; UX Projects</Link></p>
								<h1>Gemini Partner Portal</h1>
								<div className="title">Customer Portal for Sign Shops</div>
								<p className="date">Project launched in 2022</p>
								<p>The Gemini Partner Portal is a custom logged in area of the geminimade.com website. I built the portal, which launched in Spring of 2022, with a co-worker and as an embedded member of an internal team at Gemini. This project was part of a digital transformation for Gemini and is the first time that they’re providing current information from their internal systems to their customers.</p>
								<p>Within the portal there are also two self-serve quoting tools, <Link to="/projects/gemini-truequote">TrueQuote</Link> and <Link to="/projects/gemini-memorial-designer">Memorial Designer</Link>, which my co-worker and I developed at an earlier time.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel panel-project-single">
					<section>
						<Container>
							<Row>
								<Col xs={12} lg={10} xl={8}>
									<figure>
										<div className="ratio ratio-4x3">
											<iframe src="https://player.vimeo.com/video/706628191?h=453896c132" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
										</div>
										<figcaption></figcaption>
									</figure>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<p>More details coming soon ...</p>
								</Col>
							</Row>
						</Container>
					</section>
				</div>
			</div>
		);
	}
}

export default ProjectGeminiPartnerPortal;
