import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Slider from "react-slick";

class ProjectGeminiPartnerPortal extends React.Component {
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

		return (
			<div className="page page-work-single gemini-partner-portal">
				<Header route="/work" />
				<div className="panel single-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<div className="category">
										<Link to="/work">Work</Link> <span>/</span> UX Case Study
									</div>
									<h1>Partner Portal</h1>
									<div className="single-feature">
										<div className="ratio ratio-16x9">
											<iframe src="https://player.vimeo.com/video/706628191?h=453896c132" width="960" height="540" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Video preview of the Partner Portal"></iframe>
										</div>
									</div>
									<Row className="single-details">
										<Col xs={12} md={6} className="detail">
											<h2>Roles</h2>
											<p>UX Designer, Full Stack Developer</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>Software / Languages</h2>
											<p>Figma, PHP, JS, React, HTML, CSS</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>UX Skills</h2>
											<p>Analytics Review, Personas, Content & Functionality Audits, User Journey Map, Design Patterns, Wireframes, Prototypes, Visual Design</p>
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
							<Col xs={12} md={10} lg={8}>
								<a className="gemini-logo no-line" href="https://geminimade.com">
									<img src="/images/gemini-logo.jpg" alt="Gemini logo" />
								</a>
								<h2>Overview</h2>
								<p>Gemini had an existing customer portal on a legacy system that was expensive for them to maintain, in a confusing content management system, disconnected from their new geminimade.com website, and lacked integration with their internal systems. With this project, we set out to solve all of these problems. The plan was to implement the new partner portal in WordPress and to build integrations that would allow for real-time data for their customers.</p>
								<p>This project was part of a digital transformation for Gemini and is the first time that they will provide current information from their internal systems to their customers.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Problem Statement</h2>
								<p>Gemini has a fragmented quoting system because customers can create quotes for themselves in the Partner Portal, and they can also call in and create quotes with Gemini. Customers could only see the quotes that they created online but didn’t have visibility to any quotes from Gemini’s internal systems. For this project, we set out to design a way for customers to view their entire interaction history with Gemini and see quotes and orders from Gemini’s internal systems.</p>
								<blockquote>
									<p>How might we provide Gemini customers with up-to-date information so that they can know the current status of their quotes and orders?</p>
								</blockquote>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Users and Audience</h2>
								<p>The primary audience for this project was a Gemini signage customer.</p>
								<p>Gemini has other customer segments who will also have visibility to the new portal, but the majority of Gemini’s customers are in the signage industry. We created user personas during our geminimade.com website project and utilized these personas for this project as well. In the personas we determined goals, needs, and behaviors of each customer type.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Roles and Responsibilities</h2>
								<p>I co-lead the design and development for this project. My team consisted of myself, a project manager, another UX designer, a content strategist, and an art director.</p>
								<p>The Gemini team also played a large part in developing a bridge between their internal systems and the website. This project also affected their customer support and sales teams so they coordinated internal training themselves.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Scope and Constraints</h2>
								<p>Gemini came to us with this project as a request for proposal. We established a budget and timeline that included time for discovery, testing, implementation, quality assurance and launch. The proposal was approved by Gemini and we were constrained by the timeline and the budget.</p>
								<p>This project was also constrained by the IT and technical resources on Gemini’s end. In order to get real-time information from Gemini’s systems they needed to create a bridge between their internal systems and the website.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Process</h2>
								<h3>Analytics Review</h3>
								<p>To better understand how customers were using the old portal, I conducted an analytics review and presented it to the client. In this review, I explained the overall user behavior, user location, and current online quoting usage.</p>
								<h3>Functionality and Content Audits</h3>
								<p>Gemini already had a customer portal on their old website and we needed to decide what should stay and what should be removed. We did a full functionality and content audit of the old portal. This audit made it easier to discuss with the client what content and features should remain.</p>
								<h3>Getting Data from Internal Systems</h3>
								<p>This project involved communicating with Gemini’s internal data systems, something that Gemini had never done before. I worked closely with their internal IT team and created detailed documentation for each of the endpoints we needed to provide current information to the customer. We worked with Gemini's team to custom API exclusively for this project to get data from Gemini’s internal systems.</p>
								<h3>Customer Journey</h3>
								<p>We used insights from the analytics review and audits to establish the overall process of the user for the new portal. This journey included details for the one-time onboarding from the old system to the new, where the user would create an new individual login.</p>
								<figure className="image-full">
									<picture>
										<img src="/images/gemini-journey-map.jpg" alt="An obscured customer user flow" />
									</picture>
									<figcaption>The customer user flow (obscured)</figcaption>
								</figure>
								<h3>Content Plan</h3>
								<p>Using the content audit and the client planning meetings, I created a working document to outline the content structure of the new portal. This content plan outlined the page hierarchy and contained details such as the URL structure, content needs, the purpose, and calls to action for each page. I worked alongside my coworker who is a content strategist to create this plan.</p>
								<h3>Customer Onboarding Plan</h3>
								<p>We developed flow charts to outline all of the different actions within the customer portal. The most complicated processes were onboarding from the old system to the new system and creating a way for a user to easily and securely sign into the new portal. These flow charts helped us and the client understand the process with more confidence.</p>
								<figure className="image-full">
									<picture>
										<img src="/images/gemini-login-service-diagram.jpg" alt="A service diagram of the customer login process" />
									</picture>
									<figcaption>A service diagram outlining the customer onboarding process (obscured)</figcaption>
								</figure>
								<h3>Prototyping</h3>
								<p>I developed a series of low-fidelity wireframes to step through the process before getting into code. These wireframes helped us discuss major actions and functionality with the client so that we could focus on the user’s goals.</p>
								<p>We worked with the client for several weeks to finalize the wireframes. Our teams discussed priorities, user goals, and what functionality was possible given our infrastructure constraints.</p>
								<Slider {...settings.slideshow}>
									<div>
										<picture>
											<img src="/images/partner-portal-wireframe-1.jpg" alt="Dashboard wireframe" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/partner-portal-wireframe-2.jpg" alt="Orders wireframe" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/partner-portal-wireframe-3.jpg" alt="Quotes wireframe" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/partner-portal-wireframe-4.jpg" alt="Account wireframe" />
										</picture>
									</div>
								</Slider>
								<h3>Visual Design</h3>
								<p>I worked with our art director to apply branding to the wireframes to create high-fidelity visual designs. We followed Gemini's existing brand guide.</p>
								<p>In subsequent meetings with Gemini I tweaked the visual design and adjusted components until the client was satisfied.</p>
								<Slider {...settings.slideshow}>
									<div>
										<picture>
											<img src="/images/partner-portal-screenshot-1.jpg" alt="Dashboard wireframe" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/partner-portal-screenshot-2.jpg" alt="Orders wireframe" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/partner-portal-screenshot-3.jpg" alt="Quotes wireframe" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/partner-portal-screenshot-4.jpg" alt="Account wireframe" />
										</picture>
									</div>
								</Slider>
								<h3>Design Patterns</h3>
								<p>In 2020, I worked on a project for Gemini to create the website geminimade.com. Gemini had an existing brand guide, but it didn’t include a full design system for the web. During that project I helped develop a series of design patterns to be used across the new website. I used the design patterns for the new portal visual design and created a couple new patterns too.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Outcomes and Lessons</h2>
								<p>This project successfully launched in the Spring of 2022. We achieved our goal of allowing for customers to view their total quote and order history in real time.</p>
								<p>To alleviate pressures on Gemini’s customer service team, we launched this project to Gemini’s customers in a stepwise approach over the course of three weeks. This also allowed for us to test the load and make performance enhancements as more customers were onboarding.</p>
								<p>The stepped onboarding process went smoothly and over 8,000 individuals onboarded successfully to the new system and activated their accounts within the first month. We also took this opportunity for customers to update their information and provide new and clean data for Gemini.</p>
								<blockquote>
									<p>In July 2022, three months after the launch, 14,183 users have created accounts.</p>
								</blockquote>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Next Steps</h2>
								<p>This portal contains a quoting web app called TrueQuote that we built for Gemini. The next steps would be to further integrate this quoting tool into their internal systems. While it is a big improvement for customers to have full visibility of quotes, there are still several kinds of quotes in their account, which could be confusing.</p>
								<p>Also, now that we have a connection in place with Gemini’s internal systems, we have additional opportunities. Another next step would be to download PDFs of quotes and orders directly from Gemini’s internal systems. This would allow for a more consistent experience for the customer.</p>
								<blockquote>
									<p>My team and I continue to work with Gemini on ongoing improvements.</p>
								</blockquote>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Accessibility</h2>
								<p>Because I also coded the project, I am very familiar with how accessibility can directly affect a website or web app. I adhered to a WCAG 2.1 AA standard for this project, even though the client wasn’t legally required to do so. This is because one of my core values is that the web should be accessible to as many types of people as possible.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel single-work-after">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<Link to="/work/gemini-memorial-designer" className="next-work">Memorial Designer</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

export default ProjectGeminiPartnerPortal;
