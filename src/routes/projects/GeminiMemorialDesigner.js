import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Slider from "react-slick";

class ProjectGeminiMemorialDesigner extends React.Component {
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
			<div className="page page-work-single gemini-memorial-designer">
				<Header route="/work" />
				<div className="panel single-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<div className="category">
										<Link to="/work">Work</Link> <span>/</span> UX Case Study
									</div>
									<h1>Memorial Designer</h1>
									<div className="single-feature">
										<div className="ratio ratio-16x9">
											<picture>
												<img src="/images/memorial-designer-screenshot-3.jpg" alt="Memorial designer screenshot" />
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
											<p>Sketch, PHP, JS, React, HTML, CSS</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>UX Skills</h2>
											<p>Interview Guide, User Interviews, Competitive Analysis, Service Diagrams, Wireframes, Prototypes, Usability Tests, Visual Design</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>Year</h2>
											<p>2021</p>
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
								<a className="gemini-logo no-line" href="https://geminibronze.com">
									<img src="/images/gemini-logo-memorials.jpg" alt="Gemini logo" />
								</a>
								<h2>Overview</h2>
								<p>The Gemini Memorial Designer is a web app that my team designed and built for a client. The client, Gemini, is North America’s largest manufacturer of signage. We have a long-standing relationship with Gemini and they came to us with a request for proposal to explore how they might create an online design tool for their customers in the memorials industry.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Problem Statement</h2>
								<p>Gemini has been around for nearly sixty years and has multiple foundries for making plaques. They have mainly focused their efforts on their signage customer segments and haven’t established a strong foothold with monument builders in the memorials industry. Their monument builder customers like working with Gemini for signage because of Gemini’s great quality and customer service, however, Gemini doesn’t currently have a way for them to quickly design and order bronze memorials.</p>
								<blockquote>
									<p>How might we help monument builder customers design and order a bronze plaque quickly in order to help them finalize a sale with the end client?</p>
								</blockquote>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<figure className="image-full">
									<picture>
										<img src="/images/foundary-photo-with-plaque.jpg" alt="An example plaque" />
									</picture>
									<figcaption>An example of a memorial bronze plaque</figcaption>
								</figure>
								<h2>Users and Audience</h2>
								<p>The primary audience for this project was a designer within the monument builder industry.</p>
								<p>The monument builder industry is composed of small businesses that design and create memorials for people’s loved ones. They work with granite and occasionally a project will require a bronze plaque, which is when they would work with Gemini.</p>
								<p>We found that monument builders require a way to design a memorial quickly alongside their customers so that they can instantly show options and save the project before the customer leaves the store. This is because monument builders are mostly brick-and-mortar small businesses who may be time constrained and might not have the time to follow up with a customer or attempt to design over the phone.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Roles and Responsibilities</h2>
								<p>I co-lead the design and development for this project and worked closely on a team and with Gemini, the client. My team consisted of myself, a project manager, another UX designer, and an art director.</p>
								<p>The Gemini team also played a part in recruiting people to interview, understanding the industry, and developing art assets for the designer.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Scope and Constraints</h2>
								<p>My team gathered information from the client and assembled a sales proposal. We established a budget and timeline that included time for discovery, testing, implementation and quality assurance. The proposal was approved by Gemini and we were constrained by the timeline and the budget.</p>
								<p>One aspect of this project was to create photorealistic renderings of the final product. Gemini’s internal layout team was tasked with creating these assets. Their internal layout team’s time was also a constraint on the timeline of this project.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Process</h2>
								<h3>User Research</h3>
								<p>We recruited existing Gemini customers in this user segment; customers who trust them with signage, but only occasionally purchase memorial plaques from them. We also recruited some internal Gemini staff with a deep knowledge of the industry. Along with my coworker, I conducted a total of six user interviews and gained crucial knowledge about the industry.</p>
								<ul>
									<li>Two Gemini employees</li>
									<li>Four people in the monument builder industry</li>
								</ul>
								<h3>Competitive Analysis</h3>
								<p>Gemini provided us with a list of names and logins to the existing tools of their competitors. My coworker and I investigated and assembled a competitive analysis to see how others were accomplishing this goal. We came up with the opportunities and threats of this new product to see where Gemini fit into the landscape.</p>
								<h3>Information Architecture</h3>
								<p>We met with Gemini over the series of weeks to fully understand the information that was needed for production of the memorial product. I created a content plan to organize the information.</p>
								<h3>Customer Journey</h3>
								<p>Now that we had an idea of what information we needed to collect, we were able to propose a user flow chart to capture the customer’s journey. This map helped us identify the complete process of the user. The service diagram is a redacted example of the user’s steps, when transactional emails are sent, and actions taken by Gemini.</p>
								<figure className="image-full">
									<picture>
										<img src="/images/gemini-bronze-service-diagram.jpg" alt="Customer journey map" />
									</picture>
									<figcaption>A monument builder customer journey service diagram</figcaption>
								</figure>
								<h3>Design Patterns</h3>
								<p>I grouped the data we needed to collect into similar groupings and identified the control types that would be best to collect the information. The use of design patterns, especially for control types, allowed for the prototype, and ultimately the design, to be consistent and more intuitive for the user.</p>
								<h3>Prototyping</h3>
								<p>I first created a series of low-fidelity wireframes that followed the customer journey to identify the major actions that the user needed to take. These prototypes were helpful for the client to understand for the first time how the user would use the product. We were able to have more constructive conversations of priorities and the user flow.</p>
								<Slider {...settings.slideshow}>
									<div>
										<picture>
											<img src="/images/memorial-designer-wireframe-1.jpg" alt="Low-fidelity wireframe first screen" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/memorial-designer-wireframe-2.jpg" alt="Low-fidelity wireframe second screen" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/memorial-designer-wireframe-3.jpg" alt="Low-fidelity wireframe third screen" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/memorial-designer-wireframe-4.jpg" alt="Low-fidelity wireframe fourth screen" />
										</picture>
									</div>
								</Slider>
								<h3>Usability Testing</h3>
								<p>We met with the monument builder customers again and had them follow a guided scenario with specific tasks to complete. My coworker and I did three usability tests remotely where we had the customer share their screen and talk to us as they clicked through the wireframes.</p>
								<p>After conducting the test, I updated the wireframes to fix many of the usability issues that we had found. One component that we removed during the iterative updates was the element options panel – where users could have another way to control emblems – because it wasn’t especially helpful. Originally we included it as the competitors also had it, but moving forward, we chose to remove it because we found it was overly complex during user testing.</p>
								<h3>Visual Design</h3>
								<p>I worked with our art director to use Gemini’s existing brand guidelines for the visual design of the app. The brand guidelines don’t have explicit details for web components so I developed design patterns based on the <a href="geminimade.com">geminimade.com</a> website.</p>
								<p>Gemini was pleased with the clean and consistent design that followed Gemini branding. They were ultimately more focused on functionality and quickly approved the work.</p>
								<Slider {...settings.slideshow}>
									<div>
										<picture>
											<img src="/images/memorial-designer-screenshot-1.jpg" alt="Memorial designer first screen" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/memorial-designer-screenshot-2.jpg" alt="Memorial designer second screen" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/memorial-designer-screenshot-3.jpg" alt="Memorial designer third screen" />
										</picture>
									</div>
									<div>
										<picture>
											<img src="/images/memorial-designer-screenshot-4.jpg" alt="Memorial designer fourth screen" />
										</picture>
									</div>
								</Slider>
								{/*<figure className="image-full">
									<picture>
										<img src="/images/project-memorial-designer.png" alt="A screenshot of the Memorial Designer" />
									</picture>
									<figcaption>Screenshot of the Memorial Designer</figcaption>
								</figure>*/}
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Outcomes and Lessons</h2>
								<p>In our original planning we had wanted to include all of the various products that Gemini may offer to monument builder customers. After getting into the details and understanding the complexities, we narrowed the scope to be more akin to a minimal viable product.</p>
								<p>The Memorial Designer first launched to key accounts to work out the process internally. With the launch of Gemini’s Partner Portal in 2022, it became available to all roughly fifty thousand of Gemini’s customers.</p>
								<p>The next step for this project would be to interview customers after they have been using the tool for a while. What works well? What could be improved upon? Then we could consider adding more of their product lines to expand the offering of the designer.</p>
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

export default ProjectGeminiMemorialDesigner;
