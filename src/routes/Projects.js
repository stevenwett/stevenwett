import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

import Header from '../components/Header';
import PanelProjects from '../components/PanelProjects';

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: 'cards',
			projectsList: [
				{
					year: '2020',
					title: 'Web App for Designing Bronze Plaques',
					description: 'A visual design web app for monument builders to design and quote bronze plaques',
					img: '/images/project-memorial-designer.jpg',
					imgAlt: 'Gemini Memorial Designer screenshot',
					link: '/ux-projects/gemini-memorial-designer',
				},
				{
					year: '2022',
					title: 'Customer Portal for Sign Shops',
					description: 'A customer portal with resources and the ability view past quotes and orders',
					img: '/images/project-gemini-partner-portal.jpg',
					imgAlt: 'Gemini Partner Portal screenshot',
					link: '/ux-projects/gemini-partner-portal',
				},
				{
					year: '2017',
					title: 'Web App for Quoting Signs',
					description: 'A web app for sign shops to quote and purchase from the manufacturer',
					img: '/images/project-truequote.jpg',
					imgAlt: 'TrueQuote screenshot',
					link: '/ux-projects/gemini-truequote',
				},
				{
					year: '2022',
					title: 'MICA Projects',
					description: 'Projects that I completed throughout my UX Designer graducate program',
					img: '/images/project-mica.jpg',
					imgAlt: 'Final discovery report screenshot',
					link: '/ux-projects/mica-projects',
				},
			]
		}
	}

	componentDidMount() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	render() {
		const {
			projectsList,
			display
		} = this.state;

		return (
			<div className="page page-projects">
				<Header route="/ux-projects" />
				<div className="panel panel-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={6}>
								<h1>UX Projects</h1>
								<div className="subtitle">Project Case Studies</div>
								<p>Below are some featured UX projects that I have been a part of. In each example, I will aim to outline my role for the project.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<PanelProjects projectsList={projectsList} display={display} />
			</div>
		);
	}
}

export default Projects;
