import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import Slider from "react-slick";

class GeminiPartnerPortal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: props.settings,
			projects: props.projects,
			component: props.component,
		};
	}

	componentDidMount() {
		if (!this.state.settings.debug) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}

	render() {
		const {
			settings,
		} = this.state;
		const title = 'Gemini Partner Portal | Work | Steven Wett';
		const description = 'A customer portal for a manufacturing client where we provided realtime order data to customers for the first time.';
		const url = 'https://stevenwett.com/work/gemini-partner-portal';
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
				<div className="page page-work-single gemini-partner-portal">
					<Header route="/work" />
					<div className="panel single-intro">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<div className="content">
										<Link to="/work" className="back no-line">
											<svg title="Back" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M20.7071 8.97838C21.0976 8.58785 21.0976 7.95469 20.7071 7.56416L14.3431 1.2002C13.9526 0.809679 13.3195 0.809679 12.9289 1.2002C12.5384 1.59073 12.5384 2.22389 12.9289 2.61442L18.5858 8.27127L12.9289 13.9281C12.5384 14.3186 12.5384 14.9518 12.9289 15.3423C13.3195 15.7329 13.9526 15.7329 14.3431 15.3423L20.7071 8.97838ZM0.75 9.27127H20V7.27127H0.75V9.27127Z" fill="#DDAD02"/>
											</svg>
										</Link>
										<div className="category">UX Case Study</div>
										<h1>Gemini Partner Portal</h1>
										<div className="single-feature">
											<div className="ratio ratio-16x9">
												<picture>
													<source srcSet="/images/project-gemini-partner-portal.webp" type="image/webp" />
													<img src="/images/project-gemini-partner-portal.png" alt="Gemini partner portal" />
												</picture>
											</div>
										</div>
										<Row className="single-details">
											<Col xs={12} md={6} className="detail">
												<h2>Role</h2>
												<p>UX/UI Designer & Developer</p>
											</Col>
											<Col xs={12} md={6} className="detail">
												<h2>Software / Languages</h2>
												<p>Figma, PHP, JS, React, HTML, CSS</p>
											</Col>
											<Col xs={12} md={6} className="detail">
												<h2>UX Skills</h2>
												<p>Analytics Review, Content/Functionality Audit, User Journey Mapping, API Planning, Prototyping, Visual Design</p>
											</Col>
											<Col xs={12} md={6} className="detail">
												<h2>Year</h2>
												<p>2022</p>
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
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Background</h2>
									<p>Gemini is North America’s largest manufacturer of made-to-order signage.</p>
									<p>The Partner Portal was part of a digital transformation for Gemini. This case study focuses on a project to provide realtime quote and order status information to their 10,000+ customer accounts.</p>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>The problem</h2>
									<p>In 2021, Gemini came to my team with a request to improve their customer portal. Their previous system was:</p>
									<ul>
										<li>Expensive for them to maintain</li>
										<li>In a confusing content management system</li>
										<li>Disconnected from their new website, and</li>
										<li>Lacked integration with their internal systems</li>
									</ul>
									<p>Gemini’s customers could not see their full quote history or their current order status. My team and I designed a personalized logged-in portal for <strong>customers to view their entire interaction history and see quotes and orders from Gemini’s internal systems</strong>.</p>
									<p>During this project, we hoped to address this question 🧐:</p>
									<article className="callout hmw">
										<svg viewBox="0 0 14 23" height="14" width="23" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.0387 6.55506C13.0884 8.00255 12.6684 9.42666 11.8424 10.6163C11.0165 11.807 9.82775 12.6976 8.45435 13.157C8.45435 13.157 8.25747 13.2264 8.25747 13.3417V14.9139C8.25747 16.0032 7.37434 16.8864 6.28496 16.8864C5.19558 16.8864 4.31245 16.0032 4.31245 14.9139V13.3417C4.32182 12.4689 4.60496 11.6214 5.12151 10.9172C5.63806 10.2141 6.36183 9.69 7.19245 9.42C8.36526 9.02532 9.14058 7.90687 9.09745 6.66936C9.01307 5.15904 7.77464 3.97128 6.26161 3.95064C5.18722 3.95533 4.21222 4.57502 3.75097 5.54438C3.27752 6.52594 2.09816 6.93751 1.11649 6.465C0.134936 5.99155 -0.27664 4.81219 0.195872 3.83052C0.740552 2.68865 1.59555 1.72303 2.66331 1.04532C3.73206 0.367512 4.96957 0.00564 6.23427 0H6.28021C8.03427 0.0121877 9.71605 0.70032 10.9751 1.92094C12.2342 3.14249 12.9729 4.8019 13.0385 6.5551L13.0387 6.55506ZM8.26772 20.7986C8.26772 19.997 7.78491 19.2751 7.04521 18.9676C6.30459 18.6611 5.4524 18.8289 4.88521 19.3951C4.31802 19.9614 4.14647 20.8136 4.45208 21.5542C4.7577 22.2948 5.47863 22.7795 6.28021 22.7814C6.80615 22.7814 7.31147 22.5733 7.68459 22.2011C8.05679 21.8298 8.26679 21.3255 8.26772 20.7986V20.7986Z" fill="#fff"/>
										</svg>
										<h3>How Might We ...</h3>
										<p>How might we provide Gemini customers with up-to-date information so that they can know the the status of their project?</p>
									</article>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Audience</h2>
									<p>The primary audience for this project was a Gemini signage customer.</p>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Roles & responsibilities</h2>
									<p><strong>I co-lead the design and development for this project.</strong> My team consisted of myself, a project manager, another UX designer, a content strategist and an art director.</p>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Project scope</h2>
									<p>Gemini came to us with this project as a request for proposal. We established a budget and timeline that included time for discovery, testing, implementation, quality assurance and launch.</p>
									<p>The proposal was approved by Gemini and we were constrained by the timeline and the budget.</p>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Reviews & audits</h2>
									<p>First off, we wanted to understand how users were using the old system and what content and features were currently there.</p>
									<h3>Analytics Review</h3>
									<p>I conducted an analytics review and presented it to the client. My review outlined the user behavior on the old portal to understand current user trends.</p>
									<h3>Content & Functionality Audits</h3>
									<p>We did a functionality and content audit of the old portal. These audits made it easier to discuss with the client what content and features should remain.</p>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Planning</h2>
									<p>This project involved migrating users and complex features, so we needed a solid plan.</p>
									<h3>Content Plan</h3>
									<p>I put together a content plan for the new portal with our content strategist. The plan outlined page hierarchy and contained details such as the URL structure, content needs, the purpose and calls to action for each page.</p>
									<h3>Onboarding Plan</h3>
									<p>Transitioning 15,000+ users from the legacy system to the new system involved careful planning. We mapped out the complete system to ensure a successful migration. <strong>This service diagram helped the client understand the process with more confidence.</strong></p>
									<figure className="image-full">
										<picture>
											<source srcSet="/images/gemini-login-service-diagram.webp" type="image/webp" />
											<img src="/images/gemini-login-service-diagram.jpg" alt="A service diagram of the customer login process" />
										</picture>
										{/*<figcaption>A service diagram outlining the customer onboarding process (obscured)</figcaption>*/}
									</figure>
									<article className="callout">
										<h3>API Planning</h3>
										<p>This project involved communicating with the client’s internal data systems — something that Gemini had never done before.</p>
										<p><strong>We worked closely with Gemini’s IT team and created detailed API documentation for each of the endpoints.</strong> Our teams created a custom RESTful API exclusively for this project to get data from Gemini’s internal systems.</p>
									</article>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Prototyping</h2>
									<h3>Wireframes</h3>
									<p>I developed a series of low- and mid-fidelity prototypes to step through the process with the client before getting into code. <strong>These prototypes helped us discuss major actions and functionality with the client so that we could focus on the user’s goals.</strong></p>
									<p>We worked with the client for several weeks to finalize the wireframes. Our teams discussed priorities, user goals and what functionality was possible given our infrastructure constraints.</p>
									<Slider {...settings.slideshow}>
										<div>
											<picture>
												<source srcSet="/images/partner-portal-wireframe-1.webp" type="image/webp" />
												<img src="/images/partner-portal-wireframe-1.jpg" alt="Dashboard wireframe" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/partner-portal-wireframe-2.webp" type="image/webp" />
												<img src="/images/partner-portal-wireframe-2.jpg" alt="Orders wireframe" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/partner-portal-wireframe-3.webp" type="image/webp" />
												<img src="/images/partner-portal-wireframe-3.jpg" alt="Quotes wireframe" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/partner-portal-wireframe-4.webp" type="image/webp" />
												<img src="/images/partner-portal-wireframe-4.jpg" alt="Account wireframe" />
											</picture>
										</div>
									</Slider>
									<h3>Visual Design</h3>
									<p>I worked with our art director to apply branding to the wireframes to create high-fidelity prototypes. We followed Gemini's existing brand guide.</p>
									<p>In subsequent meetings with Gemini I tweaked the visual design and adjusted components until the client was satisfied.</p>
									<Slider {...settings.slideshow}>
										<div>
											<picture>
												<source srcSet="/images/partner-portal-screenshot-1.webp" type="image/webp" />
												<img src="/images/partner-portal-screenshot-1.jpg" alt="Dashboard screenshot" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/partner-portal-screenshot-2.webp" type="image/webp" />
												<img src="/images/partner-portal-screenshot-2.jpg" alt="Orders screenshot" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/partner-portal-screenshot-3.webp" type="image/webp" />
												<img src="/images/partner-portal-screenshot-3.jpg" alt="Quotes screenshot" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/partner-portal-screenshot-4.webp" type="image/webp" />
												<img src="/images/partner-portal-screenshot-4.jpg" alt="Account screenshot" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/partner-portal-screenshot-5.webp" type="image/webp" />
												<img src="/images/partner-portal-screenshot-5.jpg" alt="Account screenshot" />
											</picture>
										</div>
									</Slider>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Outcomes & lessons</h2>
									<p>To alleviate pressures on Gemini’s customer service team, we launched this project to Gemini’s customers in a stepwise approach over the course of three weeks. This also allowed for us to test the load and make performance enhancements as more customers were onboarding.</p>
									<p>The stepped onboarding process went smoothly and <strong>over 8,000 individuals onboarded successfully to the new system and activated their accounts within the first month.</strong> We also took this opportunity for customers to update their information and provide new and clean data for Gemini 👏.</p>
									<p><strong>Signage customers are now able to see their Gemini quote and order statuses.</strong></p>
									<article className="callout stat">
										<h3>🎉 18k+ users</h3>
										<p>onboarded within 30 weeks</p>
									</article>
									<h3>Partner Portal Demo</h3>
									<div className="image-full ratio ratio-16x9">
										<iframe title="Partner Portal Demo" src="https://player.vimeo.com/video/704705719?h=61139a7c5e&badge=0&autopause=0&player_id=0&app_id=58479/embed" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen frameBorder="0"></iframe>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Next steps</h2>
									<p>This portal contains a quoting web app called TrueQuote that my team previously built for Gemini. <strong>The next steps would be to further integrate the quoting tool into their internal systems.</strong></p>
									<p>Now that we have a connection in place with Gemini’s internal systems, we have additional opportunities 🚀.</p>
									<p>Some next steps include:</p>
									<ul>
										<li>Allow users to download PDFs for quote and orders</li>
										<li>Improve how customers can reach out to support</li>
										<li>Enhance the self-serve quoting tool</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<article className="callout">
										<h2>Accessibility</h2>
										<p>Because I also coded the project, I am very familiar with how accessibility can directly affect a website or web app. <strong>We adhered to a WCAG 2.1 AA standard for this project, even though the client wasn’t legally required to do so.</strong> This is because one of my core values is that the web should be accessible to as many types of people as possible.</p>
									</article>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8}>
									<div className="content">
										<Link to="/work/" className="btn btn-outline-primary back-button">
											<svg title="Back" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M20.7071 8.97838C21.0976 8.58785 21.0976 7.95469 20.7071 7.56416L14.3431 1.2002C13.9526 0.809679 13.3195 0.809679 12.9289 1.2002C12.5384 1.59073 12.5384 2.22389 12.9289 2.61442L18.5858 8.27127L12.9289 13.9281C12.5384 14.3186 12.5384 14.9518 12.9289 15.3423C13.3195 15.7329 13.9526 15.7329 14.3431 15.3423L20.7071 8.97838ZM0.75 9.27127H20V7.27127H0.75V9.27127Z" fill="#DDAD02"/>
											</svg>
											All Projects
										</Link>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					{/*<div className="panel single-work-after">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8}>
									<div className="content">
										<Link to="/work/gemini-memorial-designer" className="next-work">Gemini Memorial Designer</Link>
									</div>
								</Col>
							</Row>
						</Container>
					</div>*/}
				</div>
			</>
		);
	}
}

export default GeminiPartnerPortal;
