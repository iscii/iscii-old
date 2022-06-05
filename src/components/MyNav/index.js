import { Navbar, Container, Nav } from "react-bootstrap"; //react-bootstrap components
import "./index.scss";

const MyNav = () => {
	return (
		<Navbar className="mt-5" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">Issac Zheng</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="/projects">Projects</Nav.Link>
					<Nav.Link href="/resume">Resume</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default MyNav;
