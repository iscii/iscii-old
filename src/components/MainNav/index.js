import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Navbar, Container, Nav } from "react-bootstrap"; //react-bootstrap components
import "./index.scss";

library.add(fab);

const MainNav = () => {
	return (
		<Navbar bg="dark" variant="dark" sticky="top">
			<Container d-flex space-between>
				<Navbar.Brand href="/">Issac Zheng</Navbar.Brand>
				{/* eventually replace this with a vector logo (?) */}
				{/* make it so that the page you're on will be highlighted in the navbar */}
				<Nav className="me-auto">
					<Nav.Link href="/projects">Projects</Nav.Link>
					{/* <Nav.Link href="/resume">Resume</Nav.Link> */}
				</Nav>
				<Nav>
					<Nav.Link
						href="https://www.linkedin.com/in/issacz/"
						target="_blank"
					>
						<FontAwesomeIcon icon={["fab", "linkedin"]} className="fs-4" />
					</Nav.Link>
					<Nav.Link href="https://github.com/iscii" target="_blank">
						<FontAwesomeIcon icon={["fab", "github"]} className="fs-4" />
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default MainNav;
