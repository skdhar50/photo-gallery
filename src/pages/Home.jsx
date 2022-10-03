import { useEffect, useState } from "react";
import ImageCard from "../components/cards/ImageCard";
import FeedbackModal from "../components/modals/FeedbackModal";
import Navigationbar from "../components/navigation/Navigationbar";
import Tag from "../components/Tag";
import { motion, AnimatePresence } from "framer-motion";
import { useGetPhotosQuery } from "../features/photos/photoApi";

const Home = () => {
	const { data: photos, isLoading, isError, error } = useGetPhotosQuery();
	const [selectedTag, setSelectedTag] = useState("");
	const [feedbackModal, setFeedbackModal] = useState(false);
	const [id, setId] = useState(undefined);
	const [filtered, setFiltered] = useState([]);
	const tags = ["", "history", "animal", "architecture", "nature", "fashion"];

	useEffect(() => {
		setFiltered(
			photos?.filter((photo) =>
				selectedTag === "" ? true : photo.tag === selectedTag
			)
		);
	}, [selectedTag, photos]);

	const handleTagChange = (value) => {
		setSelectedTag(value === "all" ? "" : value);
	};

	const handleFeedbackModal = (value) => {
		setId(value);
		setFeedbackModal((prev) => !prev);
	};

	return (
		<>
			{/* {feedbackModal && ( */}
			<AnimatePresence mode="wait">
				{feedbackModal && (
					<FeedbackModal
						isShow={feedbackModal}
						onModalClose={handleFeedbackModal}
						id={id}
					/>
				)}
			</AnimatePresence>
			{/* )} */}
			<Navigationbar />

			<div className="flex flex-col justify-center items-center mt-20">
				<div className="flex items-center gap-3 flex-wrap px-4">
					{tags.map((tag, index) => (
						<Tag
							key={index}
							value={tag === "" ? "all" : tag}
							isActive={tag === selectedTag}
							onTagChange={handleTagChange}
						/>
					))}
				</div>

				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
				>
					{filtered?.map((photo) => (
						<ImageCard
							key={photo.id}
							image={photo}
							onModalOpen={handleFeedbackModal}
						/>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default Home;
