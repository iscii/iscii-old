import { Tab, Tabs } from "react-bootstrap";
import Card from "../Card";
import "./index.scss";

const Projects = () => {
	return (
		<div className="imain">
			Projects {/* tabs and/or carousel */}
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
						classes="rounded-bottom"
					/>
				</Tab>
				<Tab eventKey="1" title="Level 1">
					1
				</Tab>
				<Tab eventKey="2" title="Level 2">
					2
				</Tab>
				<Tab eventKey="3" title="Level 3">
					3
				</Tab>
				<Tab eventKey="4" title="Level 4">
					4
				</Tab>
				<Tab eventKey="5" title="Level 5">
					5
				</Tab>
				<Tab eventKey="6" title="Level 6">
					6
				</Tab>
				<Tab eventKey="7" title="Level 7">
					7
				</Tab>
			</Tabs>

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
