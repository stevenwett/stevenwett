import React from 'react';
import { Nav, Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import Header from '../components/Header';
import PanelProjects from '../components/PanelProjects';

class Projects extends React.Component {
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
			<div className="page page-projects">
				<Header route="/projects" />
				<div className="panel panel-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={6}>
								<h1>Projects</h1>
								<div className="subtitle">Case Studies</div>
							</Col>
						</Row>
					</Container>
				</div>
				<PanelProjects />
			</div>
		);
	}
}

export default Projects;
