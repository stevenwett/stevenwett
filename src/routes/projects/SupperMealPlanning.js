import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import Slider from "react-slick";

class SupperMealPlanning extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: props.settings,
			projects: props.projects,
			component: props.component,
			accordions: {
				userStories: {
					activeIndex: 0,
				}
			},
			personasSlideshow: {
				arrows: true,
				dots: false,
				infinite: false,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				focusOnSelect: true,
				rows: 1,
				swipeToSlide: true,
				responsive: [
					{
						breakpoint: 600,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
					}
				]
			}
		};
	}

	componentDidMount() {
		if (!this.state.settings.debug) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}

	onAccordionClick(accordionId, index) {
		if (!this.state.accordions.hasOwnProperty(accordionId)) {
			return;
		}

		this.setState({
			accordions: {
				[accordionId]: {
					activeIndex: index,
				}
			}
		});
	}

	render() {
		// const {
		// 	settings,
		// } = this.state;
		const title = 'Meal Planning App: Supper. | Work | Steven Wett';
		const description = 'A class project where I completed discovery and design, investigating how people meal plan and proposing a solution.';
		const url = 'https://stevenwett.com/work/supper-meal-planning';
		const image = '/images/og-project-supper-meal-planning.png';

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
				<div className="page page-work-single supper-meal-planning">
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
										<h1>Meal Planning App: Supper</h1>
										<div className="single-feature">
											<div className="ratio ratio-16x9">
												<picture>
													<source srcSet="" type="image/webp" />
													<img src="/images/project-supper-meal-planning.png" alt="Phones showing the Supper app" />
												</picture>
											</div>
										</div>
										<Row className="single-details">
											<Col xs={12} md={6} className="detail">
												<h2>Role</h2>
												<p>UX Designer</p>
											</Col>
											<Col xs={12} md={6} className="detail">
												<h2>Software</h2>
												<p>Figma, Notion, Maze, Zoom</p>
											</Col>
											<Col xs={12} md={6} className="detail">
												<h2>UX Skills</h2>
												<p>Competitive Analysis, Interview Guide, User Interviews, Prototypes, Customer Journey Maps, User Testing, Visual Design</p>
											</Col>
											<Col xs={12} md={6} className="detail">
												<h2>Year</h2>
												<p>2023</p>
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
									<h2>Overview</h2>
									<p>This case study is an overview of my capstone project for the <Link to="/about/">UX Design Master's program</Link> that I completed in August, 2023.</p>
									<h2>Background</h2>
									<p>I'm a home cook and enjoying cooking meals for me and my partner throughout the week. However, I'm sure she would be the first to tell you that I'm terrible at planning meals. At times, she and I do meal plan and when we do we find that:</p>
									<ul>
										<li>We have an improved mood, relationshop, and healthier eating habits</li>
										<li>It is difficult to keep up with</li>
										<li>It takes time, mental and physical effort</li>
									</ul>
									<p>In order to explore the problem further, I conducted 2 preliminary discovery interviews with friends who meal prep to help me identify the problem.</p>
									<article className="callout hmw">
										<svg viewBox="0 0 14 23" height="14" width="23" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.0387 6.55506C13.0884 8.00255 12.6684 9.42666 11.8424 10.6163C11.0165 11.807 9.82775 12.6976 8.45435 13.157C8.45435 13.157 8.25747 13.2264 8.25747 13.3417V14.9139C8.25747 16.0032 7.37434 16.8864 6.28496 16.8864C5.19558 16.8864 4.31245 16.0032 4.31245 14.9139V13.3417C4.32182 12.4689 4.60496 11.6214 5.12151 10.9172C5.63806 10.2141 6.36183 9.69 7.19245 9.42C8.36526 9.02532 9.14058 7.90687 9.09745 6.66936C9.01307 5.15904 7.77464 3.97128 6.26161 3.95064C5.18722 3.95533 4.21222 4.57502 3.75097 5.54438C3.27752 6.52594 2.09816 6.93751 1.11649 6.465C0.134936 5.99155 -0.27664 4.81219 0.195872 3.83052C0.740552 2.68865 1.59555 1.72303 2.66331 1.04532C3.73206 0.367512 4.96957 0.00564 6.23427 0H6.28021C8.03427 0.0121877 9.71605 0.70032 10.9751 1.92094C12.2342 3.14249 12.9729 4.8019 13.0385 6.5551L13.0387 6.55506ZM8.26772 20.7986C8.26772 19.997 7.78491 19.2751 7.04521 18.9676C6.30459 18.6611 5.4524 18.8289 4.88521 19.3951C4.31802 19.9614 4.14647 20.8136 4.45208 21.5542C4.7577 22.2948 5.47863 22.7795 6.28021 22.7814C6.80615 22.7814 7.31147 22.5733 7.68459 22.2011C8.05679 21.8298 8.26679 21.3255 8.26772 20.7986V20.7986Z" fill="#fff"/>
										</svg>
										<h3>Problem statement</h3>
										<p>Time-constrained home cooks find it difficult to plan meals ahead of time and share responsibilities with others in their household. They want to cook at home, but without a plan they don’t have the ingredients on-hand and don’t want to run to the store at the last minute. <strong>Even when they try to plan their meals, they can’t decide what to make and find it difficult to collaborate with their household to execute the plan.</strong></p>
									</article>
									<h3>Target audience</h3>
									<p><strong>Home cooks are my target audience</strong> for this investigation. I chose this audience after identifying that I wanted to investigate people who cook at home and plan at least one meal in advance a week.</p>
									<h3>Strategy</h3>
									<p>I created a project plan<sup className="inline-refs"><a href="#ref1">[1]</a></sup> as a strategy for how to investigate the problem further and come up with a solution. In just 8 weeks, I planned to interview users, analyze the results and create a workable prototypes of a mobile app. To stay on track, I started the project by developing a project plan and oragnized tasks with deadlines in Notion.</p>
									<p>I followed the following project strategy:</p>
									<ol>
										<li><strong>Competitive analysis</strong> – Complete a competitive analysis matrix to understand the competitive landscape</li>
										<li><strong>User interviews</strong> – Create a screener and interview guide and recruite users. Conduct user interviews</li>
										<li><strong>Personas and journey maps</strong> – Analyze user interviews and organize the findings into user personas and journey maps</li>
										<li><strong>Prototypes and iterative improvements</strong> – This step would be iterative. Start with low-fidelity prototypes, conduct usability tests and make adjustments. Upgraded the prototypes to high-fidelity and conduct another round of usability tests and make further adjustments</li>
									</ol>
									<h3>Competition</h3>
									<p>When I performed a Competitive Analysis Matrix<sup className="inline-refs"><a href="#ref2">[2]</a></sup> I found that competitors focused more on the recipes than the plan and didn't have good collaboration features. Below are three major competitors:</p>
									<div className="image-list">
										<article>
											<div className="content">
												<div className="image-col">
													<img src="/images/meal-planning-competition-whisk.png" alt="Whisk" />
												</div>
												<div className="text-col">
													<h4>Whisk</h4>
													<p>A popular recipe app where recipes are easy to find and share, however it is riddled with ads and isn’t specifically for meal planning</p>
												</div>
											</div>
										</article>
										<article>
											<div className="content">
												<div className="image-col">
													<img src="/images/meal-planning-competition-bigoven.png" alt="BigOven" />
												</div>
												<div className="text-col">
													<h4>BigOven</h4>
													<p>An app that has been around for a while and is known to be good for using leftovers, but the mobile app lacks basic features</p>
												</div>
											</div>
										</article>
										<article>
											<div className="content">
												<div className="image-col">
													<img src="/images/meal-planning-competition-paprika.png" alt="Paprika" />
												</div>
												<div className="text-col">
													<h4>Paprika</h4>
													<p>Popular with meal planners and has many good features, but has separate apps for each platform that require syncing and doesn't have collaboration features</p>
												</div>
											</div>
										</article>
									</div>
									<p></p>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>User research</h2>
									<p>I conducted user inteviews and analyze their responses in order to have a solid foundation of knowledge. I organized the responses in a Notion database and analyzed by affinity mapping using FigJam.</p>
									<h3>User interviews</h3>
									<h4>Screener criteria</h4>
									<p>I found participants who fit my target audience, selecting users who:</p>
									<ul>
										<li>Cook at home</li>
										<li>In charge of planning meals</li>
										<li>Plan out multiple meals at a time</li>
									</ul>
									<h4>User interviews</h4>
									<p>I created an interview guide with uniform questions for each participant and conducted 12, 40-minute moderated user interviews via Zoom. An overview of my participants:</p>
									<ul>
										<li><strong>Diverse age range</strong> – Spanning from 21 to 71 years</li>
										<li><strong>Gender diversity</strong> – 5 male and 7 female</li>
										<li><strong>Varied household sizes</strong> – Smallest household size was 1 and largest was 5</li>
										<li><strong>Geographic representation</strong> – Located throughout midwest and eastern United States</li>
									</ul>
									<figure className="image-full">
										<picture>
											<source srcSet="/images/meal-planning-user-interview-screenshot.webp" type="image/webp" />
											<img src="/images/meal-planning-user-interview-screenshot.png" alt="Me conducting a user interview via Zoom" />
										</picture>
										{/*<figcaption></figcaption>*/}
									</figure>
									<h3>Interview analysis</h3>
									<p>I asked each participant the same questions and affinity mapped<sup className="inline-refs"><a href="#ref3">[3]</a></sup> the responses in order to draw conclusions and identify high-level findings.</p>
									<h4>High-level findings</h4>
									<p>I found that most users:</p>
									<ul>
										<li><strong>Want a plan, but planning takes mental effort</strong> – They want to plan ahead, but find it to be a high-energy task</li>
										<li><strong>Are looking for meal inspiration</strong> – They’re looking to find new meals so that they’re not eating the same thing every week</li>
										<li><strong>Desire to share responsibilities</strong> – For households with multiple adults, they want to plan together</li>
										<li><strong>Want to avoid food waste</strong> – They’re looking to not have food go bad in the fridge and only buy what they need</li>
										<li><strong>Usually plan on the weekend</strong> – Most people plan on the weekends and plan at least 3-4 meals for the week</li>
										<li><strong>Don’t want planning to add extra work</strong> – They don’t want the plan to add extra work as they’re not interested in something that adds more work to their lives</li>
									</ul>
									<figure className="image-full">
										<picture>
											{/*<source srcSet="/images/meal-planning-user-interview-screenshot.webp" type="image/webp" />*/}
											<img src="/images/meal-planning-figjam-screenshot.png" alt="Sticky notes in FigJam" />
										</picture>
										<figcaption>A screenshot of an affinity map that helped me identify personas</figcaption>
									</figure>
									<h2>Ideation</h2>
									<p>I sketched on a tablet and used FigJam while ideating for this project. I created sticky notes to conduct my user interview analysis, made rough drafts of user stories and journey maps, and planned my information architecture all using FigJam.</p>
									<figure className="image-full">
										<picture>
											{/*<source srcSet="/images/meal-planning-user-interview-screenshot.webp" type="image/webp" />*/}
											<img src="/images/meal-planning-sketches.png" alt="User story sketches" />
										</picture>
										{/*<figcaption></figcaption>*/}
									</figure>
									<h2>Concept evolution</h2>
									<p>At the beginning of this project, I had considered making this app focus on fresh produce and connecting local farmers to users. As I started to plan, I realized that I should focus my energy on a single idea and narrowed my scope to only meal planning.</p>
									<p>I had also considered making a brainstorming feature using a large language model (LLM) so that users could chat over meal ideas. While I still think this concept could be good for the user. I decided that building a prototype of this feature might be inadequate and creating prototypes for this experience may not actually give me quality data, since I got user feedback that it would be difficult for them to know whether it would be useful without using it and it was of scope to actually teach a prediction model for this project.</p>
									<h2>Personas and journeys</h2>
									<p>From the user interview analysis that I did, I determined two user types: meal planners and planning assistants. I created two personas for the meal planner user type and one assistant and created a customer journey map for each user type.</p>
									<h3>Meal Planner</h3>
									<p>The primary planner for the household, who plans and cooks at least one meal a week.</p>
									<Slider {...this.state.personasSlideshow}>
										<div>
											<picture>
												{/*<source srcSet="/images/partner-portal-wireframe-1.webp" type="image/webp" />*/}
												<img src="/images/meal-planning-persona-kelly.png" alt="" />
											</picture>
										</div>
										<div>
											<picture>
												{/*<source srcSet="/images/partner-portal-wireframe-1.webp" type="image/webp" />*/}
												<img src="/images/meal-planning-persona-anna.png" alt="" />
											</picture>
										</div>
										<div>
											<picture>
												{/*<source srcSet="/images/partner-portal-wireframe-1.webp" type="image/webp" />*/}
												<img src="/images/meal-planning-journey-planner.png" alt="" />
											</picture>
										</div>
									</Slider>
									<h3>Planning assistant</h3>
									<p>These users don't often cook, but they enjoy helping to plan and shop for the groceries.</p>
									<Slider {...this.state.personasSlideshow}>
										<div>
											<picture>
												{/*<source srcSet="/images/partner-portal-wireframe-1.webp" type="image/webp" />*/}
												<img src="/images/meal-planning-persona-dave.png" alt="" />
											</picture>
										</div>
										<div>
											<picture>
												{/*<source srcSet="/images/partner-portal-wireframe-1.webp" type="image/webp" />*/}
												<img src="/images/meal-planning-journey-assistant.png" alt="" />
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
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<article className="references">
										<h2>Appendix</h2>
										<ol>
											<li id="ref1"><a href="">Project Plan</a></li>
											<li id="ref2"><a href="">Competitive Analysis Matrix</a></li>
											<li id="ref3"><a href="https://www.figma.com/file/a0sOcGNjX6K1OBwynpWyfb/User-Interview-Analysis?type=whiteboard&node-id=0%3A1&t=tDA4F7MXjKvuL269-1">User Interview Affinity Map</a></li>
										</ol>
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
				</div>
			</>
		);
	}
}

export default SupperMealPlanning;
