import { Outlet } from "react-router-dom";
import MainNav from "../MainNav";
//import Footer from "../Footer";
import "./index.scss";

const Layout = () => {
	return (
		<div className="App">
			<MainNav />
			<Outlet />
		</div>
	);
};

export default Layout;
