import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

class Work extends React.Component {
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
				<div className="page page-work">
					<Header route="/" />
					<div className="panel intro">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<div className="content">
										<h1 class="visually-hidden">Steven Wett</h1>
										<div class="title">Steven Wett <span>is full-stack developer and UX designer.</span></div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<section className="panel home-work">
						<h1 className="visually-hidden">Featured Work</h1>
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8}>
									<div className="content">
										{projects.length > 0 ? (
											<div className="home-cards cards">
												{projects.map(project => (
													<article className="card" key={ project.slug }>
														<Link to={`/work/${ project.slug }`}>
															<div className="card-image">
																<div className="ratio ratio-4x3">
																	<picture>
																		<img src={ project.image } alt={ project.name } />
																	</picture>
																</div>
															</div>
															<div className="card-details">
																<span className="card-category">{project.category === 'case-study' ? 'UX Case Study' : 'Website'}</span>&nbsp;&nbsp;&middot;&nbsp;&nbsp;<span className="year">{ project.year }</span>
															</div>
															<h1>{ project.name }</h1>
															<p>{ project.text }</p>
														</Link>
													</article>
												))}
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

export default Work;
