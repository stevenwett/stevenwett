import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProjectGeminiMemorialDesigner extends React.Component {
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
								<h1>NorthfieldWiFi</h1>
								<div className="title">A Simplified Website for a Small Internet Service Provider</div>
								<p className="date">Project completed in 2019</p>
								<p>NorthfieldWiFi is an independent internet service provider (ISP) that supports rural communities with coverage in southern Minnesota and western Wisconsin. The client’s last website was clumsy for the end user and was overall a poor experience. A team member and I designed and created a new and simple website.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel panel-project-single">
					<section>
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>Understanding Priorities</h2>
									<p>The first step my team and I took for this project was to identify the business goals and the users who will be using the site. In this case, the major business goals were to:</p>
									<ul>
										<li>Get new customers to sign up, and to;</li>
										<li>Make it easy for existing customers to get support</li>
									</ul>
									<p>I created user personas for new and existing customers.</p>
								</Col>
							</Row>
						</Container>
					</section>
				</div>
			</div>
		);
	}
}

export default ProjectGeminiMemorialDesigner;
