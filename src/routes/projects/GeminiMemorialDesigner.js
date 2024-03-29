import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

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
		const title = 'Gemini Memorial Designer | Work | Steven Wett';
		const description = 'A design tool for a manufacturing client for their customers to design and order bronze memorial plaques on their own.';
		const url = 'https://stevenwett.com/work/gemini-memorial-designer';
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
				<div className="page page-work-single gemini-memorial-designer">
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
										<h1>Gemini Memorial Designer</h1>
										<div className="single-feature">
											<div className="ratio ratio-16x9">
												<picture>
													<source srcSet="/images/project-gemini-memorial-designer.webp" type="image/webp" />
													<img src="/images/project-gemini-memorial-designer.png" alt="Gemini memorial designer" />
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
								<Col xs={12} md={10} lg={8} xl={7}>
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
										<svg viewBox="0 0 14 23" height="14" width="23" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.0387 6.55506C13.0884 8.00255 12.6684 9.42666 11.8424 10.6163C11.0165 11.807 9.82775 12.6976 8.45435 13.157C8.45435 13.157 8.25747 13.2264 8.25747 13.3417V14.9139C8.25747 16.0032 7.37434 16.8864 6.28496 16.8864C5.19558 16.8864 4.31245 16.0032 4.31245 14.9139V13.3417C4.32182 12.4689 4.60496 11.6214 5.12151 10.9172C5.63806 10.2141 6.36183 9.69 7.19245 9.42C8.36526 9.02532 9.14058 7.90687 9.09745 6.66936C9.01307 5.15904 7.77464 3.97128 6.26161 3.95064C5.18722 3.95533 4.21222 4.57502 3.75097 5.54438C3.27752 6.52594 2.09816 6.93751 1.11649 6.465C0.134936 5.99155 -0.27664 4.81219 0.195872 3.83052C0.740552 2.68865 1.59555 1.72303 2.66331 1.04532C3.73206 0.367512 4.96957 0.00564 6.23427 0H6.28021C8.03427 0.0121877 9.71605 0.70032 10.9751 1.92094C12.2342 3.14249 12.9729 4.8019 13.0385 6.5551L13.0387 6.55506ZM8.26772 20.7986C8.26772 19.997 7.78491 19.2751 7.04521 18.9676C6.30459 18.6611 5.4524 18.8289 4.88521 19.3951C4.31802 19.9614 4.14647 20.8136 4.45208 21.5542C4.7577 22.2948 5.47863 22.7795 6.28021 22.7814C6.80615 22.7814 7.31147 22.5733 7.68459 22.2011C8.05679 21.8298 8.26679 21.3255 8.26772 20.7986V20.7986Z" fill="#fff"/>
										</svg>
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
								<Col xs={12} md={10} lg={8} xl={7}>
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
											<source srcSet="/images/gemini-bronze-service-diagram.webp" type="image/webp" />
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
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Prototyping</h2>
									<h3>Wireframes</h3>
									<p>I created a series of low-fidelity wireframes that followed the customer journey to identify the major actions that the user needed to take.</p>
									<Slider {...settings.slideshow}>
										<div>
											<picture>
												<source srcSet="/images/memorial-designer-wireframe-1.webp" type="image/webp" />
												<img src="/images/memorial-designer-wireframe-1.jpg" alt="Low-fidelity wireframe first screen" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/memorial-designer-wireframe-2.webp" type="image/webp" />
												<img src="/images/memorial-designer-wireframe-2.jpg" alt="Low-fidelity wireframe second screen" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/memorial-designer-wireframe-3.webp" type="image/webp" />
												<img src="/images/memorial-designer-wireframe-3.jpg" alt="Low-fidelity wireframe third screen" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/memorial-designer-wireframe-4.webp" type="image/webp" />
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
												<source srcSet="/images/memorial-designer-screenshot-1.webp" type="image/webp" />
												<img src="/images/memorial-designer-screenshot-1.jpg" alt="Memorial designer first screen" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/memorial-designer-screenshot-2.webp" type="image/webp" />
												<img src="/images/memorial-designer-screenshot-2.jpg" alt="Memorial designer second screen" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/memorial-designer-screenshot-3.webp" type="image/webp" />
												<img src="/images/memorial-designer-screenshot-3.jpg" alt="Memorial designer third screen" />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/memorial-designer-screenshot-4.webp" type="image/webp" />
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
								<Col xs={12} md={10} lg={8} xl={7}>
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
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Next steps</h2>
									<ul>
										<li>Continue to interview customers and iterate on this project to make it better</li>
										<li>Add more product lines</li>
										<li>Add additional options, such as colors, textures and emblem</li>
										<li>Make the designer public</li>
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
			</>
		);
	}
}

export default GeminiMemorialDesigner;
