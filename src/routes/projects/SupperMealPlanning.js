import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import Slider from "react-slick";
import ReactPlayer from 'react-player'

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
					isPaused: true,
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
				...this.state.accordions,
				[accordionId]: {
					...this.state.accordions[accordionId],
					activeIndex: index,
				}
			}
		});
	}

	onAccordionToggleMedia(accordionId) {
		if (!this.state.accordions.hasOwnProperty(accordionId)) {
			return;
		}

		this.setState({
			accordions: {
				...this.state.accordions,
				[accordionId]: {
					...this.state.accordions[accordionId],
					isPaused: !this.state.accordions[accordionId].isPaused,
				}
			}
		});
	}

	userStoriesMedia(activeIndex) {
		switch(activeIndex) {
			case 0:
				return (
					<React.Fragment key="media-userStories-0">
						<ReactPlayer
							playing={!this.state.accordions.userStories.isPaused}
							loop={true}
							url="/images/meal-planning-plan-a-meal-screen-recording.h264.24.mp4"
						/>
					</React.Fragment>
				);
			case 1:
				return (
					<React.Fragment key="media-userStories-1">
						<ReactPlayer
							playing={!this.state.accordions.userStories.isPaused}
							loop={true}
							url="/images/meal-planning-vote-on-meal-screen-recording.h264.24.mp4"
						/>
					</React.Fragment>
				);
			case 2:
				return (
					<React.Fragment key="media-userStories-2">
						<ReactPlayer
							playing={!this.state.accordions.userStories.isPaused}
							loop={true}
							url="/images/meal-planning-decide-while-shopping-screen-recording.h264.24.mp4"
						/>
					</React.Fragment>
				);
			case 3:
				return (
					<React.Fragment key="media-userStories-3">
						<ReactPlayer
							playing={!this.state.accordions.userStories.isPaused}
							loop={true}
							url="/images/meal-planning-dont-forget-screen-recording.h264.24.mp4"
						/>
					</React.Fragment>
				);
			default:
				return '';
		}
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
													<source srcSet="/images/project-supper-meal-planning.webp" type="image/webp" />
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
									<p>In order to explore the problem further, I conducted two preliminary discovery interviews with friends who meal prep to help me identify the problem.</p>
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
										<li><strong>Competitive analysis</strong> – Completed a competitive analysis matrix to understand the competitive landscape</li>
										<li><strong>User interviews</strong> – Created a screener and interview guide and recruited users. Conducted user interviews</li>
										<li><strong>Personas and journey maps</strong> – Analyzed user interviews and organized the findings into user personas and journey maps</li>
										<li><strong>Prototypes and iterative improvements</strong> – This step was iterative. Started with low-fidelity prototypes, conducted usability tests and make adjustments. Upgraded the prototypes to high-fidelity and conducted another round of usability tests and made further adjustments</li>
									</ol>
									<h3>Competition</h3>
									<p>When I performed a competitive analysis matrix<sup className="inline-refs"><a href="#ref2">[2]</a></sup> I found that competitors focused more on the recipes than the plan and didn't have good collaboration features. Below are three major competitors:</p>
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
										<li>In-charge of planning meals</li>
										<li>Plan out multiple meals at a time</li>
									</ul>
									<h4>User interviews</h4>
									<p>I created an interview guide with uniform questions for each participant and conducted twelve, 40-minute moderated user interviews via Zoom. An overview of my participants:</p>
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
											<img src="/images/meal-planning-figjam-screenshot.png" alt="Sticky notes in FigJam" />
										</picture>
										<figcaption>A screenshot of an affinity map of user interview responses that I created to help me organize personas and draw conclusions for journey maps</figcaption>
									</figure>
									<h2>Ideation</h2>
									<p>I sketched on a tablet and used FigJam while ideating for this project. I created sticky notes to conduct my user interview analysis, made rough drafts of user stories and journey maps, and planned my information architecture all using FigJam.</p>
									<figure className="image-full">
										<picture>
											<img src="/images/meal-planning-sketches.png" alt="User story sketches" />
										</picture>
									</figure>
									<h2>Concept evolution</h2>
									<p>At the beginning of this project, I had considered making this app focus on fresh produce and connecting local farmers to users. As I started to plan, I realized that I should focus my energy on a single idea and narrowed my scope to only meal planning.</p>
									<p>I had also considered making a brainstorming feature using a large language model (LLM) so that users could chat over meal ideas. While I still think this concept could be good for the user, I decided to save this idea for later and focus on other features.</p>
									<h2>Personas and journeys</h2>
									<p>From the user interview analysis that I did, I determined two user types: meal planners and planning assistants. I created two personas for the meal planner user type and one assistant and created a customer journey map for each user type.</p>
									<figure className="image-full">
										<picture>
											<source srcSet="/images/meal-planning-personas.webp" type="image/webp" />
											<img src="/images/meal-planning-personas.png" alt="" />
										</picture>
									</figure>
									<h3>Meal Planner</h3>
									<p>The meal planner is the primary planner for the household who plans and cooks at least one meal a week.</p>
									<Slider {...this.state.personasSlideshow}>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-persona-kelly.webp" type="image/webp" />
												<img src="/images/meal-planning-persona-kelly.png" alt="A persona for the proactive meal prepper." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-persona-anna.webp" type="image/webp" />
												<img src="/images/meal-planning-persona-anna.png" alt="A persona for the spontaneous home cook." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-journey-planner.webp" type="image/webp" />
												<img src="/images/meal-planning-journey-planner.png" alt="A customer journey map for the meal planner user type." />
											</picture>
										</div>
									</Slider>
									<h3>Planning assistant</h3>
									<p>The planning assistant is a helper in the kitchen who often doesn't cook, but they enjoy contributing to the plan and shopping for groceries.</p>
									<Slider {...this.state.personasSlideshow}>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-persona-dave.webp" type="image/webp" />
												<img src="/images/meal-planning-persona-dave.png" alt="A persona for the planning assistant." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-journey-assistant.webp" type="image/webp" />
												<img src="/images/meal-planning-journey-assistant.png" alt="A customer journey map for the planning assistant user type." />
											</picture>
										</div>
									</Slider>
									<h2>Prototypes and testing</h2>
									<p>An effective way to create user interfaces is to start with broad concepts and test whether users understand what’s going on. Then make changes and test more. For this project, I completed this iterative process twice with low-fidelity prototypes for the first round and high-fidelity prototypes for the second round.</p>
									<h3>Low-fidelity prototypes</h3>
									<h4>Information architecture</h4>
									<p>I identified a sitemap of what pages I would need for this app. I then thought about the various components as objects and identified what properties each might have, which is helpful to have internal consistency so that users can understand concepts more easily.</p>
									<figure className="image-full">
										<picture>
											<img src="/images/meal-planning-information-architecture.png" alt="A screenshot of information architecture planning" />
										</picture>
										<figcaption>A screenshot of my information architecture planning</figcaption>
									</figure>
									<h4>Usability testing</h4>
									<p>After creating the prototypes, I pulled from my user testing pool and further screened them to know that they planned at least one meal a week in advance. I conducted:</p>
									<ul>
										<li>13 unmoderated user tests</li>
										<li>2 moderated user tests</li>
									</ul>
									<p>I created a Maze survey<sup className="inline-refs"><a href="#ref6">[6]</a></sup> that let me conduct unmoderated tests, where users completed tasks independently. I also conducted a couple moderated usability tests via Zoom so that I could ask follow-up questions and dive deeper into their responses.</p>
									<h4>User stories</h4>
									<p>I created four user stories and made a prototype<sup className="inline-refs"><a href="#ref4">[4]</a></sup> for each. During my usability testing sessions, I had users imagine themselves in a scenario that tested each story.</p>
									<Slider {...this.state.personasSlideshow}>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-low-fi-user-stories.webp" type="image/webp" />
												<img src="/images/meal-planning-low-fi-user-stories.png" alt="User stories for meal planner and planning assistant. Meal planner's stories are to plan a meal and vote on a meal. The planning assistant's stories are the decide on items while shopping and to not forget items." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-low-fi-plan-meal.webp" type="image/webp" />
												<img src="/images/meal-planning-low-fi-plan-meal.png" alt="A user story for the meal planner to plan a meal. The situation is that meal planners want to plan meals ahead of time so that they can reduce stress later in the week." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-low-fi-plan-meal-insights.webp" type="image/webp" />
												<img src="/images/meal-planning-low-fi-plan-meal-insights.png" alt="Insights for the plan a meal user story. Users didn't understand the current day and the direction of the days on the calendar. They also didn't realize the screen was scrollable." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-low-fi-vote-on-meal.webp" type="image/webp" />
												<img src="/images/meal-planning-low-fi-vote-on-meal.png" alt="A user story for the meal planner to vote on a meal. The situation is that the meal planner wants input from others in the household so that they can share the burden of making decisions." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-low-fi-vote-on-meal-insights.webp" type="image/webp" />
												<img src="/images/meal-planning-low-fi-vote-on-meal-insights.png" alt="Insights for the meal planner to vote on a meal. Users didn't understand the inconsistent terminology." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-low-fi-decide-while-shopping.webp" type="image/webp" />
												<img src="/images/meal-planning-low-fi-decide-while-shopping.png" alt="A user story for the planning assistant to decide while shopping. The situation is that the planning assistant wants to be informed about items on their list while they're in the store." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-low-fi-decide-while-shopping-insights.webp" type="image/webp" />
												<img src="/images/meal-planning-low-fi-decide-while-shopping-insights.png" alt="Insights for the planning assistant deciding while shopping. Some users had a difficult time knowing how to see more details about items on the list." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-low-fi-dont-forget-items.webp" type="image/webp" />
												<img src="/images/meal-planning-low-fi-dont-forget-items.png" alt="A user story for the planning assistant to not forget items. The situation is that the planning assistant wants to organize their grocery list by meals and store so that they don't forget items." />
											</picture>
										</div>
										<div>
											<picture>
												<source srcSet="/images/meal-planning-low-fi-dont-forget-items-insights.webp" type="image/webp" />
												<img src="/images/meal-planning-low-fi-dont-forget-items-insights.png" alt="Insights for the planning assistant trying to not forget items. Users easily understood the filters and knew how to check off items." />
											</picture>
										</div>
									</Slider>
									<h3>High-fidelity prototypes</h3>
									<p>After gathering insights from my low-fidelity prototypes, I made modifications and then upgraded them to high-fidelity. I chose a design system, created new prototypes, and then conducted more usability tests.</p>
									<h4>Design system</h4>
									<p>I created a unique color palette and chose to use the iOS 16 design system for my app, which provided me with components and icons. The benefit of using an existing design system is that users are already familiar with components, which can reduce mental load.</p>
									<figure className="image-full">
										<picture>
											<source srcSet="/images/meal-planning-design-system.webp" type="image/webp" />
											<img src="/images/meal-planning-design-system.png" alt="" />
										</picture>
										<figcaption>The color palette I created for my app, which I used along with the iOS 16 design system defaults</figcaption>
									</figure>
									<h4>Usability testing</h4>
									<p>After creating the upgraded prototypes, I recruited from my same user pool and created a new Maze survey<sup className="inline-refs"><a href="#ref7">[7]</a></sup> to distribute. I conducted:</p>
									<ul>
										<li>11 unmoderated user tests</li>
									</ul>
									<p>With this round of testing, now that the prototypes feel like a real app, I wanted to make sure that users were still able to complete the tasks and gather feedback.</p>
									<h4>User stories and demos</h4>
									<p>The following are the four user stories as well as demos of the prototypes<sup className="inline-refs"><a href="#ref5">[5]</a></sup> and insights from the user testing.</p>
								</Col>
								<Col xs={12}>
									<div className="media-accordion">
										<Row>
											<Col xs={12} md={6}>
												<div className="media">
													<div className="media-item">
														{this.userStoriesMedia(this.state.accordions.userStories.activeIndex)}
													</div>
													<button
														className="media-toggle"
														onClick={() => this.onAccordionToggleMedia('userStories')}
													>
														{!this.state.accordions.userStories.isPaused ? (
															<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
																<rect x="26.4773" y="23" width="9.27273" height="34" rx="2" fill="#DDAD02"/>
																<rect x="44.25" y="23" width="9.27273" height="34" rx="2" fill="#DDAD02"/>
															</svg>
														) : (
															<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M57.9546998 38.2408C59.348 38.9969 59.348 41.0031 57.9498 41.7592L29.7251 57.0234C28.3925 57.7441 26.7737 56.7791 26.7737 55.2642L26.7737 24.7358C26.7737 23.2209 28.3925 22.2559 29.7251 22.9766L57.9498 38.2408Z" fill="#DDAD02"/>
															</svg>
														)}
													</button>
												</div>
											</Col>
											<Col xs={12} md={6}>
												<div className="accordions">
													<section className={`accordion-item${this.state.accordions.userStories.activeIndex === 0 ? ' active' : ''}`}>
														<header>
															<button
																onClick={() => this.onAccordionClick('userStories', 0)}
															>
																<h1>Plan a Meal</h1>
															</button>
														</header>
														<div className="content">
															<h2>Situation</h2>
															<p>As a meal planner, I want to plan for meals ahead of time so that I can reduce stress later in the week</p>
															<h2>Findings</h2>
															<p>I learned that it was difficult for users to find how to remove a meal, but otherwise they were able to complete this task.</p>
														</div>
													</section>
													<section className={`accordion-item${this.state.accordions.userStories.activeIndex === 1 ? ' active' : ''}`}>
														<header>
															<button
																onClick={() => this.onAccordionClick('userStories', 1)}
															>
																<h1>Vote on a meal</h1>
															</button>
														</header>
														<div className="content">
															<h2>Situation</h2>
															<p>As a meal planner, I want to choose meals to make with others in the household, so that I can share the burden of making decisions</p>
															<h2>Findings</h2>
															<p>This video is after a second round of updates were made where I simplified the rating to a single up/down arrow both on a recipe single and also on the favorites page.</p>
														</div>
													</section>
													<section className={`accordion-item${this.state.accordions.userStories.activeIndex === 2 ? ' active' : ''}`}>
														<header>
															<button
																onClick={() => this.onAccordionClick('userStories', 2)}
															>
																<h1>Decide while shopping</h1>
															</button>
														</header>
														<div className="content">
															<h2>Situation</h2>
															<p>As a planning assistant, I want to be informed about items on my list so that I can make informed decisions</p>
														</div>
													</section>
													<section className={`accordion-item${this.state.accordions.userStories.activeIndex === 3 ? ' active' : ''}`}>
														<header>
															<button
																onClick={() => this.onAccordionClick('userStories', 3)}
															>
																<h1>Don't forget items</h1>
															</button>
														</header>
														<div className="content">
															<h2>Situation</h2>
															<p>As a planning assistant, I want to organize my list by meals and store so that I don’t forget items while shopping</p>
														</div>
													</section>
												</div>
											</Col>
										</Row>
									</div>
								</Col>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Reflections</h2>
									<p>As I reflect on this project, I noticed the following:</p>
									<ul>
										<li><strong>Limited timeframe and scope</strong> – I only had seven weeks to complete this project so I narrowed the scope to what I could realistically accomplish</li>
										<li><strong>Designed a foundation</strong> – I focused on building a foundation, which focused on the core features of planning and collaboration</li>
										<li><strong>Recipes aren’t necessarily Meals</strong> – To keep it simple, currently a meal consists of a single recipe within the app. However, users may make multiple recipes or want to add other items to a meal</li>
										<li><strong>Having a shared grocery list is crucial</strong> – During my user interviews I learned how important a shared grocery list was for households to collaborate. This led me to focus more on this feature</li>
									</ul>
									<h2>Next steps</h2>
									<p>My next steps, if I were to keep working on this project, would be to continue to iterate and test. I would review my journey maps and make sure I was focusing on the primary pain points. Then, the next step would be to create a minimal viable product so that I can start gathering real usage data to inform my decisions.</p>
									<p>Some of my ideas for the future:</p>
									<ul>
										<li>Explore integrations, such as with Trader Joes to assign frozen meals to a plan</li>
										<li>Expand on collaboration features, such as identifying who added recipes or items to the list</li>
										<li>Allow for multiple recipes, or a recipe plus a few ingredients to be added to a meal, rather than just a single recipe</li>
										<li>Integrate with meal delivery services or grocery delivery</li>
									</ul>
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
											<li id="ref1"><a href="https://wett-capstone.notion.site/7a5fefc8d5bb47a7b0ffcf61e8ebb91b?v=ec8d1a30afd44c679b544b774a093f93">Project Plan</a></li>
											<li id="ref2"><a href="https://docs.google.com/spreadsheets/d/1193OUA3Hsgzic37fLv2wl9dtaeks4pz51xVAFEA2s2Y/edit#gid=0">Competitive Analysis Matrix</a></li>
											<li id="ref3"><a href="https://www.figma.com/file/a0sOcGNjX6K1OBwynpWyfb/User-Interview-Analysis?type=whiteboard&node-id=0%3A1&t=tDA4F7MXjKvuL269-1">User Interview Affinity Map</a></li>
											<li id="ref4"><a href="https://www.figma.com/file/NPLl2txrhoyOUOOZiJqXZ2/Meal-Planning-App?type=design&node-id=204%3A1678&mode=design&t=7D2EB3TVx89hmFoK-1">Low-fidelity Prototypes</a></li>
											<li id="ref5"><a href="https://www.figma.com/file/NPLl2txrhoyOUOOZiJqXZ2/Meal-Planning-App?type=design&node-id=491%3A1690&mode=design&t=7D2EB3TVx89hmFoK-1">High-fidelity Prototypes</a></li>
											<li id="ref6"><a href="https://app.maze.co/report/Low-fi-Usability-Testing/xi3zjilkrqodul/intro">Low-fidelity Usability Test Maze Report</a></li>
											<li id="ref7"><a href="https://app.maze.co/report/High-fi-Usability-Testing/2pog0abillelnrg1/intro">High-fidelity Usability Test Maze Report</a></li>
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
