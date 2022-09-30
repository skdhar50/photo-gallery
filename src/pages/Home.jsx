import ImageCard from "../components/cards/ImageCard";
import FeedbackModal from "../components/modals/FeedbackModal";
import Navigationbar from "../components/navigation/Navigationbar";
import Tag from "../components/Tag";

const Home = () => {
	return (
		<>
            <FeedbackModal />
			<Navigationbar />

			<div className="flex flex-col justify-center items-center mt-20">
				<div className="flex items-center gap-3 flex-wrap px-4">
					<Tag />
					<Tag />
					<Tag />
					<Tag />
					<Tag />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
					<ImageCard />
					<ImageCard />
					<ImageCard />
					<ImageCard />
					<ImageCard />
					<ImageCard />
					<ImageCard />
					<ImageCard />
					<ImageCard />
				</div>
			</div>
		</>
	);
};

export default Home;
