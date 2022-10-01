import { useEffect, useState } from "react";
import ImageCard from "../components/cards/ImageCard";
import FeedbackModal from "../components/modals/FeedbackModal";
import Navigationbar from "../components/navigation/Navigationbar";
import Tag from "../components/Tag";
import { motion, AnimatePresence } from "framer-motion";
import { useGetPhotosQuery } from "../features/photos/photoApi";

const Home = () => {
	const { data: photos, isLoading, isError, error } = useGetPhotosQuery();
	const [tag, setTag] = useState("");
	const [filtered, setFiltered] = useState([]);
	const tags = ["", "history", "animal", "architecture", "nature", "fashion"];

	useEffect(() => {
		setFiltered(
			photos?.filter((photo) => (tag === "" ? true : photo.tag === tag))
		);
	}, [tag, photos]);

	const handleTagChange = (value) => {
		setTag(value === "all" ? "" : value);
	};

	return (
		<>
			{/* <FeedbackModal /> */}
			<Navigationbar />

			<div className="flex flex-col justify-center items-center mt-20">
				<div className="flex items-center gap-3 flex-wrap px-4">
					{tags.map((tag) => (
						<Tag
							key={tag}
							value={tag === "" ? "all" : tag}
							onTagChange={handleTagChange}
						/>
					))}
				</div>
				
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
				>
					<AnimatePresence>
						{filtered?.map((photo) => (
							<ImageCard key={photo.id} image={photo} />
						))}
					</AnimatePresence>
				</motion.div>
			</div>
		</>
	);
};

export default Home;
