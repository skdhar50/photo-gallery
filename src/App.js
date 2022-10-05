import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import useAuthCheck from "./hooks/useAuthCheck";

function App() {
	const authChecked = useAuthCheck();

	return !authChecked ? (
		<div className="p-8">Checking Authentication...</div>
	) : (
		<div className="bg-cyan-100 pb-6 h-screen overflow-auto z-0">
			<Routes>
				<Route
					path="/"
					element={
						<PublicRoute>
							<Login />
						</PublicRoute>
					}
				/>
				<Route
					path="/register"
					element={
						<PublicRoute>
							<Register />
						</PublicRoute>
					}
				/>
				<Route
					path="/home"
					element={
						<PrivateRoute>
							<AnimatePresence mode="wait">
								<Home />
							</AnimatePresence>
						</PrivateRoute>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
