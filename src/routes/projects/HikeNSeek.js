import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// import Slider from "react-slick";

class NewsOnSpotify extends React.Component {
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
		// const {
		// 	settings,
		// } = this.state;

		return (
			<div className="page page-work-single news-on-spotify">
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
									<h1>Field Guide Hiking App: Hike·n·Seek</h1>
									<div className="single-feature">
										<div className="ratio ratio-16x9">
											<picture>
												<source srcSet="/images/project-hike-n-seek.webp" type="image/webp" />
												<img src="/images/project-hike-n-seek.png" alt="Phones showing the Hike·n·Seek app" />
											</picture>
										</div>
									</div>
									<Row className="single-details">
										<Col xs={12} md={6} className="detail">
											<h2>Roles</h2>
											<p>UX Designer</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>Software</h2>
											<p>Figma, Notion, Zoom</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>UX Skills</h2>
											<p>Interview Guide, User Interviews, Wireframes, Prototypes, User Testing, Visual Design</p>
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
								<p>Hike·n·Seek is a mobile app that allows users to search for hiking trails and plan individual and group hikes. The app also features a digital field guide that helps users identify wildlife while hiking.</p>
								<p><strong>This case study is from a group project in my UX Design master's program where I worked with three other designers to plan and execute this project.</strong></p>
								<p>We started this project by investigating current problems that people routinely encounter while hiking and strove to discover how we might make the experience better. We ended up deciding to investigate the idea of combining the features from conventional hiking apps and digital field guide apps into a singular experience.</p>
								<p>We put together a research-based approach to understand hiking preferences and field guide usage, and to gain insight into what users would expect or want in a mobile app that allows them to manage their hike, as well as identify flora or fauna along the way.</p>
								<article className="callout hmw">
									<svg viewBox="0 0 14 23" height="14" width="23" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.0387 6.55506C13.0884 8.00255 12.6684 9.42666 11.8424 10.6163C11.0165 11.807 9.82775 12.6976 8.45435 13.157C8.45435 13.157 8.25747 13.2264 8.25747 13.3417V14.9139C8.25747 16.0032 7.37434 16.8864 6.28496 16.8864C5.19558 16.8864 4.31245 16.0032 4.31245 14.9139V13.3417C4.32182 12.4689 4.60496 11.6214 5.12151 10.9172C5.63806 10.2141 6.36183 9.69 7.19245 9.42C8.36526 9.02532 9.14058 7.90687 9.09745 6.66936C9.01307 5.15904 7.77464 3.97128 6.26161 3.95064C5.18722 3.95533 4.21222 4.57502 3.75097 5.54438C3.27752 6.52594 2.09816 6.93751 1.11649 6.465C0.134936 5.99155 -0.27664 4.81219 0.195872 3.83052C0.740552 2.68865 1.59555 1.72303 2.66331 1.04532C3.73206 0.367512 4.96957 0.00564 6.23427 0H6.28021C8.03427 0.0121877 9.71605 0.70032 10.9751 1.92094C12.2342 3.14249 12.9729 4.8019 13.0385 6.5551L13.0387 6.55506ZM8.26772 20.7986C8.26772 19.997 7.78491 19.2751 7.04521 18.9676C6.30459 18.6611 5.4524 18.8289 4.88521 19.3951C4.31802 19.9614 4.14647 20.8136 4.45208 21.5542C4.7577 22.2948 5.47863 22.7795 6.28021 22.7814C6.80615 22.7814 7.31147 22.5733 7.68459 22.2011C8.05679 21.8298 8.26679 21.3255 8.26772 20.7986V20.7986Z" fill="#fff"/>
									</svg>
									<h3>Problem Statement</h3>
									<p>Outdoor enthusiasts want to understand the local plants and animals on their hikes. Because their hiking apps don’t have a field guide and their citizen science database apps don’t let them record their information, they’re not able to properly track what they’ve seen. <strong>This is a problem because they can’t remember what they’ve seen and where they saw it.</strong></p>
								</article>
								<h2>The Team</h2>
								<p>While we all contributed to the project as a whole, we each specialized and owned a part of this project. I was in charge of prototyping.</p>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-the-team.webp" type="image/webp" />
										<img src="/images/hike-n-seek-the-team.png" alt="Photos of the team" />
									</picture>
								</figure>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>User research</h2>
								<h3>Methodology</h3>
								<p>We conducted 10 remote moderated user interviews with users with the following demographics:</p>
								<ul>
									<li>6 men and 4 women</li>
									<li>Ages 32-65</li>
									<li>4 had used field guides</li>
									<li>Located across the United States</li>
								</ul>
								<p>We asked the participants about their hiking experiences, their familiarity with field guides, and what they look for in a hiking excursion. This exploratory user research allowed us to gain important insights from our potential target audience for this app and to better understand people’s needs and wants from a hiking app with field guide capabilities.</p>
								<h3>Research approach</h3>
								<p>We chose to do qualitative user research because we wanted to gain a broad understanding of the needs of our users. We wanted to better understand their current hiking habits, whether they have used a field guide, how they currently identify features on a hike, as well as other experiences that they may have while hiking and preparing for a hike.</p>
								<h3>Team Organization</h3>
								<p>We stayed organized by creating a Notion database to keep track of our interviews.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>High-level findings</h2>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-high-level-findings.webp" type="image/webp" />
										<img src="/images/hike-n-seek-high-level-findings.png" alt="High-level findings" />
									</picture>
									{/*<figcaption>Persona 1 – The Mountaineer</figcaption>*/}
								</figure>
								<h2>Key insights</h2>
								<ul>
									<li><strong>Simple and all-in-one</strong> –  Users want very simple design and interactions when using an app while out in nature. They don’t want to spend time digging through app features or other apps. The app needs to be straight forward, seamless, and with very few clicks.</li>
									<li><strong>Organized</strong> – People currently take lots of photos while being outside, but typically don’t go back and connect them and their location afterwards. There is a desire to have a more organized and streamlined process for remembering what they see while on a hike.</li>
									<li><strong>Social</strong> – Users want a social aspect of this app. The outdoor and hiking community tend to rely on each other for insight and recommendations, so a majority of the participants expressed the need for connecting with others within the app.</li>
									<li><strong>Get informed and educated</strong> – Users are very drawn towards the digital field guide aspect of this app concept. Many feel that it would help them be more aware and informed of what’s around them while on a hike. The app could help them identify wildlife when foraging, or keep them safer while outdoors by being able to identify dangerous plants or animals.</li>
								</ul>
								<div className="user-statements">
									<blockquote>
										<p>“I mean, just keep it simple, right? Don't make it convoluted. I mean, if people wanna nerd out on stuff, that's fine. But like if it's somebody who's just an average hiker going in there – which a lot of people are – it doesn't need that.”</p>
									</blockquote>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>Personas</h2>
								<p>We created two personas that captured two separate user types for people who may use this app.</p>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-persona-1.webp" type="image/webp" />
										<img src="/images/hike-n-seek-persona-1.png" alt="Persona 1 - The Mountaineer" />
									</picture>
									{/*<figcaption>Persona 1 – The Mountaineer</figcaption>*/}
								</figure>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-persona-2.webp" type="image/webp" />
										<img src="/images/hike-n-seek-persona-2.png" alt="Persona 2 - The Casual Hiker" />
									</picture>
								</figure>
								<h2>Storyboards</h2>
								<p>We created three scenarios to convey three separate potential features of the app. These stories were the foundation for the prototypes we were about to build.</p>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-scenario-1.webp" type="image/webp" />
										<img src="/images/hike-n-seek-scenario-1.png" alt="Scenario 1 – Find a trail based on recent flower sightings" />
									</picture>
								</figure>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-scenario-2.webp" type="image/webp" />
										<img src="/images/hike-n-seek-scenario-2.png" alt="Scenario 2 – Identify a tree while on a hike" />
									</picture>
								</figure>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-scenario-3.webp" type="image/webp" />
										<img src="/images/hike-n-seek-scenario-3.png" alt="Scenario 3 – Plan for a group hike" />
									</picture>
								</figure>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>Design system</h2>
								<p>Based on what we learned in our user interviews, we created a design system that was practical, as well as aesthetic. We chose to have this app be dark mode- and mobile-first to conserve battery life and be available on the go.</p>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-design-system-1.webp" type="image/webp" />
										<img src="/images/hike-n-seek-design-system-1.png" alt="Design system" />
									</picture>
								</figure>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-design-system-2.webp" type="image/webp" />
										<img src="/images/hike-n-seek-design-system-2.png" alt="Design system" />
									</picture>
								</figure>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>Usability testing</h2>
								<h3>Methodology</h3>
								<p>We conducted 5 virtual moderated usability tests where we presented the participants with 3 scenarios that pertained to our apps functionality.</p>
								<ul>
									<li>3 men, 2 women</li>
									<li>Ages 29 - 40</li>
									<li>Located around the United States</li>
								</ul>
								<h3>Objectives</h3>
								<ul>
									<li>Determine if users are able to successfully navigate to the different functionalities within the app (planning a hike and flora/fauna identification).</li>
									<li>Understand if users find the experience intuitive and helpful.</li>
									<li>Identify any gaps in the experience or if there are any points within the experience where the user is confused or needs clarification.</li>
								</ul>
								<h2>Key insights</h2>
								<h3>Scenario 2 - Identifying wildlife</h3>
								<ul>
									<li>Overall, users had some confusion with the functionality of the field guide filters as a identification option, and how they related to the search results.</li>
									<li>Users were confused about the “Skip” button.</li>
									<li>The Search box wasn’t clear that it functioned as an input field.</li>
									<li>Users gave a positive response to the camera being a tool for identification.</li>
								</ul>
								<div className="user-statements">
									<blockquote>
										<p>“It doesn’t really have any guidelines or instructions with a <em>skip</em> option ... when using a website, I will automatically use the search filter to find what I need.”</p>
									</blockquote>
									<blockquote>
										<p>“This is more what I’d be likely to do – make it faster.”</p>
									</blockquote>
								</div>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-before-after-1.webp" type="image/webp" />
										<img src="/images/hike-n-seek-before-after-1.png" alt="Before and after" />
									</picture>
									<figcaption>Based on the our usability tests, we made adjustments to the prototypes</figcaption>
								</figure>
								<h3>Scenario 3 - Planning a hike</h3>
								<ul>
									<li>The users had some hesitancy regarding the functionality of the "planning a group hike" feature. Users didn’t understand whether their action of inviting people to their hike was confirmed.  We identified opportunities for optimizations within this feature to make it more helpful by providing the user feedback.</li>
									<li>Users were uncertain whether the packing list was an individual list or a group list.</li>
								</ul>
								<div className="user-statements">
									<blockquote>
										<p>“How do I know if they accepted or not?”</p>
									</blockquote>
									<blockquote>
										<p> “I would want to see an RSVP option ... Also, if I go back into edit my hike, do I have to re-invite everyone?”</p>
									</blockquote>
								</div>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/hike-n-seek-before-after-2.webp" type="image/webp" />
										<img src="/images/hike-n-seek-before-after-2.png" alt="Before and after" />
									</picture>
									<figcaption>Based on the our usability tests, we made adjustments to the prototypes</figcaption>
								</figure>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>Impact</h2>
								<p>Overall, the layout and design is well received. Users like the clean interface and darker background, and are able to easily navigate throughout the app. By taking the feedback from our first round of usability testing, we made updates to the user flow of creating a group hike, and the identification feature. We then conducted a second usability test to determine if the updates were beneficial to the user. The impact of our updates were:</p>
								<ul>
									<li><strong>Identification</strong> – Users now understand the functionality surrounding the field guide identification feature.</li>
									<li><strong>Invite transparency</strong> – Users are now able to see the status of invitees of a planned group hike.</li>
									<li><strong>Ease of planning</strong> – Users can more easily adjust and edit the details of their planned group hike.</li>
								</ul>
								<h2>Next steps</h2>
								<p>During this project we learned an enormous amount about how people hike and what they're looking for in a digital field guide.</p>
								<ul>
									<li><strong>Continue research</strong> – Continue to research, understand, and test the functionality of the field guide database within the identification feature.</li>
									<li><strong>Add more functionality</strong> – Add more functionality to the hike planning feature including adding multiple trails, assigning packing list items to specific people, etc. </li>
									<li><strong>User-generated content</strong> – Explore user-generated content such as photos, ratings, and opinions of the trail(s).</li>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} lg={12} xl={10}>
								<h2>Prototypes</h2>
								<p>Below are the prototypes that I created for our usability testing. Feel free to play around with them!</p>
								<h3>Scenario 1 – Find a trail based on recent flower sightings</h3>
								<p><em>Now imagine it’s the weekend, and the weather is gorgeous. You decide you want to go on a hike to get some fresh air and see all the plants blooming now that it’s Spring. You want to search for local trails that have the most flowers and trees that would be in bloom this time of year so you can take pictures of them, and maybe discover something new!</em></p>
								<figure className="image-full">
									<div className="ratio ratio-4x3">
										<iframe title="Hike·n·Seek Figma Prototype" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FY6hA5WpB2zCSpylMJU1Y0R%2FHiking-App%3Fpage-id%3D527%253A4838%26type%3Ddesign%26node-id%3D527-5386%26viewport%3D424%252C-173%252C0.13%26t%3DNrgSMY8kRyg89ysu-1%26scaling%3Dcontain%26starting-point-node-id%3D711%253A20354" allowfullscreen></iframe>
									</div>
								</figure>
								<h3>Scenario 2 – Identifying wildlife</h3>
								<p><em>You went on a hike called Dragon’s Tooth last weekend. You enjoyed it and want to schedule another hike with a group of friends to show your friends how beautiful the trail was.</em></p>
								<figure className="image-full">
									<div className="ratio ratio-4x3">
										<iframe title="Hike·n·Seek Figma Prototype" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FY6hA5WpB2zCSpylMJU1Y0R%2FHiking-App%3Fpage-id%3D527%253A4838%26type%3Ddesign%26node-id%3D527-5415%26viewport%3D424%252C-173%252C0.13%26t%3DNrgSMY8kRyg89ysu-1%26scaling%3Dcontain%26starting-point-node-id%3D711%253A20354" allowfullscreen></iframe>
									</div>
								</figure>
								<h3>Scenario 3 – Planning a hike</h3>
								<p><em>Now imagine that you’re on a hike and you come across a tree that you’ve seen before, but you’re not sure what it is. You use the Hike·n·Seek app to identify it.</em></p>
								<figure className="image-full">
									<div className="ratio ratio-4x3">
										<iframe title="Hike·n·Seek Figma Prototype" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FY6hA5WpB2zCSpylMJU1Y0R%2FHiking-App%3Fpage-id%3D527%253A4838%26type%3Ddesign%26node-id%3D527-5444%26viewport%3D424%252C-173%252C0.13%26t%3DNrgSMY8kRyg89ysu-1%26scaling%3Dcontain%26starting-point-node-id%3D711%253A20354" allowfullscreen></iframe>
									</div>
								</figure>
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
		);
	}
}

export default NewsOnSpotify;
