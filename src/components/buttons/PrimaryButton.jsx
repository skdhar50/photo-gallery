const PrimaryButton = ({ title, disabled=false, type = "submit", classes }) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`bg-[#36A1DE] text-white hover:bg-opacity-90 transition-colors duration-150 py-1.5 rounded font-medium ${classes}`}
		>
			{title}
		</button>
	);
};

export default PrimaryButton;
