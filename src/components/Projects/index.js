import { Tab, Tabs } from "react-bootstrap";
import Card from "../Card";
import Divider from "../Divider";
import "./index.scss";

const Projects = () => {
	return (
		<div className="imain">
			<Tabs
				defaultActiveKey="main"
				transition={true}
				id="uncontrolled-tab-example"
				className="border-0"
			>
				<Tab eventKey="main" title="Main">
					<Card
						title="Web Development"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="1" title="Level 1">
					<Card
						title="1"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="2" title="Level 2">
					<Card
						title="2"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="3" title="Level 3">
					<Card
						title="3"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="4" title="Level 4">
					<Card
						title="4"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="5" title="Level 5">
					<Card
						title="5"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="6" title="Level 6">
					<Card
						title="6"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="7" title="Level 7">
					<Card
						title="7"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
			</Tabs>
			<Divider />
			<Card
				reverse={true}
				title="Discord Bot"
				desc="Hello, this is the description for the discord bot"
				classes="rounded"
			/>
		</div>
	);
};

// cards. vertically nearly maxed, horizontally maybe 30% of page. projects. each category being a carousel maybe.

export default Projects;
