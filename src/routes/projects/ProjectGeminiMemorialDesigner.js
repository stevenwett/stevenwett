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
				<Header route="/projects" />
				<div className="panel panel-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={6}>
								<p className="back"><Link to="/projects">&lsaquo; Projects</Link></p>
								<h1>Gemini Memorial Designer</h1>
								<div className="subtitle">Visual Designer App For Bronze Memorial Plaques</div>
								<p>The Gemini Memorial Designer is a proprietary app that helps people in the monument builder industry quickly design and order bronze plaques for the memorials they build. I, along with two team members, created an app for our client, Gemini, that met their customer’s needs.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel panel-project-single">
					<section>
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>User Interviews</h2>
									<p>In order to determine the end user’s needs, my team and I conducted user interviews.</p>
									<ul>
										<li>Two Gemini employees who are stakeholders</li>
										<li>Four monument builders who will ultimately be using the product</li>
									</ul>
									<p>I then analyzed the information that we gained from all of the interviews and used those data to help inform the wireframes.</p>
								</Col>
							</Row>
						</Container>
					</section>
					<section>
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>Interactive Wireframes</h2>
									<p>I developed a series of interactive wireframes to step through the process before starting with code. High-fidelity wireframes such as these using Sketch helped me and the clients talk about high-level ideas and work on strategy early on in the process.</p>
									{/*Video*/}
								</Col>
							</Row>
						</Container>
					</section>
					<section>
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>React/Redux Implementation and Accessibility</h2>
									<p>Along with another developer, we built this app using a React/Redux architecture. We saved projects to a MySQL database using custom endpoints via the WordPress REST API. The options of this app are updatable in WordPress.</p>
									<p>Web accessibility is very important to me and throughout this project I adhered to WCAG 2.0 AA standards. This means that I wrote HTML semantically, added ARIA labels when needed, made sure colors were properly contrasty and more.</p>
								</Col>
							</Row>
						</Container>
					</section>
					<section>
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>User Authentication and Foundation for the Future</h2>
									<p>I developed a Firebase Auth integration that allowed for users to authenticate using an email and password, which gave them access to create projects and save them to their account. I built this integration using PHP and saved their logged in status using PHP Sessions.</p>
									<p>This authentication system served another purpose. The client had an upcoming project that also required an authenticated session, so I developed it with the future project in mind. This auth system as of June 2022 is the backbone of their Partner Portal that has over 2,000 active users.</p>
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
