const Navigationbar = () => {
	return (
		<div className="fixed py-4 bg-white/90 w-full top-0 z-10 shadow-md md:px-12 flex items-center justify-between">
			<div className="">Logo</div>
			<div className="flex items-center gap-2 text-gray-600">
				<img
					src="https://randomuser.me/api/portraits/med/men/81.jpg"
					alt=""
					className="w-8 h-8 rounded-full object-cover"
				/>
				<p className="">Sanjoy Kumar Dhar</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6 ml-4 hover:cursor-pointer hover:text-rose-500"
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
