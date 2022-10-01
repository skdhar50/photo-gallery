import userIcon from "../../assets/userDemo.png";
import reactionIcon from "../../assets/icons/wow.svg";

const Feedback = () => {
  return (
		<div className="bg-white w-full px-4 py-1.5 border text-gray-700 flex items-center justify-between">
			<div className="flex items-center gap-4">
				<img src={userIcon} alt="" className="h-10 w-10 object-cover" />
				<div className="">
					<p className="text-gray-600">Sanjoy Kumar Dhar</p>
					<p className="text-xs pt-0.5 text-gray-500">23 Sep, 2022</p>
				</div>
			</div>
			<img src={reactionIcon} alt="" className="h-6 w-6" />
		</div>
	);
}

export default Feedback