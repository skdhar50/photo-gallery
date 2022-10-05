import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
	return (
		<div className="bg-cyan-100 pb-6 h-screen overflow-auto z-0">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route
					path="/home"
					element={
						<AnimatePresence mode="wait">
							<Home />
						</AnimatePresence>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
