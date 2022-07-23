import "./index.scss";

const Card = (props) => {
	/**
	 * !props
	 * *title (text): card title
	 * *desc (text): card description
	 * *link (text): card link
	 * *img (text): img link
	 * *tools (text): tools used for project
	 * *credits (text): credits (might make separate component for this)
	 */

	return (
		<div
			className={
				"icard bg-dark p-4 d-flex justify-content-center align-items-center flex-row-reverse"
			}
		>
			<div className={"icardimgctnr" + (props.img ? "" : " d-none")}>
				<a href={props.link} target="_blank">
					<img
					/* https://mdbootstrap.com/docs/b5/react/content-styles/hover-effects/#! */
						src={require("../../assets/images/" + (props.img ? props.img : "mai.jpg"))}
						alt={props.title}
					/>
				</a>
			</div>
			<div className="icardcaption d-flex flex-column justify-content-center align-items-center">
				{/* gridbox -> keep header and desc in same position across diff tabs */}
				<h1 className={"h-25 " + (props.link ? "icardtitle" : "")}>
					{/* make clickability more visible (some kinda text decor?)*/}
					<a className="text-decoration-none text-white" href={props.link} target="_blank">{props.title}</a>
				</h1>
				<div className="h-75 text-center fs-5">{props.desc}</div>
			</div>
		</div>
	);
};

export default Card;
