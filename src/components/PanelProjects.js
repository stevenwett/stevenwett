import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const PanelProjects = () => {
	// const history = useHistory();

	return (
		<section className="panel panel-projects">
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={10} xl={12}>
						<h2 className="visually-hidden">Featured Projects</h2>
						<Row className="justify-content-center">
							<Col xs={12} lg={6}>
								<Link to="/projects/mica-projects">
									<article>
										<picture>
											<img src="https://via.placeholder.com/2810x1902" alt="" />
										</picture>
										<div className="title">
											<div className="year">2022</div>
											<h3>MICA Projects</h3>
											<p>Projects that I completed throughout my UX Designer graducate program</p>
										</div>
									</article>
								</Link>
							</Col>
							<Col xs={12} lg={6}>
								<Link to="/projects/gemini-partner-portal">
									<article>
										<picture>
											<img src="https://via.placeholder.com/2810x1902" alt="" />
										</picture>
										<div className="title">
											<div className="year">2022</div>
											<h3>Custom Portal for Signage Partners</h3>
											<p>A customer portal with resources and the ability view past quotes and orders</p>
										</div>
									</article>
								</Link>
							</Col>
							<Col xs={12} lg={6}>
								<Link to="/projects/gemini-memorial-designer">
									<article>
										<picture>
											<img src="/images/project-memorial-designer.png" alt="Gemini Memorial Designer" />
										</picture>
										<div className="title">
											<div className="year">2020</div>
											<h3>Web App for Designing Bronze Plaques</h3>
											<p>A visual design web app for monument builders to design and quote bronze plaques</p>
										</div>
									</article>
								</Link>
							</Col>
							<Col xs={12} lg={6}>
								<Link to="/projects/gemini-truequote">
									<article>
										<picture>
											<img src="https://via.placeholder.com/2810x1902" alt="" />
										</picture>
										<div className="title">
											<div className="year">2018</div>
											<h3>Web App for Quoting Signs</h3>
											<p>A web app for sign shops to quote and purchase from the manufacturer</p>
										</div>
									</article>
								</Link>
							</Col>
							{/*<Col xs={12} lg={6}>
								<Link to="/projects/northfield-wifi">
									<article>
										<picture>
											<img src="" alt="" />
										</picture>
										<div className="title">
											<div className="year">2020</div>
											<h3>NorthfieldWiFi</h3>
											<p>A simplified website for a independent internet service provider that supports rural communities</p>
										</div>
									</article>
								</Link>
							</Col>*/}
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
export default PanelProjects;
