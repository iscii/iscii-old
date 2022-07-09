import { Tab, Tabs } from "react-bootstrap";
import Card from "../Card";
import Divider from "../Divider";
import "./index.scss";

const Projects = () => {
	return (
		<div className="imain">
			{/* Featured section?? (includes stuff I actually wanna show ppl) */}
			<Tabs
				defaultActiveKey="main"
				transition={true}
				id="uncontrolled-tab-example"
			>
				<Tab eventKey="main" title="Web Development">
					<Card
						main={true}
						title="Web Development"
						desc="Web Development projects from the high school junior days. Majorly proud of them all, have a look! Special thanks to Mr. Ivan Turner."
					/>
				</Tab>
				<Tab eventKey="1" title="Level 1">
					<Card
						title="Code Breaker"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="2" title="Level 2">
					<Card
						title="Match Game"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="3" title="Level 3">
					<Card
						title="Extreme Rock Paper Scissors"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="4" title="Level 4">
					<Card
						title="Two Layer Tic Tac Toe"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="5" title="Level 5">
					<Card
						title="Fast Food Register Simulator"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="6" title="Level 6">
					<Card
						title="Thirty One"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
				<Tab eventKey="7" title="Level 7">
					<Card
						title="Battleship"
						desc="Hello, this is going to be the description of the thing. Maybe I'll add a title too."
					/>
				</Tab>
			</Tabs>
			<Tabs
				defaultActiveKey="main"
				transition={true}
				id="uncontrolled-tab-example"
			>
				<Tab eventKey="main" title="Websites">
					<Card
						main={true}
						title="Websites"
						desc="Web projects, amateur (for now >:>)"
					/>
				</Tab>
				<Tab eventKey="isciiz" title="isciiz">
					<Card
						reverse={true}
						title="isciiz"
						desc="My portfolio website (hi!). Learning React and Bootstrap with this one. React-bootstrap, Sass, Firebase Hosting, Personal Git."
						/* include some credits */
					/>
				</Tab>
				<Tab eventKey="stevenshonorpledge" title="stevenshonorpledge">
					<Card
						reverse={true}
						title="stevenshonorpledge"
						desc="A typeracing website for our school's honor pledge. A great tool to deduce Stevens impostors. Can also be used to train. Firebase Firestore & Hosting, Personal Git"
					/>
				</Tab>
				<Tab eventKey="aster" title="Aster">
					<Card
						reverse={true}
						title="Aster"
						desc="A NYC high school club directory made in collaboration with several students across various high schools in the city. Jekyll, Firebase Firestore & Auth, Collaborative Git."
						/* include some credits */
					/>
				</Tab>
			</Tabs>
			
			{/* maybe like an arrow button pointing down to the next card group. click it and it will autoscroll.b */}
			<Tabs
				defaultActiveKey="main"
				transition={true}
				id="uncontrolled-tab-example"
			>
				<Tab eventKey="main" title="Games">
					<Card
						main={true}
						title="Games"
						desc="Some of my game projects, made in Unity2D."
					/>
				</Tab>
				<Tab eventKey="headache" title="headache">
					<Card
						title="headache"
						desc="Fun for the first three minutes till the game begins living up to its name. I apologize in advance."
					/>
				</Tab>
				<Tab eventKey="wtanl" title="wtanl">
					<Card
						title="We'll Think About a Name Later"
						desc="Unfinished game made with a great highschool friend of mine. Also quite cancerous."
						// https://www.linkedin.com/in/qi-jie-wu-a362ab208/
					/>
				</Tab>
			</Tabs>
			<Tabs
				defaultActiveKey="main"
				transition={true}
				id="uncontrolled-tab-example"
			>
				<Tab eventKey="main" title="Programs">
					<Card
						main={true}
						title="Programs"
						desc="Hello, this is the description for the discord bot"
					/>
				</Tab>
				<Tab eventKey="isciiBot" title="isciiBot">
					<Card
						reverse={true}
						title="Discord Bot"
						desc="Hello, this is the description for the discord bot"
					/>
				</Tab>
			</Tabs>
		</div>
	);
};

// cards. vertically nearly maxed, horizontally maybe 30% of page. projects. each category being a carousel maybe.

export default Projects;
