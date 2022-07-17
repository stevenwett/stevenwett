import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

class ProjectGeminiTrueQuote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		return (
			<div className="page page-projects-single">
				<Header route="/ux-projects" />
				<div className="panel panel-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={6}>
								<p className="back"><Link to="/ux-projects">&lsaquo; UX Projects</Link></p>
								<h1>Gemini TrueQuote</h1>
								<div className="title">Web App for Quoting Signs</div>
								<p className="date">Project launched in 2017</p>
								<p>TrueQuote is a web app that is within the <Link to="/projects/gemini-partner-portal">Gemini Partner Portal</Link> and is used by signage industry customers to quote and order products from the manufacturer. This project was launched in 2017 and I have been doing periodic upgrades, including porting it to a new server environment in 2022.</p>
								<p>As of July 2022, the app is available to over 40,000 customers and around 400 quotes are created per day.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel panel-project-single">
					<section>
						<Container>
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

export default ProjectGeminiTrueQuote;
