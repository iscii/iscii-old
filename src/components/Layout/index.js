import { Outlet } from "react-router-dom";
import MyNav from "../MyNav";
import "./index.scss";

const Layout = () => {
	return (
		<div className="App">
			<MyNav />
			<div className="page text-white">
				<Outlet />
				{/* homepage */}
			</div>
		</div>
	);
};

export default Layout;
