
import userIcon from "../../assets/userDemo.png"

const ImageCard = ({image}) => {
	// console.log(image)
  return (
		<div
			className={`bg-gray-300 rounded-sm drop-shadow-xl overflow-hidden relative hover:scale-105 transition-all duration-200`}
		>
			<div className="absolute top-0 right-0 left-0 bg-white/80 p-3 flex gap-3 shadow-lg">
				<img src={userIcon} alt="" className="shrink-0 rounded-full bg-gray-500 w-[40px] h-[40px]"></img>
				<div className="text-gray-500">
					<p className="text-xs">
						by <span className="font-medium text-sm">Sanjoy Kumar Dhar</span>
					</p>
					<p className="text-xs pt-1">on 22 Sep, 2022</p>
				</div>
			</div>
			<img
				src={image?.link}
				alt=""
				className="w-[280px] h-[380px] object-cover cursor-pointer"
			/>
			<div className="absolute text-gray-700 rounded-tl-xl drop-shadow-xl bg-white/80 right-0 bottom-6 py-1 px-3 w-2/4 flex items-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
					/>
				</svg>
				<p className="text-sm">32 feedbacks</p>
			</div>
		</div>
	);
}

export default ImageCard