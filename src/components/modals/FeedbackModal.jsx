import Image from "../../assets/nature-2.jpg";
import Feedback from "../feedback/Feedback";
import FeedbackOptions from "../feedback/FeedbackOptions";
import userIcon from "../../assets/userDemo.png";
import reactionIcon from "../../assets/icons/care.svg";

const FeedbackModal = () => {
	return (
		<div className="bg-black/60 z-40 fixed  h-screen w-full flex flex-col justify-center items-center overflow-auto">
			<div className="bg-white relative z-40 p-4 md:p-6 w-full md:w-3/4 xl:w-2/4 h-fit rounded flex flex-col items-center md:flex-row gap-6 overflow-y-auto">
				<div className="absolute top-3 right-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6 hover:text-rose-500 cursor-pointer"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</div>
				<div className="shrink-0 space-y-4  md:h-full">
					<div className="flex items-center gap-4">
						<img src={userIcon} alt="" className="h-10 w-10 object-cover" />
						<div className="">
							<p className="text-gray-600">Sanjoy Kumar Dhar</p>
							<p className="text-xs pt-0.5 text-gray-500">23 Sep, 2022</p>
						</div>
					</div>
					<img
						src={Image}
						alt=""
						className="w-[350px] h-[400px] object-cover"
					/>

					<div className="flex justify-between items-center pt-2 px-2">
						<div className="flex items-center gap-2">
							<img src={reactionIcon} alt="" className="h-5 w-5" />
              <p className="text-gray-600 text-sm">162</p>
						</div>
						<div className="flex items-center gap-2">
							<img src={reactionIcon} alt="" className="h-5 w-5" />
              <p className="text-gray-600 text-sm">162</p>
						</div>
						<div className="flex items-center gap-2">
							<img src={reactionIcon} alt="" className="h-5 w-5" />
              <p className="text-gray-600 text-sm">162</p>
						</div>
						<div className="flex items-center gap-2">
							<img src={reactionIcon} alt="" className="h-5 w-5" />
              <p className="text-gray-600 text-sm">162</p>
						</div>
						<div className="flex items-center gap-2">
							<img src={reactionIcon} alt="" className="h-5 w-5" />
              <p className="text-gray-600 text-sm">162</p>
						</div>
					</div>
				</div>
				<div className="md:flex-grow w-full space-y-4">
					<div className="space-y-3">
						<p className="text-gray-600 text-lg tracking-wider border-b border-gray-200 pb-1 mb-4">
							Give your feedback
						</p>
						<FeedbackOptions />
						<button className="px-6 py-1 bg-cyan-600 rounded text-white hover:bg-opacity-90">
							Send
						</button>
					</div>
					<div className="bg-gray-50 w-full border max-h-[300px] md:max-h-[350px] px-2 md:px-4 py-2 overflow-y-auto space-y-3">
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
						<Feedback />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedbackModal;
