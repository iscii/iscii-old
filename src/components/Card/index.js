import "./index.scss";

const Card = (props) => {
	/**
	 * !props
	 * *main ({true}, {false (default)}): no card image
	 * *reverse ({true}, {false (default)}): card image is on the right
	 * *title (text): card title
	 * *desc (text): card description
	 * *link (text): card link
	 */

	return (
		/* add tabbed components for projects */
		<div
			className={
				"icard bg-dark p-5 d-flex justify-content-center align-items-center " +
				(props.reverse ? "flex-row-reverse " : "") +
				props.classes
			}
		>
			<img
				className={"w-25 " + (props.main ? "d-none" : "")}
				src={require("../../assets/images/mai.jpg")}
				alt="mai"
			/>
			<div className="icardcaption w-75 d-flex flex-column justify-content-center align-items-center">
				<h1 className="h-25">{props.title}</h1>
				<div className="h-75 text-center fs-5">{props.desc}</div>
			</div>
		</div>
	);
};

export default Card;
