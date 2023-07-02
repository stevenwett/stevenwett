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
									<h1>News On Spotify</h1>
									<div className="single-feature">
										<div className="ratio ratio-16x9">
											<picture>
												<source srcSet="/images/project-news-on-spotify.webp" type="image/webp" />
												<img src="/images/project-news-on-spotify.png" alt="Phones showing the news feature on Spotify" />
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
											<p>Figma, Zoom</p>
										</Col>
										<Col xs={12} md={6} className="detail">
											<h2>UX Skills</h2>
											<p>Interview Guide, User Interviews, Wireframes, Prototypes, User Testing, Visual Design</p>
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
								<p>In my UX Research and UX Design classes, I interviewed seven people who listen to podcasts on Spotify to learn from their experiences.</p>
								<p>I found that most of the users had issues deciding on what to listen to. Over eight weeks I brainstormed, prototyped and tested a potential solution to help with this problem.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>The problem</h2>
								<p><strong>Spotify users have a difficult time deciding what to listen to.</strong> Discovering new shows can be time-consuming for the user. This is a problem because users generally want to listen to additional content, but may be indecisive and choose to not listen.</p>
								<h3>Kinds of Podcasts</h3>
								<Row className="kinds-of-podcasts">
									<Col xs={4}>
										<article className="selected">
										<svg width="55" height="36" viewBox="0 0 55 36" xmlns="http://www.w3.org/2000/svg">
											<path d="M50.26 0.0106855C49.1662 0.0471442 48.1297 0.505472 47.3745 1.29714C39.4161 9.27114 30.0052 17.3651 21.4732 25.6465L7.51449 15.1777C6.62386 14.4902 5.49369 14.1881 4.38422 14.3391C3.26964 14.4902 2.25916 15.0787 1.58729 15.9798C0.91021 16.8808 0.623743 18.011 0.795623 19.1205C0.96229 20.235 1.56645 21.235 2.47789 21.8913L19.2699 34.485V34.4902C20.9418 35.7402 23.2751 35.5735 24.7543 34.0944C33.5199 25.3132 44.1556 16.3917 53.301 7.22503C54.551 6.02191 54.926 4.1729 54.2541 2.57396C53.577 0.97503 51.9937 -0.0405719 50.2593 0.0114281L50.26 0.0106855Z" fill="#131313"/>
										</svg>

											<div>
												<h4>Timely</h4>
												<p>news, current events, politics</p>
											</div>
										</article>
									</Col>
									<Col xs={4}>
										<article>
											<div>
												<h4>Books & Series</h4>
												<p>released in chapters</p>
											</div>
										</article>
									</Col>
									<Col xs={4}>
										<article>
											<div>
												<h4>Shows</h4>
												<p>comedy, interviews</p>
											</div>
										</article>
									</Col>
								</Row>
								<p><strong>I focused my attention mostly on timely podcasts.</strong></p>
								<article className="callout hmw">
									<svg viewBox="0 0 14 23" height="14" width="23" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.0387 6.55506C13.0884 8.00255 12.6684 9.42666 11.8424 10.6163C11.0165 11.807 9.82775 12.6976 8.45435 13.157C8.45435 13.157 8.25747 13.2264 8.25747 13.3417V14.9139C8.25747 16.0032 7.37434 16.8864 6.28496 16.8864C5.19558 16.8864 4.31245 16.0032 4.31245 14.9139V13.3417C4.32182 12.4689 4.60496 11.6214 5.12151 10.9172C5.63806 10.2141 6.36183 9.69 7.19245 9.42C8.36526 9.02532 9.14058 7.90687 9.09745 6.66936C9.01307 5.15904 7.77464 3.97128 6.26161 3.95064C5.18722 3.95533 4.21222 4.57502 3.75097 5.54438C3.27752 6.52594 2.09816 6.93751 1.11649 6.465C0.134936 5.99155 -0.27664 4.81219 0.195872 3.83052C0.740552 2.68865 1.59555 1.72303 2.66331 1.04532C3.73206 0.367512 4.96957 0.00564 6.23427 0H6.28021C8.03427 0.0121877 9.71605 0.70032 10.9751 1.92094C12.2342 3.14249 12.9729 4.8019 13.0385 6.5551L13.0387 6.55506ZM8.26772 20.7986C8.26772 19.997 7.78491 19.2751 7.04521 18.9676C6.30459 18.6611 5.4524 18.8289 4.88521 19.3951C4.31802 19.9614 4.14647 20.8136 4.45208 21.5542C4.7577 22.2948 5.47863 22.7795 6.28021 22.7814C6.80615 22.7814 7.31147 22.5733 7.68459 22.2011C8.05679 21.8298 8.26679 21.3255 8.26772 20.7986V20.7986Z" fill="#fff"/>
									</svg>
									<h3>How Might We ...</h3>
									<p>How might we help the news junkie Spotify listener find the newest content so that they can feel informed?</p>
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
								<p>The primary audience for this project was news junkies who use Spotify.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>My Role</h2>
								<p><strong>I planned and executed this project.</strong> Throughout the project I received helpful feedback from my UX Design instructor and my peers. I made adjustments based on this feedback.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>Project scope</h2>
								<p><strong>Time was the biggest constraint.</strong> I completed this project during an eight week course where I provided my instructor with deliverables along the way. I am also working full-time, so my time was the biggest constraint.</p>
								<p>In addition, I had a tight schedule to recruit and interview four users who fit within the target audience.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>Process</h2>
								<h3>Sprint Map</h3>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/news-on-spotify-sprint-map.webp" type="image/webp" />
										<img src="/images/news-on-spotify-sprint-map.png" alt="User sprint map" />
									</picture>
									{/*<figcaption>Home and news page wireframes</figcaption>*/}
								</figure>
								<h3>Crazy 8s</h3>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/news-on-spotify-crazy-8s.webp" type="image/webp" />
										<img src="/images/news-on-spotify-crazy-8s.png" alt="Crazy 8s" />
									</picture>
									<figcaption>An exercise to brainstorm potential features and interaction</figcaption>
								</figure>
								<h3>User Flow</h3>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/news-on-spotify-user-flow.webp" type="image/webp" />
										<img src="/images/news-on-spotify-user-flow.png" alt="User flow" />
									</picture>
									<figcaption>How users will listen to episodes with the new feature</figcaption>
								</figure>
								<h3>Wireframes</h3>
								<p>After understanding the steps the user will take and brainstorming potential feature ideas, I created with low-fidelity wireframes to prepare to test this feature with users.</p>
								{/*<p>I received feedback from my instructor and peers and made adjustments.</p>*/}
								<figure className="image-full">
									<picture>
										<source srcSet="/images/news-on-spotify-wireframes-1.webp" type="image/webp" />
										<img src="/images/news-on-spotify-wireframes-1.jpg" alt="Home and news page wireframes" />
									</picture>
									<figcaption>Home and news page wireframes</figcaption>
								</figure>
								<h3>Prototypes</h3>
								<p>I created a working prototype following Spotify’s brand guide and tested the new feature with four users.</p>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/news-on-spotify-user-interview.webp" type="image/webp" />
										<img src="/images/news-on-spotify-user-interview.jpg" alt="Screenshot of me doing a usability test" />
									</picture>
									<figcaption>Remote usability testing via Zoom</figcaption>
								</figure>
								<h3>Guided Scenario</h3>
								<p>I recruited four Spotify users who identified as news junkies. I recorded their behavior as I guided them through a specific scenario with questions and tasks to perform.</p>
								<ul>
									<li>How might you use the “Your latest news” section?</li>
									<li>How do you expect this section to update?</li>
									<li>Adjust how this feed is curated</li>
								</ul>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/news-on-spotify-mid-fi-prototype.webp" type="image/webp" />
										<img src="/images/news-on-spotify-mid-fi-prototype.jpg" alt="Home and news page mid-fidelity prototypes" />
									</picture>
									<figcaption>Home and news page mid-fidelity prototypes</figcaption>
								</figure>
								<h3>Adjustments</h3>
								<p>During the user testing sessions there were some noticable usability problems. I iterated the design and resolved the issues.</p>
								<figure className="image-full">
									<picture>
										<source srcSet="/images/news-on-spotify-prototype-adjustments.webp" type="image/webp" />
										<img src="/images/news-on-spotify-prototype-adjustments.jpg" alt="Example of an adjustment made showing two mid-fidelity prototypes" />
									</picture>
									<figcaption>During the usability testing sessions, I found that with the left example people didn't know that the cards were swipe-able, but with the right example they did.</figcaption>
								</figure>
								<h3>User Statements</h3>
								<div className="user-statements">
									<blockquote>
										<p>“I think, for me, useful, interesting, easily navigable, makes sense within the existing design paradigm that I know from being a frequent Spotify user. And I think, it's actually a pretty great little widget.”</p>
									</blockquote>
									<blockquote>
										<p>“But when you put that blue ring, it's like that in my head triggers like, oh, the New York Times has recently uploaded a video that I need to watch.”</p>
									</blockquote>
									<blockquote>
										<p>“Oh, yeah, this is easier than what I was mentioning before with manually adding them to this list. So you can you know, heart on un-heart, whatever you want to be populated into this list.”</p>
									</blockquote>
								</div>
							</Col>
							{/*<Col xs={12} lg={12} xl={10}>
								<h3>Prototype Demo</h3>
								<figure className="image-full">
									<div className="ratio ratio-4x3">
										<iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVDcUqRWMG6Sq8eLonYDjVu%2FWett-%25E2%2580%2593-Foundations-of-UX-Design%3Fpage-id%3D0%253A1%26node-id%3D197%253A69%26viewport%3D358%252C111%252C0.16%26scaling%3Dscale-down%26starting-point-node-id%3D197%253A69" allowfullscreen></iframe>
									</div>
									<figcaption>News On Spotify Figma Prototype</figcaption>
								</figure>
							</Col>*/}
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>Results</h2>
								<p>New feature was received favorably by the target audience with some issues:</p>
								<ul>
									<li>Interactive sections need to be more obvious</li>
									<li>Some users didn’t fully understand the mapping between the episodes on the home tab and the episodes in the new Latest News section</li>
									<li>Media sources section looked too much like Instagram Stories which led them to have expectations that clicking them would play a video</li>
									<li>Some users had issues with the feed only displaying 24 hours of content</li>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={7}>
								<h2>Next steps</h2>
								<p>Continue to iterate and test with larger user testing pool.</p>
								<p>Create a working prototype that adjusts the episodes when the sources are changed. Get additional feedback to see if this works as the user intends or if there are further changes to the design. Some updates to test, include:</p>
								<ul>
									<li>Add a filter to adjust the time range</li>
									<li>Adjust the media sources by personalized recommendations</li>
									<li>Make media sources images less confusing</li>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel">
					<Container>
						<Row>
							<Col xs={12} lg={12} xl={10}>
								<h3>Slide Deck</h3>
								<figure className="image-full">
									<div className="ratio ratio-4x3">
										<iframe title="News on Spotify Figma Slide Deck" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FayI9htWSBxjK4CtQWnp4BC%2FUX-Design-Final-Case-Study%3Fpage-id%3D0%253A1%26node-id%3D59%253A156%26viewport%3D355%252C723%252C0.04%26scaling%3Dcontain" allowfullscreen></iframe>
									</div>
									<figcaption>News on Spotify case study Figma slide deck</figcaption>
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
		);
	}
}

export default NewsOnSpotify;
