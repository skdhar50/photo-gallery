import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";

function App() {
	return (
		<AnimatePresence mode="wait">
			<div className="bg-cyan-100 pb-6 h-screen overflow-auto z-0">
				<Home />
			</div>
		</AnimatePresence>
	);
}

export default App;
