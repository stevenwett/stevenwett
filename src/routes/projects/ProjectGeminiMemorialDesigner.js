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
								<h1>Gemini Memorial Designer</h1>
								<div className="title">Web App for Designing Bronze Plaques</div>
								<p className="date">Project launched in 2020</p>
								<p>Memorial Designer is a web app that I built for a client, Gemini, who is a signage manufacturer in the US. The app is for Gemini's customers in the monument builder industry and is within their <Link to="/projects/gemini-partner-portal">Partner Portal</Link>. The purpose of the app is to let users quickly design and order bronze plaques for the memorials they build. I was the lead developer and designed and developed this app with co-workers and the client.</p>
								<h2>Overview</h2>
								<ul>
									<li><a href="#interviews">User interviews</a></li>
									<li><a href="#prototypes">Prototypes</a></li>
									<li><a href="#designs">Interactive designs</a></li>
									<li><a href="#user-testing">User testing</a></li>
									<li><a href="#development">Development</a></li>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel panel-project-single">
					<section id="interviews">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>User Interviews</h2>
									<p>Starting the project, we thought we knew the needs of the end users, but wanted to validate our assumptions. My co-worker and I developed an interview guide and conducted six user interviews.</p>
									<p>Users interviewed:</p>
									<ul>
										<li>Two Gemini employees</li>
										<li>Four monument builders who will be using this product</li>
									</ul>
									<p>I analyzed the data we gather and used them to inform the prototypes.</p>
								</Col>
							</Row>
						</Container>
					</section>
					<section id="prototypes">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>Prototypes</h2>
									<p>I developed a series of interactive wireframes to step through the process before getting into code. High-fidelity wireframes using Sketch helped focus the client on high-level strategy early on in the process.</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} lg={10} xl={8}>
									<figure className="vimeo-embed">
										<div className="ratio ratio-4x3">
											<iframe src="https://player.vimeo.com/video/717094518?h=997d989336" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Wireframes | Gemini Memorial Designer"></iframe>
										</div>
										<figcaption>Prototypes for the Gemini Memorial Designer</figcaption>
									</figure>
								</Col>
							</Row>
						</Container>
					</section>
					<section id="designs">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>Interactive Designs</h2>
									<p>I created designs using Sketch for each of the views. For the designs I added color and more details. First designing in Sketch helped save time when deciding on the overall look and feel of the app.</p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} lg={10} xl={8}>
									<figure className="vimeo-embed gemini-design">
										<div className="ratio ratio-4x3">
											<iframe src="https://player.vimeo.com/video/717096563?h=f39a5f521c" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Design | Gemini Memorial Designer"></iframe>
										</div>
										<figcaption>A recording of the Gemini Memorial Designer</figcaption>
									</figure>
								</Col>
							</Row>
						</Container>
					</section>
					<section id="user-testing">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>User Testing</h2>
									<p>I conducted user tests with Gemini customers in the Monument Builder industry with a coworker. In these tests we instructed the users to create two different memorials using the Memorial Designer interactive designs. We asked that the users act as if we were a client and we gave them minimal instructions for how to complete the task. During this time, we recorded their comments and actions.</p>
									<p>Users:</p>
									<ul>
										<li>Three monument builders who will be using this product</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</section>
					<section id="development">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>Development</h2>
									<h3>React / Redux Web App</h3>
									<p>Along with another developer, I built this app using a React/Redux architecture. Projects were saved to a MySQL database using custom endpoints via the WordPress REST API. The available options of this app are updatable in WordPress by the admin.</p>
									<h3>Web Accessibility</h3>
									<p>Web accessibility is very important to me and throughout this project I adhered to WCAG 2.0 AA standards. This means that I wrote HTML semantically, added ARIA labels when needed, made sure colors were properly contrasty and more.</p>
									<h3>User Authentication</h3>
									<p>I developed a Firebase Auth integration that allowed for users to authenticate using an email and password, which gave them access to create projects and save them to their account. I built this integration using PHP and saved their logged in status using PHP Sessions.</p>
									<p>This authentication system served another purpose. The client had an upcoming project that also required users to have accounts, so I developed it with the future project in mind. This auth system as of June 2022 is the backbone of their Partner Portal that has over 6,000 active users.</p>
									<p className="back end-back"><Link to="/ux-projects">&lsaquo; Back to UX Projects</Link></p>
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
