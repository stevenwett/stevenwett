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
			<div className="page page-work-single news-on-spotify">
				<Header route="/work" />
				<div className="panel single-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<div className="category">
										<Link to="/work">Work</Link> <span>/</span> Website
									</div>
									<h1>Riggs Cat</h1>
									<div className="single-feature">
										<div className="ratio ratio-4x3">
											<picture>
												<img src="/images/project-riggs-cat.jpg" alt="Riggs Cat screenshot" />
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
								<p>Riggs Cat is an equipment dealer in Arkansas. They had an outdated website that was difficult to navigate for customers. They also wanted to display equipment that Caterpillar had available via an API alongside their own equipment.</p>
								<p>To solve these two problems, my team and I planned and implemented a new website.</p>
								<a className="btn btn-outline-primary no-line" href="https://riggscat.com">Visit riggscat.com</a>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel single-work-after">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<Link to="/work/gemini-partner-portal" className="next-work no-line">Partner Portal</Link>
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
