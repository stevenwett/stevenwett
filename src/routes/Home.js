import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import PanelProjects from '../components/PanelProjects';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		// const {} = this.state;

		return (
			<div className="page page-home">
				<Header route="/" />
				<div className="panel panel-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={6}>
								<h1>Steven Wett</h1>
								<div className="subtitle">Interaction Designer / Web Developer</div>
								<p className="large-text">Passionate about great design, stellar user experience, and building accessible websites</p>
							</Col>
						</Row>
					</Container>
				</div>
				<PanelProjects />
				<section className="panel panel-sites">
					<Container>
						<Row className="justify-content-center">
							<Col xs={12} md={10} lg={8} xl={6}>
								<Link to="/projects" className="panel-sites-content">
									<div>
										<h2>Projects</h2>
										<p>See a list of featured UX projects</p>
									</div>
									<div className="arrow-wrapper">
										<div className="arrow">
											<div className="arrow-top"></div>
											<div className="arrow-bottom"></div>
										</div>
									</div>
								</Link>
								<Link to="/work" className="panel-sites-content">
									<div>
										<h2>Professional Work</h2>
										<p>See a list of my development work</p>
									</div>
									<div className="arrow-wrapper">
										<div className="arrow">
											<div className="arrow-top"></div>
											<div className="arrow-bottom"></div>
										</div>
									</div>
								</Link>
								<Link to="/about" className="panel-sites-content">
									<div>
										<h2>About Steven</h2>
										<p>See my work experience and education</p>
									</div>
									<div className="arrow-wrapper">
										<div className="arrow">
											<div className="arrow-top"></div>
											<div className="arrow-bottom"></div>
										</div>
									</div>
								</Link>
							</Col>
						</Row>
					</Container>
				</section>
			</div>
		);
	}
}

export default Home;
