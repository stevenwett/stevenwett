import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import moment from 'moment';
import { Link } from 'react-router-dom';

import Header from '../components/Header';

import { Helmet } from 'react-helmet';

class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: props.settings,
		};
	}

	componentDidMount() {
		if (!this.state.settings.debug) {
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
	}

	render() {
		// const {} = this.state;
		// const currentYear = moment().year(),
		// 	yearsSince2015 = currentYear - 2015;
		const title = 'Blog | Steven Wett';
		const description = 'Articles on various organized thoughts of my own.';
		const url = 'https://stevenwett.com/blog';
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
				<div className="page page-blog">
					<Header route="/blog" />
					<div className="panel intro">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8}>
									<div className="content">
										<h1>Blog</h1>
										<div className="title">Organized Thoughts</div>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
					<div className="panel blog">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8}>
									<Link to="/blog/human-factors-mobile-banking">
										<article>
											<div className="date">December 6, 2022</div>
											<h2>The Human Factors of Mobile Banking</h2>
											<p>A usability inspection of three mobile banking apps and analyzing their human factors.</p>
										</article>
									</Link>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</>
		);
	}
}

export default Blog;
