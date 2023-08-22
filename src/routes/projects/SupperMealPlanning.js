import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';

// import Slider from "react-slick";

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
													<img src="" alt="Phones showing the Supper app" />
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
									<p>This case study is for my capstone project for the <Link to="/about/">UX Design Master's program</Link> with Maryland Institute College of Art (MICA) that I completed in August, 2023.</p>
									<h2>Background</h2>
									<p>I'm a home cook and enjoying cooking meal for me and my partner throughout the week. However, I'm sure she would be the first to tell you that I'm terrible at planning meals. At times, she and I do meal plan and when we do we find that:</p>
									<ul>
										<li>We have an improved mood, relationshop, and healthier eating habits</li>
										<li>It is difficult to keep up with</li>
										<li>It takes time, mental and physical effort</li>
									</ul>
									<p>In order to explore the problem further, I conducted 2 preliminary discovery interviews to help me identify the problem.</p>
									<article className="callout hmw">
										<svg viewBox="0 0 14 23" height="14" width="23" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.0387 6.55506C13.0884 8.00255 12.6684 9.42666 11.8424 10.6163C11.0165 11.807 9.82775 12.6976 8.45435 13.157C8.45435 13.157 8.25747 13.2264 8.25747 13.3417V14.9139C8.25747 16.0032 7.37434 16.8864 6.28496 16.8864C5.19558 16.8864 4.31245 16.0032 4.31245 14.9139V13.3417C4.32182 12.4689 4.60496 11.6214 5.12151 10.9172C5.63806 10.2141 6.36183 9.69 7.19245 9.42C8.36526 9.02532 9.14058 7.90687 9.09745 6.66936C9.01307 5.15904 7.77464 3.97128 6.26161 3.95064C5.18722 3.95533 4.21222 4.57502 3.75097 5.54438C3.27752 6.52594 2.09816 6.93751 1.11649 6.465C0.134936 5.99155 -0.27664 4.81219 0.195872 3.83052C0.740552 2.68865 1.59555 1.72303 2.66331 1.04532C3.73206 0.367512 4.96957 0.00564 6.23427 0H6.28021C8.03427 0.0121877 9.71605 0.70032 10.9751 1.92094C12.2342 3.14249 12.9729 4.8019 13.0385 6.5551L13.0387 6.55506ZM8.26772 20.7986C8.26772 19.997 7.78491 19.2751 7.04521 18.9676C6.30459 18.6611 5.4524 18.8289 4.88521 19.3951C4.31802 19.9614 4.14647 20.8136 4.45208 21.5542C4.7577 22.2948 5.47863 22.7795 6.28021 22.7814C6.80615 22.7814 7.31147 22.5733 7.68459 22.2011C8.05679 21.8298 8.26679 21.3255 8.26772 20.7986V20.7986Z" fill="#fff"/>
										</svg>
										<h3>Problem statement</h3>
										<p>Time-constrained home cooks find it difficult to plan meals ahead of time and share responsibilities with others in their household. They want to cook at home, but without a plan they don’t have the ingredients on-hand and don’t want to run to the store at the last minute. <strong>Even when they try to plan their meals, they can’t decide what to make and find it difficult to collaborate with their household to execute the plan.</strong></p>
									</article>
									<h3>Strategy</h3>
									<p>For this project I was constrained to a timeline of 8 weeks, so right away I developed a project plan and organized tasks with deadlines in Notion. I devised the following high-level strategy to answer my problem:</p>
									<ol>
										<li><strong>Competitive analysis</strong> – Complete a competitive analysis matrix to understand the competitive landscape</li>
										<li><strong>User interviews</strong> – Create a screener and interview guide and recruit users. Then, interview each participant independently in a structured manner</li>
										<li><strong>Personas and journey maps</strong> – Analyze user interviews and organize the findings into user personas and journey maps</li>
										<li><strong>Prototypes and iterative improvements</strong> – This step is iterative. Start with low-fidelity prototypes, conduct usability tests and make adjustments. Upgrade the prototypes to high-fidelity and conduct another round of usability tests and make adjustments</li>
									</ol>
									<h3>Timeline</h3>
									<p></p>
									<h3>Competition</h3>
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
									<p>My primary methodology for user research for this project is to conduct user inteviews and analyze their responses. I organized the responses in a Notion database and analyzed by affinity mapping using FigJam.</p>
									<h3>User interviews</h3>
									<h4>Screener criteria</h4>
									<p>Find participants who fit my target audience with the selection criteria of users who:</p>
									<ul>
										<li>Cook at home</li>
										<li>In charge of planning meals</li>
										<li>Plan out multiple meals at a time</li>
									</ul>
									<h4>User interviews</h4>
									<p>I created an interview guide with uniform questions for each participant and conducted 12, 40-minute moderated user interviews via Zoom. This is an overview of my participants:</p>
									<ul>
										<li><strong>Diverse age range</strong> – Spanning from 21 to 71 years</li>
										<li><strong>Gender diversity</strong> – 5 male and 7 female</li>
										<li><strong>Varied household sizes</strong> – Smallest household size was 1 and largest was 5</li>
										<li><strong>Geographic representation</strong> – Located throughout midwest and eastern United States</li>
									</ul>
									<h3>Interview analysis</h3>
									<p>I asked each participant the same set of questions and affinity mapped the responses in order to draw conclusions and identify high-level findings.</p>
									<h4>High-level findings</h4>
									<p>I found that for most users, they:</p>
									<ul>
										<li><strong>Want a plan, but planning takes mental effort</strong> – They want to plan ahead, but find it to be a high-energy task</li>
										<li><strong>Are looking for meal inspiration</strong> – They’re looking to find new meals so that they’re not eating the same thing every week</li>
										<li><strong>Desire to share responsibilities</strong> – For households with multiple adults, they want to plan together</li>
										<li><strong>Want to avoid food waste</strong> – They’re looking to not have food go bad in the fridge and only buy what they need</li>
										<li><strong>Usually plan on the weekend</strong> – Most people plan on the weekends and plan at least 3-4 meals for the week</li>
										<li><strong>Don’t want planning to add extra work</strong> – They don’t want the plan to add extra work as they’re not interested in something that adds more work to their lives</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Personas</h2>
									<h3>Meal planner</h3>
								</Col>
								<Col xs={12} md={12} lg={10}>
									<article className="persona">
										<h4>Kelly – Proactive Meal Prepper</h4>
									</article>
									<article className="persona">
										<h4>Anna – Spontaneous Home Cook</h4>
									</article>
									<h4>Meal planner journey</h4>
									{/*<picture>
										<source srcSet="/images/" type="image/webp" />
										<img src="/images/" alt="" />
									</picture>*/}
								</Col>
								<Col xs={12} md={12} lg={10}>
									<h3>Planning assistant</h3>
									<article className="persona">
										<h4>Dave – Meal Planning Assistant</h4>
									</article>
									<h4>Planning assistant journey</h4>
									{/*<picture>
										<source srcSet="/images/" type="image/webp" />
										<img src="/images/" alt="" />
									</picture>*/}
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>Low-fidelity prototypes</h2>
									<p>I created simple prototypes that would let me perform usability tests with my screened applicants so that I can learn and adapt. I chose to start with low-fidelity, meaning the prototypes lacked color and most text, and focused on whether the user could understand basic components and flows.</p>
									<h3>Information architecture</h3>
									<ul>
										<li>Sitemap diagram</li>
										<li>Object-oriented planning: recipe, meal, list item</li>
									</ul>
								</Col>
								<Col xs={12} md={12} lg={10}>
									<figure className="image-full">
										{/*<picture>
											<source srcSet="/images/" type="image/webp" />
											<img src="/images/" alt="" />
										</picture>*/}
									</figure>
								</Col>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h3>Usability testing</h3>
									<h4>Screener criteria</h4>
									<p>Plan at least 1 meals a week in advance</p>
									<h4>Methodology</h4>
									<ul>
										<li>13 unmoderated usability tests using Maze</li>
										<li>2 moderated usability tests using Zoom</li>
									</ul>
									<h4>Objectives</h4>
									<ul>
										<li>Determine if users were successfully able to navigate the different functionalities within the app</li>
										<li>Better understand where users get confused or stuck</li>
										<li>Identify where I can improve the overall usability to make the app more clear and action-oriented</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10}>
									<h3>User stories</h3>
									<div className="accordion">
										<section className={`accordion-item${this.state.accordions.userStories.activeIndex === 0 ? ' active' : ''}`} id="userStories-0">
											<header>
												<button onClick={() => this.onAccordionClick('userStories', 0)}>
													<h4>Plan a meal</h4>
												</button>
											</header>
											<div className="accordion-content-wrapper">
												<div className="accordion-content">
													<p>content</p>
												</div>
											</div>
										</section>
										<section className={`accordion-item${this.state.accordions.userStories.activeIndex === 1 ? ' active' : ''}`} id="userStories-1">
											<header>
												<button onClick={() => this.onAccordionClick('userStories', 1)}>
													<h4>Vote on a meal</h4>
												</button>
											</header>
											<div className="accordion-content-wrapper">
												<div className="accordion-content">
													<p>content</p>
												</div>
											</div>
										</section>
										<section className={`accordion-item${this.state.accordions.userStories.activeIndex === 2 ? ' active' : ''}`} id="userStories-2">
											<header>
												<button onClick={() => this.onAccordionClick('userStories', 2)}>
													<h4>Don’t forget items</h4>
												</button>
											</header>
											<div className="accordion-content-wrapper">
												<div className="accordion-content">
													<p>content</p>
												</div>
											</div>
										</section>
										<section className={`accordion-item${this.state.accordions.userStories.activeIndex === 3 ? ' active' : ''}`} id="userStories-3">
											<header>
												<button onClick={() => this.onAccordionClick('userStories', 3)}>
													<h4>Decide while shopping</h4>
												</button>
											</header>
											<div className="accordion-content-wrapper">
												<div className="accordion-content">
													<p>content</p>
												</div>
											</div>
										</section>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					{/*<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>User stories</h2>
									<h3>Plan a Meal</h3>
									<ul>
										<li><strong>User type</strong>: Meal planner</li>
										<li><strong>Situation</strong>: Create a meal schedule for the week to reduce stress later in the week</li>
										<li><strong>User needs</strong>: See what meals they ate last week, see a schedule of meals for the week ahead, to quickly and easily assign meals to a specific date</li>
										<li><strong>User goal</strong>: Avoid unplanned meals by making a schedule</li>
									</ul>
								</Col>
								<Col xs={12} md={12} lg={10}>
									<figure className="image-full">
									</figure>
								</Col>
								<Col xs={12} md={10} lg={8} xl={7}>
									<div className="user-statements">
										<blockquote>
											<p>“I think I was confused on which day was tomorrow based on the app's perspective. Perhaps I was assuming today would be at the top and future dates would be below today.”</p>
										</blockquote>
									</div>
									<h4>Findings</h4>
									<ul>
										<li>Users didn’t understand the current day, making it difficult to have a reference point</li>
										<li>It wasn’t intuitive that the screen was scrollable</li>
										<li>The order of the calendar wasn’t clear and many users assumed down was for the future</li>
										<li>The popup and day selector were easily understood</li>
									</ul>
									<h4>Insights</h4>
									<ul>
										<li>Reverse the order of the days to be more intuitive</li>
										<li>Show part of a past meal so they know that the screen is scrollable to see past recipes</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h3>Vote on a meal</h3>
									<ul>
										<li><strong>User type</strong>: Meal planner</li>
										<li><strong>Situation</strong>: You are creating a meal plan for the week ahead. Others in the household want to be part of the plan to decide which meals they will make</li>
										<li><strong>User needs</strong>: To share ideas with others in the household, to get input from others, to be able to search and brainstorm ideas</li>
										<li><strong>User goal</strong>: Decide what meals to make in collaboration with others in the household</li>
									</ul>
								</Col>
								<Col xs={12} md={12} lg={10}>
									<figure className="image-full">
									</figure>
								</Col>
								<Col xs={12} md={10} lg={8} xl={7}>
									<div className="user-statements">
										<blockquote>
											<p>“I wasn't sure where to find my boards. I thought it would have been under Lists, but I went through pinning a recipe to view it again.”</p>
										</blockquote>
									</div>
									<h4>Findings</h4>
									<ul>
										<li>Most users intuitively knew how to save the meal</li>
										<li>Voting on meals was less understood</li>
										<li>Some users thought arrows were for sorting</li>
										<li>Inconsistent wording (pinned, favorite, saved, inspiration) was confusing for users</li>
									</ul>
									<h4>Insights</h4>
									<ul>
										<li>Simplify the language around saving recipes</li>
										<li>Make voting actions more clear</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h3>Don’t forget items</h3>
									<ul>
										<li><strong>User type</strong>: Planning assistant</li>
										<li><strong>Situation</strong>: They’ve already determined meals for the week ahead. They get to the store and want to easily find everything and not forget anything</li>
										<li><strong>User needs</strong>: To filter list by grocery store, to sort list by type or meal, to clearly know what’s left on the list</li>
										<li><strong>User goal</strong>: Don't forget ingredients while shopping</li>
									</ul>
								</Col>
								<Col xs={12} md={12} lg={10}>
									<figure className="image-full">
									</figure>
								</Col>
								<Col xs={12} md={10} lg={8} xl={7}>
									<div className="user-statements">
										<blockquote>
											<p>“”</p>
										</blockquote>
									</div>
									<h4>Findings</h4>
									<ul>
										<li>Users easily understood the filters</li>
										<li>Users easily understood how to check off items</li>
									</ul>
									<h4>Insights</h4>
									<ul>
										<li>Even with very little detail, users understood this task and very little needs to change</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h3>Decide while shopping</h3>
									<ul>
										<li><strong>User type</strong>: Planning assistant</li>
										<li><strong>Situation</strong>: They’re in the store shopping for ingredients and making buying decisions</li>
										<li><strong>User needs</strong>: To know what the item looks like, to have a high-level summary of what the item is and what it’s used for, to know whether the deal in the store is a good deal</li>
										<li><strong>User goal</strong>: Learn about products in the store to confidently make buying decisions</li>
									</ul>
								</Col>
								<Col xs={12} md={12} lg={10}>
									<figure className="image-full">
									</figure>
								</Col>
								<Col xs={12} md={10} lg={8} xl={7}>
									<div className="user-statements">
										<blockquote>
											<p>“”</p>
										</blockquote>
									</div>
									<h4>Findings</h4>
									<ul>
										<li>Some users had a difficult time knowing how to see item details</li>
										<li>2/3 of users said that they didn’t expect to see more details about each list item</li>
										<li>Once users knew that items had more details, they intuitively found where to find the connected meal</li>
									</ul>
									<h4>Insights</h4>
									<ul>
										<li>Make it more clear that items have more details</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h2>High-fidelity prototypes</h2>
									<h3>Design system</h3>
									<ul>
										<li>iOS 16 UI kit</li>
										<li>Components and icons</li>
										<li>Benefits of using an existing design system</li>
									</ul>
								</Col>
								<Col xs={12} md={12} lg={10}>
									<figure className="image-full">
									</figure>
								</Col>
								<Col xs={12} md={10} lg={8} xl={7}>
									<h3>Usability Testing</h3>
									<ul>
										<li><strong>Screener</strong> – Plan at least 1 meals a week in advance</li>
										<li><strong>Methodology</strong> – 8 unmoderated tests</li>
									</ul>
									<h4>Objectives</h4>
									<ul>
										<li>Determine if users were successfully able to navigate the different functionalities within the app</li>
										<li>Better understand where users get confused or stuck</li>
										<li>Identify where I can improve the overall usability to make the app more clear and action-oriented</li>
									</ul>
								</Col>
							</Row>
						</Container>
					</div>*/}
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
