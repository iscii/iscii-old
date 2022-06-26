import { Navbar, Container, Nav } from "react-bootstrap"; //react-bootstrap components
import "./index.scss";

const LinkNav = () => {
	return (
		<Navbar className="mt-5" bg="dark" variant="dark" sticky="bottom">
			<Container>
				<Nav className="me-auto">
					<Nav.Link href="https://www.linkedin.com/in/issacz/">LinkedIn</Nav.Link>{" "}
					<Nav.Link href="https://github.com/iscii/iscii">GitHub</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default LinkNav;
