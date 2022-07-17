import React from 'react';
import Header from '../components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Work extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projectSearch: null,
			industryOptionSelected: '',
			projectsList: [
				{
					slug: 'duetsbygemini',
					name: 'Duets By Gemini',
					description: 'A website for a brand of Gemini, a signage manufacturing company headquartered in Minnesota with locations across North America',
					industries: [
						'industrial',
						'business-to-business',
					],
					features: [
						'WooCommerce integration',
					],
					imageSrc: 'duets-by-gemini.jpg',
					imageWebpSrc: 'duets-by-gemini.webp',
					linkPretty: 'duetsbygemini.com',
					link: 'https://duetsbygemini.com/',
				},
				{
					slug: 'engageprint',
					name: 'Engage Print',
					description: 'A website for a commercial printing company in Minnesota',
					industries: [
						'industrial',
						'professional-services',
						'business-to-business',
					],
					features: [
						'File upload feature',
						'Job listings',
					],
					imageSrc: 'engage-print.jpg',
					imageWebpSrc: 'engage-print.webp',
					linkPretty: 'engageprint.com',
					link: 'https://engageprint.com/',
				},
				{
					slug: 'gemini',
					name: 'Gemini Signage',
					description: 'A website for a signage manufacturing company headquartered in Minnesota with locations across North America',
					industries: [
						'industrial',
						'business-to-business',
					],
					features: [
						'Reseller lookup using Google Maps API',
						'Customer portal',
						'Custom React components'
					],
					imageSrc: 'gemini.jpg',
					imageWebpSrc: 'gemini.webp',
					linkPretty: 'geminimade.com',
					link: 'https://geminimade.com/',
				},
				{
					slug: 'inmotionrealty',
					name: 'InMotion Realty',
					description: 'A website for a Realtor in Minnesota',
					industries: [
						'realty',
					],
					features: [
						'IDX integration',
					],
					imageSrc: 'inmotion-realty.jpg',
					imageWebpSrc: 'inmotion-realty.webp',
					linkPretty: 'inmotionrealty.com',
					link: 'https://inmotionrealty.com/',
				},
				{
					slug: 'neuger',
					name: 'Neuger',
					description: 'A website for a full-service communication agency in Minnesota',
					industries: [
						'professional-services',
						'business-to-business',
					],
					features: [
						'Custom React components',
						'Job listings',
					],
					imageSrc: 'neuger.jpg',
					imageWebpSrc: 'neuger.webp',
					linkPretty: 'neuger.com',
					link: 'https://neuger.com/',
				},
				{
					slug: 'morningside',
					name: 'Morningside University',
					description: 'A website for a private college in Iowa',
					industries: [
						'education',
					],
					features: [
						'Custom Joomla! modules',
					],
					imageSrc: 'morningside.jpg',
					imageWebpSrc: 'morningside.webp',
					linkPretty: 'morningside.edu',
					link: 'https://www.morningside.edu/',
				},
				{
					slug: 'northfieldwifi',
					name: 'NorthfieldWiFi',
					description: 'A website for an internet service provider (ISP) in Minnesota and Wisconsin',
					industries: [
						'consumer-services',
						'business-to-business',
					],
					features: [
						'Animated SVGs',
						'Internet coverage map using Google Maps API',
						'Job listings',
					],
					imageSrc: 'northfieldwifi.jpg',
					imageWebpSrc: 'northfieldwifi.webp',
					linkPretty: 'northfieldwifi.com',
					link: 'https://northfieldwifi.com/',
				},
				{
					slug: 'northfieldschools',
					name: 'Northfield Public Schools',
					description: 'A website for a public school district in Minnesota',
					industries: [
						'education',
					],
					features: [
						'Custom calendar',
						'Staff sync and lookup',
					],
					imageSrc: 'northfieldschools.jpg',
					imageWebpSrc: 'northfieldschools.webp',
					linkPretty: 'northfieldschools.org',
					link: 'https://northfieldschools.org/',
				},
				{
					slug: 'gemini-partner-portal',
					name: 'Partner Portal',
					description: 'A customer portal for Gemini with resources and the ability view past quotes and orders',
					industries: [
						'industrial',
						'business-to-business',
					],
					features: [
						'Firebase Auth server integration',
						'Custom OAuth integration',
						'Integrations to ERP for quotes and orders',
						'Custom Canvas-based project designer',
						'Custom quoting app with realtime price calculations',
						'Tracking integration with UPS API',
						'Reseller lookup using Google Maps API',
						'Transactional emails with SendGrid',
					],
					imageSrc: 'gemini-partner-portal.jpg',
					imageWebpSrc: 'gemini-partner-portal.webp',
					linkPretty: 'geminimade.com/partner',
					link: 'https://geminimade.com/partner/',
					caseStudy: true,
					caseStudyLink: '/projects/gemini-partner-portal',
				},
				{
					slug: 'plainviewmilk',
					name: 'Plainview Milk Products Cooperative',
					description: 'A website for an agriculture cooperative in Minnesota and Wisconsin',
					industries: [
						'agriculture',
						'business-to-business',
					],
					features: [
						'Custom graphics',
						'Job listings',
					],
					imageSrc: 'plainview-milk.jpg',
					imageWebpSrc: 'plainview-milk.webp',
					linkPretty: 'plainviewmilk.com',
					link: 'https://plainviewmilk.com/',
				},
				{
					slug: 'porticohealthnet',
					name: 'Portico Healthnet',
					description: 'A website for a healthcare advocacy nonprofit in Minnesota',
					industries: [
						'healthcare',
						'consumer-services',
						'nonprofit',
					],
					features: [
						'Donation embed',
						'PCI compliance',
					],
					imageSrc: 'portico-healthnet.jpg',
					imageWebpSrc: 'portico-healthnet.webp',
					linkPretty: 'porticohealthnet.org',
					link: 'https://porticohealthnet.org/',
				},
				{
					slug: 'riggscat',
					name: 'Riggs Cat',
					description: 'A website for a Caterpillar dealership in Arkansas',
					industries: [
						'industrial',
						'agriculture',
						'business-to-business',
					],
					features: [
						'Syncing product details using Caterpillar API',
						'Locations lookup using Google Maps API',
					],
					imageSrc: 'riggs-cat.jpg',
					imageWebpSrc: 'riggs-cat.webp',
					linkPretty: 'riggscat.com',
					link: 'https://riggscat.com/',
				},
				{
					slug: 'gemini-truequote',
					name: 'TrueQuote',
					description: 'A web app for sign shops to quote and purchase from the Gemini, the manufacturer',
					industries: [
						'industrial',
						'business-to-business',
					],
					features: [
						'Backbone web app',
						'Realtime price calculations',
						'Custom functionality for sales users',
						'PDF downloads',
						'Transactional emails with SendGrid',
					],
					imageSrc: 'gemini-truequote.jpg',
					imageWebpSrc: 'gemini-truequote.webp',
					caseStudy: true,
					caseStudyLink: '/projects/gemini-truequote',
				},
				{
					slug: 'valleyviewmilk',
					name: 'Valley View Farms',
					description: 'A website for a dairy producer in Minnesota',
					industries: [
						'agriculture',
						'business-to-business',
					],
					features: [
						'Customer login and ordering',
						'Locations lookup using Google Maps API',
					],
					imageSrc: 'valley-view-milk.jpg',
					imageWebpSrc: 'valley-view-milk.webp',
					linkPretty: 'valleyviewmilk.com',
					link: 'https://valleyviewmilk.com/',
				},
				{
					slug: 'zieglercat',
					name: 'Ziegler CAT',
					description: 'A website for a Caterpillar dealership in Minnesota and Iowa',
					industries: [
						'industrial',
						'agriculture',
						'business-to-business',
					],
					features: [
						'Syncing product details using Caterpillar API',
						'Locations lookup using Google Maps API',
					],
					imageSrc: 'ziegler-cat.jpg',
					imageWebpSrc: 'ziegler-cat.webp',
					linkPretty: 'zieglercat.com',
					link: 'https://www.zieglercat.com/',
				},
			],
			industryOptions: [
				{
					key: 'agriculture',
					name: "Agriculture",
				},
				{
					key: 'business-to-business',
					name: 'Business-to-Business',
				},
				{
					key: 'consumer-services',
					name: 'Consumer Services',
				},
				{
					key: 'education',
					name: 'Education',
				},
				{
					key: 'healthcare',
					name: 'Healthcare',
				},
				{
					key: 'industrial',
					name: "Industrial",
				},
				{
					key: 'nonprofit',
					name: 'Nonprofit',
				},
				{
					key: 'professional-services',
					name: 'Professional Services',
				},
				{
					key: 'realty',
					name: 'Realty',
				},
			],
		};
	}

	componentDidMount() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}

	handleIndustryChange(value) {
		this.setState(
			{
				industryOptionSelected: value,
			},
			() => {
				window.scrollTo(0, 0);
			});
	}

	render() {
		const { projectsList, industryOptions, industryOptionSelected } = this.state;

		let filteredProjectsList = projectsList;

		if ('' !== industryOptionSelected) {
			filteredProjectsList = projectsList.filter((project) => {
				if (project.industries.length > 0 && project.industries.includes(industryOptionSelected)) {
					return true;
				}
				return false;
			})
		}

		let projects = null;

		const getIndustryName = (industryKey) => {
			if ('' === industryKey) {
				return false;
			}
			if (industryOptions.length > 0) {
				const industry = industryOptions.filter((item) => item.key === industryKey);
				if (industry[0].name) {
					return industry[0].name;
				}
			}
		}

		if (filteredProjectsList.length > 0) {
			projects = filteredProjectsList.map((project, index) => {
				return(
					<article className="project" id={project.slug} key={index}>
						<div className="inner">
							<div className="project-content">
								<h3>{project.name}</h3>
								{project.linkPretty
									? <p className="link"><a href={project.link}>{project.linkPretty}</a></p>
									: null}
								<p>{project.description}</p>
								{project.features.length > 0
									? (
										<ul>
											{project.features.map((item, index) => {
												return (
													<li key={index}>{item}</li>
												)
											})}
										</ul>
									) : null}
								{project.caseStudy
									? <footer>
										<Link className="button" title={`View case study for ${project.name}`} to={project.caseStudyLink}>View Case Study</Link>
									 </footer>
									: null}
							</div>
							<div className="project-image">
								<a className="image" href={project.link}>
									<picture>
										<source srcSet={`/images/screenshots/${project.imageWebpSrc}`} type="image/webp" />
										<img src={`/images/screenshots/${project.imageSrc}`} alt={project.name} />
									</picture>
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg>
								</a>
							</div>
						</div>
					</article>
				)
			});
		}

		let resultText = 'websites';

		if (1 === projects.length) {
			resultText = 'website';
		}

		return (
			<div className="page page-sites">
				<Header route="/work" />
				<div className="panel panel-intro">
					<Container>
						<Row>
							<Col xs={12} md={10} lg={8} xl={6}>
								<h1>Development Work</h1>
								<div className="subtitle">Websites and Web Apps</div>
								<p>Below is a list of notable projects that I have developed during my time at Neuger. For each of these projects, I played a major role in creating the website in collaboration with my coworkers and clients.</p>
							</Col>
						</Row>
					</Container>
				</div>
				<Container>
					<Row className="justify-content-center">
						<Col xs={12} md={10} lg={8} xl={6}>
							<div className="web-projects">
								<div className="filter">
									<div className="dropdown">
										<label htmlFor="web-projects-filter" className="visually-hidden">Filter</label>
										<div className="select-wrapper">
											<select
												value={industryOptionSelected}
												id="web-projects-filter"
												onChange={(e) => this.handleIndustryChange(e.target.value)}>
													<option
														key="all"
														value=""
													>
														All Industries
													</option>
												{industryOptions.length > 0
													? industryOptions.map((option, index) => {
														return (
															<option
																key={index}
																value={option.key}
															>
																{option.name}
															</option>
														)
													}) : null
												}
											</select>
										</div>
									</div>
								</div>
								<div className="projects">
									{null !== industryOptionSelected
										? (getIndustryName(industryOptionSelected)
											? <p className="results">
												Showing {projects.length} {resultText} categorized as &ldquo;{getIndustryName(industryOptionSelected)}&rdquo;
												<button
													className="clear"
													onClick={
														() => this.handleIndustryChange('')
													}
												>
													Show All
												</button>
												</p>
											: null
										) : null
									}
									{projects}
									{null !== industryOptionSelected
										? (getIndustryName(industryOptionSelected)
											? <p className="results">
												<button
													className="clear"
													onClick={
														() => this.handleIndustryChange('')
													}
												>
													Clear filters
												</button>
												</p>
											: null
										) : null
									}
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Work;
