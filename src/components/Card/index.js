import "./index.scss";

const Card = (props) => {
	/**
	 * !props
	 * *title (text): card title
	 * *desc (text): card description
	 * *link (text): card link
	 * *img (text): img link
	 * *used (text): tools used for project
	 * *credits (text): credits (might make separate component for this)
	 */

	return (
		/* add tabbed components for projects */
		<div
			className={
				"icard bg-dark p-4 d-flex justify-content-center align-items-center flex-row-reverse"
			}
		>
			<div className={"icardimgctnr" + (props.img ? "" : " d-none")}>
				{/* thinking of making the image a separate component to the right of the card, taking up 100% of height and having the same padding as the category tabs. this appeals to symmetry tho, not sure if that's what I want exactly... */}
				<img
					/* https://mdbootstrap.com/docs/b5/react/content-styles/hover-effects/#! */
					src={require("../../assets/images/mai.jpg")}
					alt="mai"
				/>
			</div>
			<div className="icardcaption d-flex flex-column justify-content-center align-items-center">
				<h1 className={"h-25 " + (props.link ? "icardtitle" : "")}>
					<a className="text-decoration-none text-white" href={props.link} target="_blank">{props.title}</a>
				</h1>
				<div className="h-75 text-center fs-5">{props.desc}</div>
			</div>
		</div>
	);
};

export default Card;
