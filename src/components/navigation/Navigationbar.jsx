import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";
import MobileNavigation from "./MobileNavigation";

const Navigationbar = () => {
	const { user } = useSelector((state) => state.auth) || {};
	const dispatch = useDispatch();

	const [sidebar, setSidebar] = useState(false);

	const handleSidebar = () => {
		setSidebar(prev => !prev);
	}

	const logout = () => {
		dispatch(userLoggedOut());
		localStorage.clear();
	};

	return (
		<div className="fixed py-4 px-4 bg-white/90 w-full top-0 z-10 shadow-md md:px-12 flex items-center justify-between">
			<div className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
				Logo
			</div>
			<div className="hidden md:flex items-center gap-2 text-gray-600">
				<img
					src={user?.image}
					alt=""
					className="w-8 h-8 rounded-full object-cover"
				/>
				<p className="">{user?.name}</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6 ml-4 hover:cursor-pointer hover:text-rose-500"
					onClick={logout}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
					/>
				</svg>
			</div>
			<div className="md:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
					onClick={handleSidebar}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>

				<MobileNavigation
					onClose={handleSidebar}
					isOpen={sidebar}
					onLogout={logout}
				/>
			</div>
		</div>
	);
};

export default Navigationbar;
