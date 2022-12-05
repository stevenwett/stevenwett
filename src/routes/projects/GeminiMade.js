import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RiggsCat extends React.Component {
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
			<div className="page page-work-single geminimade">
				<Header route="/work" />
				<div className="panel single-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<div className="category">
										Website
									</div>
									<h1>Gemini</h1>
									<div className="single-feature">
										<div className="ratio ratio-4x3">
											<picture>
												<img src="/images/project-geminimade.jpg" alt="Gemini website screenshot" />
											</picture>
										</div>
									</div>
									<Row className="single-details">
										<Col xs={12} md={6} className="detail">
											<h2>Roles</h2>
											<p>UX Designer, Full Stack Developer</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>Software / Languages</h2>
											<p>Sketch, PHP, JS, HTML, CSS</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>UX Skills</h2>
											<p>Content Audit, Content Plan, Wireframes, Design System, Visual Design</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>Year</h2>
											<p>2020</p>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Overview</h2>
								<p>Gemini is North America's largest manufacturer of signage for building exteriors, internal signage and wayfinding, plaques and more. In addition to signage, they have other brands such as Gemstar and Duets that sell to separate customer segments.</p>
								<p>Each of Gemini's brands had it's own website with no overarching website to connect them. This was a problem especially for the lesser known brands because it was hard to trust them as being part of a larger company. In addition, there were similar features on each website that could be consolidated. My team and I designed and developed the <a href="https://geminimade.com">geminimade.com</a> website to be an umbrella website for all of Gemini's brands. We built this website as a platform to centralize shared functionality such as careers, support, and news.</p>
								<p>Within the geminimade.com website, we designed and built a new site for Gemini Signage – their largest brand. We later used this new platform to build the <Link to="/work/gemini-partner-portal">Partner Portal</Link> for customers to view their quotes and orders.</p>
								<a className="btn btn-outline-primary no-line" href="https://geminimade.com">Visit geminimade.com</a>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel single-work-after">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<Link to="/work/gemini-partner-portal" className="next-work no-line">Partner Portal UX Case Study</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default RiggsCat;
