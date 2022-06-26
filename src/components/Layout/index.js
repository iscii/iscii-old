import { Outlet } from "react-router-dom";
import MainNav from "../MainNav";
import LinkNav from "../LinkNav";
import "./index.scss";

const Layout = () => {
	return (
		<div className="App">
			<MainNav />
			<div className="page text-white">
				<Outlet />
				{/* homepage */}
			</div>
			<LinkNav />
		</div>
	);
};

export default Layout;
