import { Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Header = (props) => {
	const history = useHistory();

	return (
		<header className="header">
			<Container>
				<Nav
					activeKey={props.route}
					onSelect={(selectedKey => history.push(selectedKey))}
				>
					<Nav.Item className="logo-wrapper">
						<Nav.Link eventKey="/work" className="nav-link-home">
							<svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" height="36" width="36">
								<title>Steven Wett</title>
								<path fill="#ffffff" d="M25,0A25,25,0,1,0,50,25,25,25,0,0,0,25,0ZM16.18,31.3h-2l-2.46-8-2.52,8h-2L4.2,19.41H6.45l1.94,8,2.27-8h2.06l2.27,8,2-8h2.22Zm12.41,0H20.8V19.41h7.67v2H22.93v2.89h4v1.91h-4v3.14h5.66Zm13.72-9.92V31.3H40.18V21.38H35.46V31.3H33.33V21.38H29.81v-2h16v2Z"/>
							</svg>
							<div className="home-link-active">
								<div className="indicator"></div>
							</div>
						</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="/work">Work</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="/blog">Blog</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey="/about">About</Nav.Link>
					</Nav.Item>
				</Nav>
			</Container>
		</header>
	)
}
export default Header;
