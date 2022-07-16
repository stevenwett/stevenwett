import React from 'react';
import Header from '../../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProjectMICAProjects extends React.Component {
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
			<div className="page page-projects-single">
				<Header route="/ux-projects" />
				<div className="panel panel-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={6}>
								<p className="back"><Link to="/ux-projects">&lsaquo; UX Projects</Link></p>
								<h1>MICA UX Design</h1>
								<div className="title">Projects From My Graduate Program at MICA</div>
								<p className="date">Started the graduate program in 2022</p>
								<p></p>
							</Col>
						</Row>
					</Container>
				</div>
				{/*<div className="panel panel-project-single">
					<section>
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2></h2>
									<p></p>
								</Col>
							</Row>
						</Container>
					</section>
				</div>*/}
			</div>
		);
	}
}

export default ProjectMICAProjects;
