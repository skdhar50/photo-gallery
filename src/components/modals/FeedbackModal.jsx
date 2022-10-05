import Feedback from "../feedback/Feedback";
import FeedbackOptions from "../feedback/FeedbackOptions";
import { useGetPhotoQuery } from "../../features/photos/photoApi";
import { motion } from "framer-motion";
import { useGetFeedbacksQuery } from "../../features/feedback/feedbackApi";
import countReactions from "../../utilities/countReactions";
import getReactionIcon from "../../utilities/reactions";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const FeedbackModal = ({ onModalClose, id }) => {
	const { user } = useSelector((state) => state.auth);
	const [isFeedbacked, setIsFeedbacked] = useState(false);
	const {
		data: photo,
		isLoading: photoLoading,
		isError: photoIsError,
		error: photoError,
	} = useGetPhotoQuery(id);
	const {
		data: feedbacks,
		isLoading: feedbacksLoading,
		isError: feedbackIsError,
		error: feedbackError,
	} = useGetFeedbacksQuery(id);

	useEffect(() => {
		feedbacks?.forEach((feedback) => {
			if (feedback?.user?.email === user?.email) {
				setIsFeedbacked(true);
			}
		});
	}, [feedbacks, user]);

	const { link, tag, uploaded_at, uploaded_by } = photo || {};
	const { name, profile_photo } = uploaded_by || {};
	const reactions = countReactions(feedbacks);

	// conditionally setting the feedback content
	let feedbackContent = null;
	if (feedbacksLoading) {
		feedbackContent = (
			<div className="text-gray-500 flex justify-center items-center pt-3">
				Loading feedback ....
			</div>
		);
	} else if (!feedbacksLoading && feedbackIsError) {
		feedbackContent = <div className="">{feedbackError}</div>;
	} else if (!feedbacksLoading && !feedbackIsError && feedbacks.length === 0) {
		feedbackContent = (
			<div className="text-gray-500 flex justify-center items-center pt-3">
				No feedbacks found!
			</div>
		);
	} else {
		feedbackContent = feedbacks.map((feedback) => (
			<Feedback key={feedback.id} feedback={feedback} />
		));
	}

	return (
		<div className="bg-black/60 z-40 fixed  h-screen w-full flex flex-col justify-center items-center overflow-auto">
			<motion.div
				key="modal"
				initial={{ y: -1000, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 1000, opacity: 0 }}
				transition={{ duration: 0.4 }}
				className="bg-white relative z-40 p-4 md:p-6 w-full md:w-3/4 xl:w-2/4 h-[560px] rounded flex flex-col items-center md:flex-row gap-6 overflow-y-auto"
			>
				<div className="absolute top-3 right-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-6 h-6 hover:text-rose-500 cursor-pointer"
						onClick={() => onModalClose(undefined)}
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
						<img
							src={profile_photo}
							alt=""
							className="h-10 w-10 object-cover"
						/>
						<div className="w-full">
							<p className="text-gray-600">{name}</p>
							<div className="flex justify-between text-xs pt-1 w-full">
								<p className="text-xs text-gray-500">{uploaded_at}</p>
								<p className="px-3 py-0.5 bg-gradient-to-tr from-pink-400 to-pink-600 text-white rounded-full drop-shadow-lg antialiased font-medium">
									{tag}
								</p>
							</div>
						</div>
					</div>
					<img src={link} alt="" className="w-[350px] h-[400px] object-cover" />

					<div className="flex justify-between items-center pt-2 px-2">
						<div className="flex items-center gap-2">
							<img src={getReactionIcon("wow")} alt="" className="h-5 w-5" />
							<p className="text-gray-600 text-sm">{reactions?.wow}</p>
						</div>
						<div className="flex items-center gap-2">
							<img src={getReactionIcon("care")} alt="" className="h-5 w-5" />
							<p className="text-gray-600 text-sm">{reactions?.care}</p>
						</div>
						<div className="flex items-center gap-2">
							<img src={getReactionIcon("sad")} alt="" className="h-5 w-5" />
							<p className="text-gray-600 text-sm">{reactions?.sad}</p>
						</div>
						<div className="flex items-center gap-2">
							<img src={getReactionIcon("angry")} alt="" className="h-5 w-5" />
							<p className="text-gray-600 text-sm">{reactions?.angry}</p>
						</div>
						<div className="flex items-center gap-2">
							<img src={getReactionIcon("haha")} alt="" className="h-5 w-5" />
							<p className="text-gray-600 text-sm">{reactions?.haha}</p>
						</div>
					</div>
				</div>
				<div className="w-full h-[calc(100%-40px)] flex flex-col space-y-4">
					{!isFeedbacked && (
						<div className="space-y-3">
							<p className="text-gray-600 text-lg tracking-wider border-b border-gray-200 pb-1 mb-4">
								Give your feedback
							</p>

							<FeedbackOptions photoId={id} />
						</div>
					)}
					<div className="bg-gray-50 flex-grow w-full border max-h-full px-2 md:px-4 py-2 overflow-y-auto space-y-3">
						{feedbackContent}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default FeedbackModal;
