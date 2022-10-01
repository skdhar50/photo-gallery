const Tag = ({ value, onTagChange }) => {
	return (
		<div
			className="px-6 py-1.5 bg-white rounded-xl border border-indigo-500 drop-shadow cursor-pointer hover:bg-indigo-100"
			onClick={() => onTagChange(value)}
		>
			{value}
		</div>
	);
};

export default Tag;
