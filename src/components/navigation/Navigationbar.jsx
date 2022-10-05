import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "../../features/auth/authSlice";

const Navigationbar = () => {
	const { user } = useSelector((state) => state.auth) || {};
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(userLoggedOut());
		localStorage.clear();
	};

	return (
		<div className="fixed py-4 bg-white/90 w-full top-0 z-10 shadow-md md:px-12 flex items-center justify-between">
			<div className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
				Logo
			</div>
			<div className="flex items-center gap-2 text-gray-600">
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
		</div>
	);
};

export default Navigationbar;
