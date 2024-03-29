import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
// import { Link } from 'react-router-dom';

import Header from '../components/Header';

import { Helmet } from 'react-helmet';

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
		const current = moment(),
			started = moment([2013]),
			yearsSinceStarted = current.diff(started, 'years');

		const title = 'About | Steven Wett';
		const description = `I'm a UX/UI designer and full-stack web developer based in Atlanta. I've been creating experiences on the web for about ${yearsSinceStarted} years.`;
		const url = 'https://stevenwett.com/about';
		const image = '/images/og-image.png';

		return (
			<>
				<Helmet>
					<title>{title}</title>
					<meta name="description" content={description} />

					<meta property="og:url" content={url} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={description} />
					<meta property="og:image" content={image} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta property="twitter:domain" content="stevenwett.com" />
					<meta property="twitter:url" content={url} />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={description} />
					<meta name="twitter:image" content={image} />
				</Helmet>
				<div className="page page-about">
					<Header route="/about" />
					<div className="panel intro">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8}>
									<div className="content">
										<img className="me" title="Steven Wett" src="/images/steven-wett.jpg" alt="Steven Wett holding ice cream" />
										<h1>About</h1>
										<div className="title">Steven Wett</div>
										<p>I'm a UX/UI designer and full-stack web developer based in Atlanta. I've been creating experiences on the web for about {yearsSinceStarted} years.</p>
										<p>Send me an email if you want to get in touch:<br /><a href="mailto:stevenwett@gmail.com">stevenwett@gmail.com</a></p>
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
										<article>
											<h2>Education</h2>
											<section>
												<div className="icon-wrapper">
													<div className="icon dark">
														<img src="/images/mica-logo.jpg" alt="Maryland Institute College of Art" />
													</div>
												</div>
												<div>
													<h3><a href="https://www.linkedin.com/school/maryland-institute-college-of-art/">Maryland Institute College of Art</a></h3>
													<div className="position">
														<div className="date">Currently Enrolled</div>
														<div className="position-title">Master's Degree (MPS)<span> | UX Design</span></div>
														<p>A 15-month remote program that was taught by industry-leaders.</p>
													</div>
												</div>
											</section>
											<section>
												<div className="icon-wrapper">
													<div className="icon dark">
														<img src="/images/st-olaf-logo.jpg" alt="St. Olaf College" />
													</div>
												</div>
												<div>
													<h3><a href="https://www.linkedin.com/school/stolaf/">St. Olaf College</a></h3>
													<div className="position">
														<div className="date">Graduated 2015</div>
														<div className="position-title">Bachelor's Degree (BA)<span> | Chemistry</span></div>
													</div>
												</div>
											</section>
										</article>
										<article>
											<h2>Experience</h2>
											<section>
												<div className="icon-wrapper">
													<div className="icon">
														<img src="/images/promedia-logo.jpg" alt="ProMedia" />
													</div>
												</div>
												<div>
													<h3><a href="https://www.linkedin.com/company/pro-media-dr/">ProMedia</a></h3>
													<div className="date">2023</div>
													<div className="position">
														<div className="position-title">UX/UI Architect</div>
														<p>Adding design methods to a development team to build software that makes our teams more productive.</p>
													</div>
												</div>
											</section>
											<section>
												<div className="icon-wrapper">
													<div className="icon">
														<img src="/images/neuger-logo.jpg" alt="Neuger" />
													</div>
												</div>
												<div>
													<h3><a href="https://www.linkedin.com/company/neugerteam/">Neuger</a></h3>
													<div className="position">
														<div className="date">2017</div>
														<div className="position-title">Senior Web Developer & UX Designer</div>
														<p>Lead the planning, design and development of custom websites and web apps for clients. </p>
													</div>
													<div className="position">
														<div className="date">2015</div>
														<div className="position-title">Web Specialist</div>
														<p>Developed custom websites for clients.</p>
													</div>
												</div>
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
											{/*<a className="contact-email" href="mailto:stevenwett@gmail.com">
												<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
													<title>Email</title>
													<path fill="#ffffff" d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"/>
												</svg>
											</a>*/}
										</div>
										{/*<p className="download-resume"><a download href="/files/wett-resume-2020-06-05.pdf">Download my resume</a></p>*/}
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</>
		);
	}
}

export default About;
