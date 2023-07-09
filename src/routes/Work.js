import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

import { Helmet } from 'react-helmet';

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

		const title = 'Steven Wett';
		const description = 'Full-stack web developer and UX designer in Atlanta.';
		const url = 'https://stevenwett.com/';
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
				<div className="page page-work">
					<Header route="/work" />
					<div className="panel intro">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<div className="content">
										<h1 className="visually-hidden">Steven Wett</h1>
										<div className="title">Steven Wett <span>is a UX/UI designer and full-stack web developer.</span></div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel work-list">
						<Container>
							<Row>
								<Col xs={12} md={12} lg={12} xl={12}>
									<div className="content">
										{projects.length > 0 ? (
											<>
												<h2>UX Case Studies</h2>
												<div className="home-cards cards">
													{projects.map(project => (
														<article className="card" key={ project.slug }>
															<Link to={`/work/${ project.slug }`}>
																<div className="card-image">
																	<div className="ratio ratio-4x3">
																		<picture>
																			<source srcSet={ project.imageWebp } type="image/webp" />
																			<img src={ project.image } alt={ project.name } />
																		</picture>
																	</div>
																</div>
																<div className="card-details">
																	<span className="year">{ project.year }</span>
																</div>
																<h1>{ project.name }</h1>
																<p>{ project.text }</p>
															</Link>
														</article>
													))}
												</div>
											</>
										) : null}
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

export async function getServerSideProps() {
	return {
		props: {},
	};
}

export default Work;
