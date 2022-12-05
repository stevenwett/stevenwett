import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Slider from "react-slick";

class GeminiMemorialDesigner extends React.Component {
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
									<Link to="/work" className="back no-line">
										<svg title="Back" width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M20.7071 8.97838C21.0976 8.58785 21.0976 7.95469 20.7071 7.56416L14.3431 1.2002C13.9526 0.809679 13.3195 0.809679 12.9289 1.2002C12.5384 1.59073 12.5384 2.22389 12.9289 2.61442L18.5858 8.27127L12.9289 13.9281C12.5384 14.3186 12.5384 14.9518 12.9289 15.3423C13.3195 15.7329 13.9526 15.7329 14.3431 15.3423L20.7071 8.97838ZM0.75 9.27127H20V7.27127H0.75V9.27127Z" fill="#DDAD02"/>
										</svg>
									</Link>
									<div className="category">UX Case Study</div>
									<h1>Gemini Memorial Designer</h1>
									<div className="single-feature">
										<div className="ratio ratio-16x9">
											<picture>
												<img src="/images/project-gemini-memorial-designer.png" alt="Gemini memorial designer" />
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
											<p>Interview Guide, User Interviews, Competitive Analysis, Service Diagrams, Wireframes, Prototypes, User Testing, Visual Design</p>
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
								<figure className="image-full">
									<picture>
										<img src="/images/foundary-photo-with-plaque.jpg" alt="An example plaque" />
									</picture>
									<figcaption>An example of a memorial bronze plaque</figcaption>
								</figure>
								<h2>Background</h2>
								<p>Gemini has been around for nearly sixty years and has multiple foundries for making plaques. </p>
								<p>They have mainly focused their efforts on their signage customer segments and haven’t established a strong foothold with monument builders in the memorials industry.</p>
								<p>This project works to remedy that issue. <strong>Gemini doesn’t currently have a way for designers in the monument builder industry to quickly design and order bronze memorials from them.</strong></p>
								<p>During this project, we hoped to address this question 🧐:</p>
								<article className="callout hmw">
									<h3>How Might We ...</h3>
									<p>How might we help monument builder customers design and order a bronze plaque quickly in order to help them finalize a sale with the end client?</p>
								</article>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Audience</h2>
								<p>The primary audience for this project was designers in the monument builder industry.</p>
								<p>They require:</p>
								<ul>
									<li>A way to design a memorial quickly alongside their customers</li>
									<li>A way to download a realistic preview for approval</li>
									<li>An easy way to purchase the plaque</li>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Roles & responsibilities</h2>
								<p><strong>I co-lead the design and development for this project.</strong> My team consisted of myself, a project manager, another UX designer, a content strategist, and an art director.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
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
							<Col xs={12} md={10} lg={8}>
								<h2>Planning</h2>
								<h3>User Research</h3>
								<p>We recruited:</p>
								<ul>
									<li>Gemini customers in the monument builder industry (x4)</li>
									<li>Knowledgeable internal staff (x2)</li>
								</ul>
								<h3>Information Architecture</h3>
								<p>We worked with Gemini over a series of weeks to fully understand what what details were needed for this designer.</p>
								<h3>Service Blueprint</h3>
								<p>We mapped the processes from the beginning to the end of the journey. <strong>This service blueprint helped the client understand the process with more confidence.</strong></p>
								<figure className="image-full">
									<picture>
										<img src="/images/gemini-bronze-service-diagram.jpg" alt="Customer journey map" />
									</picture>
									{/*<figcaption>A monument builder customer journey service diagram</figcaption>*/}
								</figure>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Prototyping</h2>
								<h3>Wireframes</h3>
								<p>I created a series of low-fidelity wireframes that followed the customer journey to identify the major actions that the user needed to take.</p>
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
								<p>We met with the monument builder customers again and had them follow a guided scenario with specific tasks to complete.</p>
								<p>One component that we removed during the iterative updates was the element options panel – where users could have another way to control emblems – because it wasn’t especially helpful. We chose to remove it because we found it was overly complex during user testing.</p>
								<h3>Visual Design</h3>
								<p>I worked with our art director to use Gemini’s existing brand guidelines for the visual design of the app. <strong>The brand guidelines don’t have details for web components so I developed design patterns closely following the guide.</strong></p>
								<p>Gemini was pleased with the clean and consistent design that followed Gemini branding.</p>
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
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Outcomes & lessons</h2>
								<p>In our original planning we had wanted to include all of the various products that Gemini may offer to monument builder customers. After getting into the details and understanding the complexities, <strong>we narrowed the scope to be more akin to a minimal viable product.</strong></p>
								<p>The Memorial Designer first launched to key accounts to work out the process internally. <strong>When the Partner Portal launched in 2022, ~50,000 customers gained access to the designer.</strong></p>
								<p>Gemini is still new to the industry and are slowly growing their customer base with this designer.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<h2>Next steps</h2>
								<ul>
									<li>Continue to interview customers and iterate on this project to make it better</li>
									<li>Add more product lines</li>
									<li>Add additional options, such as colors, textures, and emblem</li>
									<li>Make the designer public facing</li>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<article className="callout">
									<h2>Accessibility</h2>
									<p>Because I also coded the project, I am very familiar with how accessibility can directly affect a website or web app. <strong>We adhered to a WCAG 2.1 AA standard for this project, even though the client wasn’t legally required to do so.</strong> This is because one of my core values is that the web should be accessible to as many types of people as possible.</p>
								</article>
							</Col>
						</Row>
					</Container>
				</div>
{/*				<div className="panel single-work-after">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8}>
								<div className="content">
									<Link to="/work/riggscat" className="next-work no-line">Riggs Cat Website</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</div>*/}
			</div>

		);
	}
}

export default GeminiMemorialDesigner;
