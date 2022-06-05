import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const PanelProjects = () => {
	// const history = useHistory();

	return (
		<section className="panel panel-projects">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={10} xl={12}>
						<h2>Featured Projects</h2>
						<Row className="justify-content-center">
							<Col xs={12} lg={6}>
								<Link to="/projects/gemini-memorial-designer">
									<article>
										<picture>
											<img src="/images/project-memorial-designer.png" alt="Gemini Memorial Designer" />
										</picture>
										<div className="title">
											<div className="year">2020</div>
											<h3>Gemini Memorial Designer</h3>
											<p>A visual design app for monument builders to design and quote in realtime</p>
										</div>
									</article>
								</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
export default PanelProjects;
