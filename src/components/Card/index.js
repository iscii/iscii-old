import "./index.scss";

const Card = (props) => {
	/**
	 * !props
	 * *reverse ({true}, {false (default)}): card image is on the right
	 * *title (text): card title
	 * *desc (text): card description
	 */

	return (
		/* add tabbed components for projects */
		<div
			className={
				"icard bg-secondary p-5 d-flex justify-content-between align-items-center " +
				(props.reverse ? "flex-row-reverse " : "") +
				props.classes
			}
		>
			<img
				className="w-25"
				src={require("../../assets/images/mai.jpg")}
			/>
			<div className="icardcaption w-75 d-flex flex-column justify-content-center align-items-center">
				<h1 h-25>{props.title}</h1>
				<div h-75>{props.desc}</div>
			</div>
		</div>
	);
};

export default Card;
