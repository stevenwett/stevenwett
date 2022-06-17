import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
	const history = useHistory();

	return (
		<header className="header">
			<Container>
				<Row>
					<Col md={5} className="order-2 order-sm-2 order-md-1">
						<Nav
							activeKey={props.route}
							onSelect={(selectedKey => history.push(selectedKey))}
						>
							<Nav.Item>
								<Nav.Link eventKey="/ux-projects">UX Projects</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="/work">Work</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="/about">About</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col md={2} className="logo-wrapper order-1 order-sm-1 order-md-2">
						<Link to="/">
							<svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="50" width="50">
								<title>Steven Wett</title>
								<path fill="#ffffff" d="M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0ZM16.18,31.3h-2l-2.46-8-2.52,8h-2L4.2,19.41H6.45l1.94,8,2.27-8h2.06l2.27,8,2-8h2.22Zm12.41,0H20.8V19.41h7.67v2H22.93v2.89h4v1.91h-4v3.14h5.66Zm13.72-9.92V31.3H40.18V21.38H35.46V31.3H33.33V21.38H29.81v-2h16v2Z"/>
							</svg>
						</Link>
					</Col>
					<Col md={5} className="order-3 order-sm-3 order-md-3">
						<nav className="contact-nav" id="contact">
							<h1 className="visually-hidden" id="contact-nav-heading">Contact Menu</h1>
							<ul role="menu" aria-labelledby="contact-nav-heading">
								<li className="linkedin" role="none">
									<a href="https://linkedin.com/in/stevenwett/" role="menuitem" aria-label="LinkedIn">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
											<title>LinkedIn</title>
											<path fill="#ffffff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
										</svg>
									</a>
								</li>
							</ul>
						</nav>
					</Col>
				</Row>
			</Container>
		</header>
	)
}
export default Header;
