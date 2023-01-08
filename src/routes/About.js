import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
// import { Link } from 'react-router-dom';

import Header from '../components/Header';

class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: props.settings,
		};
	}

	componentDidMount() {
		if (!this.state.settings.debug) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}

	render() {
		// const {} = this.state;
		const currentYear = moment().year(),
			yearsSince2015 = currentYear - 2015;

		return (
			<div className="page page-about">
				<Header route="/about" />
				<div className="panel intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<div className="content">
									<h1>About</h1>
									<div className="title">Steven Wett</div>
									<p>I'm a UX/UI designer and full-stack web developer based in Atlanta. I have over {yearsSince2015} years of design and development experience and am currently working on a Master's Degree in UX Design at MICA while working full-time at Neuger.</p>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel contact">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									{/*<img className="me" title="Steven Wett" src="/images/steven-wett.jpg" alt="Steven Wett holding ice cream" />*/}
									<article>
										<h2>Work Experience</h2>
										<section>
											<div className="date">2017 - Present</div>
											<h3>Senior Web Developer & UX Designer</h3>
											<p><a href="https://www.linkedin.com/company/276990/admin/">Neuger</a></p>
										</section>
										<section>
											<div className="date">2015 - 2017</div>
											<h3>Web Specialist</h3>
											<p><a href="https://www.linkedin.com/company/276990/admin/">Neuger</a></p>
										</section>
										<section>
											<div className="date">2014 - 2015</div>
											<h3>Technical Assistant</h3>
											<p><a href="https://www.linkedin.com/company/3m/">3M – Abrasive Systems Division</a></p>
										</section>
										<section>
											<div className="date">2013</div>
											<h3>Animation Intern</h3>
											<p><a href="https://www.linkedin.com/company/purisfoods/">Puris</a></p>
										</section>
									</article>
									<article>
										<h2>Education</h2>
										<section>
											<div className="date">2022 - Present</div>
											<h3>Maryland Institute College of Art</h3>
											<p>UX Design (MPS)</p>
										</section>
										<section>
											<div className="date">2011 - 2015</div>
											<h3>St. Olaf College</h3>
											<p>Chemistry (BA)</p>
										</section>
									</article>
									<div className="contacts">
										<a className="contact-linkedin" href="https://linkedin.com/in/stevenwett/" aria-label="LinkedIn">
											<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
												<title>LinkedIn</title>
												<path fill="#ffffff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
											</svg>
										</a>
										<a className="contact-github" href="https://github.com/stevenwett">
											<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
												<title>Github</title>
												<path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
											</svg>
										</a>
										<a className="contact-email" href="mailto:stevenwett@gmail.com">
											<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
												<title>Email</title>
												<path fill="#ffffff" d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"/>
											</svg>
										</a>
									</div>
									{/*<p className="download-resume"><a download href="/files/wett-resume-2020-06-05.pdf">Download my resume</a></p>*/}
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default About;
