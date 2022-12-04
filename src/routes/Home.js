import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: props.projects,
			settings: props.settings,
		};
	}

	componentDidMount() {
		if (!this.state.settings.debug) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}

	render() {
		const {
			projects
		} = this.state;

		return (
			<>
				<div className="page page-home">
					<Header route="/" />
					<div className="panel home-intro">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<div className="content">
										<h1>Nice to meet you, I'm Steven.</h1>
										<p>I’m a web developer and UX designer who is passionate about building digital experiences that people want to use. I prefer usable over flashy, care about delightful visual design, and strive to craft sites that are accessible for everyone.</p>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<section className="panel home-work">
						<h1 className="visually-hidden">Featured Work</h1>
						<Container>
							<Row>
								<Col xs={12} md={10} lg={12}>
									<div className="content">
										{projects.length > 0 ? (
											<div className="home-cards cards">
												{projects.slice(0, 2).map(project => (
													<article className="card" key={ project.slug }>
														<Link to={`/work/${ project.slug }`}>
															<div className="card-head">
																<div>{project.category === 'case-study' ? 'UX Case Study' : 'Website'}</div>
																<div className="year">{ project.year }</div>
															</div>
															<div className="card-image">
																<div className="ratio ratio-4x3">
																	<picture>
																		<img src={ project.image } alt={ project.name } />
																	</picture>
																</div>
															</div>
															<h1>{ project.name }</h1>
														</Link>
													</article>
												))}
												{projects.length > 2 ? (
													<Link to="/work" className="more-work" aria-label="More work examples">
														<svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
															<title>More work examples</title>
															<path d="M20.7071 8.97838C21.0976 8.58785 21.0976 7.95469 20.7071 7.56416L14.3431 1.2002C13.9526 0.809679 13.3195 0.809679 12.9289 1.2002C12.5384 1.59073 12.5384 2.22389 12.9289 2.61442L18.5858 8.27127L12.9289 13.9281C12.5384 14.3186 12.5384 14.9518 12.9289 15.3423C13.3195 15.7329 13.9526 15.7329 14.3431 15.3423L20.7071 8.97838ZM0.75 9.27127H20V7.27127H0.75V9.27127Z" fill="#DDAD02"/>
														</svg>
													</Link>
												) : null}
											</div>
										) : null}
									</div>
								</Col>
							</Row>
						</Container>
					</section>
				</div>
			</>
		);
	}
}

export default Home;
