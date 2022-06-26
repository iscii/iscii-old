import { Navbar, Container, Nav } from "react-bootstrap"; //react-bootstrap components
import "./index.scss";

const MainNav = () => {
	return (
		<Navbar className="mt-5" bg="dark" variant="dark" sticky="top">
			<Container>
				<Navbar.Brand href="/">Issac Zheng</Navbar.Brand>{" "}
				{/* eventually replace this with a vector logo (?) */}
				<Nav className="me-auto">
					<Nav.Link href="/projects">Projects</Nav.Link>{" "}
					{/* dropdown */}
					<Nav.Link href="/resume">Resume</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default MainNav;
