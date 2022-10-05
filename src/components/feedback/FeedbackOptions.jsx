import Sad from "../../assets/icons/sad.svg";
import Angry from "../../assets/icons/angry.svg";
import Haha from "../../assets/icons/haha.svg";
import Care from "../../assets/icons/care.svg";
import Wow from "../../assets/icons/wow.svg";
import { useState } from "react";
import FeedbackOption from "./FeedbackOption";
import { usePostFeedbackMutation } from "../../features/feedback/feedbackApi";

const FeedbackOptions = ({ photoId }) => {
	const [selectedOption, setSelectedOption] = useState("");
	const [postFeedback, { isLoading }] = usePostFeedbackMutation();
	const options = [
		{ name: "wow", img: Wow },
		{ name: "care", img: Care },
		{ name: "sad", img: Sad },
		{ name: "angry", img: Angry },
		{ name: "haha", img: Haha },
	];

	const handleSelect = (value) => {
		setSelectedOption(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		postFeedback({
			id: photoId,
			data: {
				photoId: photoId,
				feedback: selectedOption,
				user: {
					name: "Sanjoy Kumar Dhar",
					email: "sanjoy.dhar@gmail.com",
				},
				givenAt: Date.now(),
			},
		});
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-3">
			<div className="flex justify-around items-center pb-2">
				{options.map((option, index) => (
					<FeedbackOption
						key={index}
						handleSelect={handleSelect}
						option={option.name}
						img={option.img}
						selectedOption={selectedOption}
					/>
				))}
			</div>

			<button
				type="submit"
				disabled={selectedOption.length === 0 || isLoading}
				className="px-6 py-1 bg-cyan-600 rounded text-white hover:bg-opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed"
			>
				Send
			</button>
		</form>
	);
};

export default FeedbackOptions;
