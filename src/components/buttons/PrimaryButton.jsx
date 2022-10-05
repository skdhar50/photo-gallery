const PrimaryButton = ({ title, type = "submit", classes }) => {
	return (
		<button
			type={type}
			className={`bg-[#36A1DE] text-white hover:bg-opacity-90 transition-colors duration-150 py-1.5 rounded font-medium ${classes}`}
		>
			{title}
		</button>
	);
};

export default PrimaryButton;
