const FeedbackOption = ({ selectedOption, option, handleSelect, img }) => {
	return (
		<div
			className={`border rounded-full p-1 ${
				selectedOption === option ? "border-rose-500" : "border-transparent"
			}`}
		>
			<img
				src={img}
				alt=""
				className={`shrink-0 h-10 w-10 cursor-pointer transition duration-200 ${
					selectedOption === option ? "" : "animate-bounce"
				}`}
				onClick={() => handleSelect(option)}
			/>
		</div>
	);
};

export default FeedbackOption;
