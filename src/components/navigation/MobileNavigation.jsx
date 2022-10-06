import { useSelector } from "react-redux";

const MobileNavigation = ({ onClose, isOpen, onLogout }) => {
	const { user } = useSelector((state) => state.auth);
	const { name, image } = user || {};

	return (
		<div className="">
			<div
				className={`${
					isOpen ? "bg-black/60 h-screen fixed right-0 top-0 z-50 w-full" : ""
				}`}
				onClick={onClose}
			></div>
			<div
				className={`bg-gray-50 absolute right-0 top-0 w-3/4 h-screen z-[60] ${
					isOpen ? "translate-x-0" : "translate-x-full"
				} ease-in-out duration-300`}
			>
				<div className="py-3 px-4 text-gray-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6"
						onClick={onClose}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
						/>
					</svg>
				</div>

				<div className="px-4">
					<div className="flex flex-col justify-center items-center space-y-2 border-b pb-2">
						<img
							src={image}
							alt={name}
							className="rounded-full object-cover h-[80px] w-[80px]"
						/>
						<p className="text-gray-600">{name}</p>
					</div>

					<div
						className="absolute flex gap-3 items-center px-6 bottom-0 border-t-2 bg-stone-50 w-full py-2.5 left-0 text-gray-600"
						onClick={onLogout}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
							/>
						</svg>
						Logout
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNavigation;
