import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
		const { projects } = this.state;

		return (
			<div className="page page-work">
				<Header route="/work" />
				<div className="panel intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={6}>
								<div className="content">
									<h1>Work</h1>
									<div className="title">UX Projects and Websites</div>
									<p>Featured UX projects and websites I’ve designed and launched for clients of Neuger and at my graduate program at MICA.</p>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<section className="panel work">
					<h1 className="visually-hidden">Featured Work</h1>
					<Container>
						<Row>
							<Col xs={12} md={10}>
								<div className="content">
									{projects.length > 0 ? (
											<div className="cards">
												{projects.map(project => (
													<article className="card" key={ project.slug }>
														<Link to={`/work/${ project.slug }`}>
															<div className="card-head">
																<div>{project.category === 'case-study' ? 'UX Case Study' : 'Website'}</div>
																<div className="year">{ project.year }</div>
															</div>
															<div className="card-image">
																<picture>
																	<img src={ project.image } alt={ project.name } />
																</picture>
															</div>
															<h1>{ project.name }</h1>
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
		);
	}
}

export default Work;
