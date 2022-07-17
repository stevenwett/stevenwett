import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const PanelProjects = ({projectsList, display}) => {
	const projects = projectsList.map((project, index) => {
		switch(display) {
			case 'cards':
				return (
					<Col xs={12} lg={6}>
						<Link to={project.link}>
							<article>
								<div className="ratio ratio-4x3">
									<picture>
										<img src={project.img} alt={project.imgAlt} />
									</picture>
								</div>
								<div className="title">
									<div className="year">{project.year}</div>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
								</div>
							</article>
						</Link>
					</Col>
				)
			case 'list':
				return (
					<Col>
						<Link to={project.link}>
							<article>
								{/*<div className="ratio ratio-4x3">
									<picture>
										<img src={project.img} alt={project.imgAlt} />
									</picture>
								</div>*/}
								<div className="title">
									<div className="year">{project.year}</div>
									<h3>{project.title}</h3>
									<p>{project.description}</p>
								</div>
							</article>
						</Link>
					</Col>
				)
		}
	});

	return (
		<section className="panel panel-projects">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={10} xl={12}>
						<h2 className="visually-hidden">Featured Projects</h2>
						<Row className={`justify-content-center project-display-${display}`}>
							{projects}
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
export default PanelProjects;
