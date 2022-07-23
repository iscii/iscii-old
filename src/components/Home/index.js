import "./index.scss";

const Home = () => {
	return (
		<div className="imain">
			{/* use a font w/ more personality */}
			<h1>Hi! I'm Issac</h1>
			<div className="fs-5">
				<div>
					{/* myself */}
					I currently attend Stevens Institute of Technology as a second-year Computer
					Science major. <br/> <br/>
					
					Passive activities are my ardor. <br/> <br/>
					{/* video games, japanese culture, manga, and anime, programming (especially things that'll make my 
					life slightly more convenient or my friends laugh), music (+ genres), and the guitar. 
					bonus points to drawing and fashion 

					Full-time family tech support (in resume cat?)
					*/}
					
					Quoth the summary in all my profiles, <br/>
					My ambition is to be a part of a team that brings to fruition full-dive virtual reality, 
					but for now I'm trying to survive school, find a place among society, and learn. <br/> <br/>
				</div>
				
				<div>
					{/* in small text, flex end */}
					Quotes are cheesy. Here's one I abide by &#40;after the Stevens Honor System, of course&#41;: <br/>
					"If you knew success was a certainty, what would you attempt to do?" - Vance Wade Hinds
				</div>
			</div>
			{/* image to right? or a collection of stuff that represents me */}
		</div>
	);
};

export default Home;
