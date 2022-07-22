import { Tab, Tabs } from "react-bootstrap";
import Card from "../Card";
import Divider from "../Divider";
import "./index.scss";

const Projects = () => {
	return (
		<div className="imain">
			{/* Featured section?? (includes stuff I actually wanna show ppl) */}
			{/* Tabs on the left for each category instead of carousel/scrolling. Replaces main tab too. */}
			{/* <div className="tabs">

			</div> */}
			<div className="icontent">
				<Tabs
					defaultActiveKey="main"
					transition={true}
					id="uncontrolled-tab-example"
					className="isidetab"
				>
					<Tab eventKey="main" title="Web Development">
						<Tabs
							defaultActiveKey="main"
							transition={true}
							id="uncontrolled-tab-example"
						>
							<Tab eventKey="main" title="Description">
								<Card
									title="Web Development"
									desc="Web Development projects from the junior high school days. All written in raw HTML, CSS & Javascript. Majorly proud of them all, have a look! Special thanks to Sir Ivan Turner, you molded my passion for programming."
									link="https://github.com/iscii/Web-Development-2019-2020"
								/>
							</Tab>
							<Tab eventKey="1" title="Level 1">
								<Card
									title="Code Breaker"
									desc="First project, you'd tell at first glance. Still pretty darn cool though I'll give it that."
									img={true}
									link="https://iscii.github.io/Web-Development-2019-2020/Projects/level%201%20-%20codebreaker/Lvl%201%20Proj%20Final%20v2%20(SUBMITTED%20ONE).html"
								/>
							</Tab>
							<Tab eventKey="2" title="Level 2">
								<Card
									title="Match Game"
									desc="Second game, learnt css. Used it as a last resort project for a hackathon since my team and I couldn't pump anything out in 24 hours. Judge said it was cool. Didn't win."
									img={true}
									link="https://iscii.github.io/Web-Development-2019-2020/Projects/level%202%20-%20matching%20game/Match%20Game-dark.html"
								/>
							</Tab>
							<Tab eventKey="3" title="Level 3">
								<Card
									title="Extreme Rock Paper Scissors"
									desc="This one was a pain in the ass to make, but satisfying as heck. If there's an issue with the game's beginning, my patch I totally remember pushing probably didn't go through for some reason, but I am too lazy to check as of right now."
									img={true}
									link="https://iscii.github.io/Web-Development-2019-2020/Projects/level%203%20-%20extreme%20rock%20paper%20scissors/index.html"
								/>
							</Tab>
							<Tab eventKey="4" title="Level 4">
								<Card
									title="Two Layer Tic Tac Toe"
									desc="This one was also a pain. Friggin love the UI though, it do be sexy. The enemy AI is not great, but the game works!"
									img={true}
									link="https://iscii.github.io/Web-Development-2019-2020/Projects/level%204%20-%20two%20layer%20tic%20tac%20toe/index.html"
								/>
							</Tab>
							<Tab eventKey="5" title="Level 5">
								<Card
									title="Fast Food Register Simulator"
									desc="Just mainly a display of CSS and background calculation-ability. Think the skills learnt making this would be useful in like, financial software, where options are preset and calculations are run in the background and then the frontend just displays results in a readable manner. Not that this is very readable."
									img={true}
									link="https://iscii.github.io/Web-Development-2019-2020/Projects/level%205%20-%20fast%20food%20register%20simulator/index.html"
								/>
							</Tab>
							<Tab eventKey="6" title="Level 6">
								<Card
									title="Thirty One"
									desc="This one was difficult but a pleasure to make. Definitely not optimized for every screen resolution and size, play fullscreen on a 21-inch 1080p monitor for best results. Works very well as far as I know, just read the instructions carefully because there's a lot to the game."
									img={true}
									link="https://iscii.github.io/Web-Development-2019-2020/Projects/level%206%20-%20thirty%20one/index.html"
								/>
							</Tab>
							<Tab eventKey="7" title="Level 7">
								<Card
									title="Battleship"
									desc="Truly a final project to end off the year. Displays all the logical functionality and object oriented programming that I have learnt in the year through a (self proclaimed) beautiful UI representing my core theme that I will eventually carry onto project designs over the rest of my life. Most proud of this one - it gives me a little nostalgia playing it with how good a time in my life it was when I'd made it."
									img={true}
									link="https://iscii.github.io/Web-Development-2019-2020/Projects/level%207%20-%20battleship/index.html"
								/>
							</Tab>
						</Tabs>
					</Tab>
					<Tab eventKey="websites" title="Websites">
						<Tabs
							defaultActiveKey="main"
							transition={true}
							id="uncontrolled-tab-example"
						>
							<Tab eventKey="main" title="Description">
								<Card
									title="Websites"
									desc="Web projects, amateur (for now >:>)"
								/>
							</Tab>
							<Tab eventKey="isciiz" title="isciiz">
								<Card
									title="isciiz"
									desc="My portfolio website (hi!). Learning React and Bootstrap with this one. React-bootstrap, Sass, Firebase Hosting, Personal Git."
									img={true}
									link="https://isciiz.web.app"
									/* include some credits */
								/>
							</Tab>
							<Tab eventKey="stevenshonorpledge" title="stevenshonorpledge">
								<Card
									title="stevenshonorpledge"
									desc="A typeracing website for our school's honor pledge. A great tool to deduce Stevens impostors. Can also be used to train. Firebase Firestore & Hosting, Personal Git"
									img={true}
									link="https://stevenshonorpledge.web.app/"
								/>
							</Tab>
							<Tab eventKey="aster" title="Aster">
								<Card
									title="Aster"
									desc="A NYC high school club directory made in collaboration with several students across various high schools in the city. Jekyll, Firebase Firestore & Auth, Collaborative Git."
									img={true}
									link="https://aster.nyc/"
									/* include some credits */
								/>
							</Tab>
						</Tabs>
					</Tab>
					<Tab eventKey="games" title="Games">
						{/* maybe like an arrow button pointing down to the next card group. click it and it will autoscroll.b */}
						<Tabs
							defaultActiveKey="main"
							transition={true}
							id="uncontrolled-tab-example"
						>
							<Tab eventKey="main" title="Description">
								<Card
									title="Games"
									desc="Some of my game projects, made in Unity2D."
									/* Build the games into WebGL and link those */
								/>
							</Tab>
							<Tab eventKey="headache" title="headache">
								<Card
									title="headache"
									desc="Fun for the first three minutes till the game begins living up to its name. I apologize in advance."
									img={true}
									link="https://github.com/iscii/headaches"
								/>
							</Tab>
							<Tab eventKey="wtanl" title="wtanl">
								<Card
									title="We'll Think About a Name Later"
									desc="Unfinished game made with a great highschool friend of mine. Also quite cancerous."
									img={true}
									// https://www.linkedin.com/in/qi-jie-wu-a362ab208/
								/>
							</Tab>
						</Tabs>
					</Tab>
					<Tab eventKey="programs" title="Programs">
						<Tabs
							defaultActiveKey="main"
							transition={true}
							id="uncontrolled-tab-example"
						>
							<Tab eventKey="main" title="Description">
								<Card
									title="Programs"
									desc="Some little programs I've built, typically for convenience. More like a miscellaneous category, but 'Programs' sounds more relevant."
								/>
							</Tab>
							<Tab eventKey="isciiBot" title="isciiBot">
								<Card
									title="isciiBot"
									desc="A discord bot. Scheduled and handled events before it was a feature on Discord. Usage and methodology are about as outdated as the code though. Also can randomize your day's schedule for you if you have too much time in your hands (guess when I built this feature)!"
									img={true}
									link="https://github.com/iscii/isciiBot"
								/>
							</Tab>
						</Tabs>
					</Tab>
				</Tabs>
			</div>
		</div>
	);
};

export default Projects;
