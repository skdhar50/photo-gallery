import moment from "moment";
import userIcon from "../../assets/userDemo.png";
import getReactionIcon from "../../utilities/reactions";

const Feedback = ({ feedback }) => {
	const { feedback: expression, user, givenAt } = feedback || {};
	return (
		<div className="bg-white w-full px-4 py-1.5 border text-gray-700 flex items-center justify-between">
			<div className="flex items-center gap-4">
				<img src={userIcon} alt="" className="h-10 w-10 object-cover" />
				<div className="">
					<p className="text-gray-600">{user?.name}</p>
					<p className="text-xs pt-0.5 text-gray-500">
						{moment(givenAt).fromNow()}
					</p>
				</div>
			</div>
			<img
				src={getReactionIcon(expression)}
				alt={feedback?.feedback}
				className="h-6 w-6"
			/>
		</div>
	);
};

export default Feedback;
