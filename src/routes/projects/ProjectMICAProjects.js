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
								<p className="date">Started the program in 2022</p>
								<p>I am currently enrolled in a Master's of UX Design program at Maryland Institute College of Art. Below is some of the work that I have done throughout this program.</p>
								<h2>Overview</h2>
								<ul>
									<li><a href="#ux-research">UX Research</a></li>
								</ul>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="panel panel-project-single">
					<section id="ux-research">
						<Container>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h2>UX Research</h2>
									<p>For this class I chose an example client, devised a problem statement, and sought to validate it. Over eight weeks I analyzed the compition, screened and interviewed 7 people, and analyzed the data in a discovery report.</p>
									<ul>
										<li><a href="https://docs.google.com/document/d/1UgZJh3SXDzCz87K0GoXuaylFakP3SfdjEZXLrcUeVn8/edit?usp=sharing">User research plan</a></li>
										<li><a href="https://docs.google.com/spreadsheets/d/1lztUkVBJKjYjH-MOIU1vUVqza0Q9hM0FzS8F4GC7LaE/edit?usp=sharing">Competitive analysis</a></li>
										<li><a href="https://docs.google.com/document/d/1GwDK7auvt-IohCLDeoaFDC7Ul8IBnD18roNNFRHhrVk/edit?usp=sharing">User interview guide and screener</a></li>
									</ul>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h3>User Interview Analysis</h3>
									<p></p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} lg={10} xl={8}>
									<figure>
										<div className="ratio ratio-4x3">
											<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQqIOHAESI-xmTOn0WWPd3IWqyWlLeETjmyXf-rIaL1ldGAkwEFBdUzq4x-dVy35wWuX8ub3DysVk18/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1440" height="1440" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
										</div>
										<figcaption></figcaption>
									</figure>
								</Col>
							</Row>
							<Row>
								<Col xs={12} md={10} lg={8} xl={6}>
									<h3>Discovery Report</h3>
									<p></p>
								</Col>
							</Row>
							<Row>
								<Col xs={12} lg={10} xl={8}>
									<figure>
										<div className="ratio ratio-4x3">
											<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQU4H-lp7BQpon5wus8gtZGP572NhnIOKpfT3ZsA5u6JadmbWHa01iMfIu4Cb3n_GCvkHlV-nep9q_X/embed?start=false&loop=false&delayms=3000" frameborder="0" width="1920" height="1440" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
										</div>
										<figcaption></figcaption>
									</figure>
								</Col>
							</Row>
						</Container>
					</section>
				</div>
			</div>
		);
	}
}

export default ProjectMICAProjects;
