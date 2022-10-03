const Tag = ({ value, onTagChange, isActive }) => {
	return (
		<div
			className={`px-4 md:px-6 py-0.5 md:py-1 text-sm md:text-base bg-white rounded-xl border border-indigo-500 drop-shadow cursor-pointer  ${
				isActive
					? "bg-indigo-700 text-white font-medium"
					: "hover:bg-indigo-100 text-gray-600"
			}`}
			onClick={() => onTagChange(value)}
		>
			{value}
		</div>
	);
};

export default Tag;
