import Sad from "../../assets/icons/sad.svg";
import Angry from "../../assets/icons/angry.svg";
import Haha from "../../assets/icons/haha.svg";
import Care from "../../assets/icons/care.svg";
import Wow from "../../assets/icons/wow.svg";

const FeedbackOptions = () => {
	return (
		<div className="flex justify-around items-center pb-2">
			<div className="border border-rose-500 rounded-full p-1">
				<img
					src={Wow}
					alt=""
					className="shrink-0 h-10 w-10 cursor-pointer hover:scale-125 transition duration-200"
				/>
			</div>
			<div className="border border-rose-500 rounded-full p-1">
				<img
					src={Care}
					alt=""
					className="shrink-0 h-10 w-10 cursor-pointer hover:scale-125 transition duration-200"
				/>
			</div>
			<div className="border border-rose-500 rounded-full p-1">
				<img
					src={Sad}
					alt=""
					className="shrink-0 h-10 w-10 cursor-pointer hover:scale-125 transition duration-200"
				/>
			</div>
			<div className="border border-rose-500 rounded-full p-1">
				<img
					src={Angry}
					alt=""
					className="shrink-0 h-10 w-10 cursor-pointer hover:scale-125 transition duration-200"
				/>
			</div>
			<div className="border border-rose-500 rounded-full p-1">
				<img
					src={Haha}
					alt=""
					className="shrink-0 h-10 w-10 cursor-pointer hover:scale-125 transition duration-200"
				/>
			</div>
		</div>
	);
};

export default FeedbackOptions;
