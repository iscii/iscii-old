import "./index.scss";

const Card = (props) => {
	/**
	 * !props
	 * *main ({true}, {false (default)}): no card image
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
				"icard bg-dark p-5 d-flex justify-content-center align-items-center flex-row-reverse"
			}
		>
			<img
				/* https://mdbootstrap.com/docs/b5/react/content-styles/hover-effects/#! */
				className={(props.main ? "d-none" : "")}
				src={require("../../assets/images/mai.jpg")}
				alt="mai"
			/>
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
