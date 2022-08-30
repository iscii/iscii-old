import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Home from "./components/Home";
import "./App.scss"; //includes bootstrap
//import logo from "./assets/logo.svg";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Home/>}/>
					<Route path="/projects" element={<Projects/>}/> {/* single page app -> hash links scroll to designated point */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
