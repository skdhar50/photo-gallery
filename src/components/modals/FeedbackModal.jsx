import Image from "../../assets/nature-2.jpg";
import Feedback from "../Feedback";

const FeedbackModal = () => {
  return (
    <div className="bg-black/60 z-[60] absolute h-screen w-full flex justify-center items-center">
        <div className="bg-white p-6 w-full md:w-3/4 rounded flex flex-col md:flex-row gap-6 overflow-auto">
            <div className="">
                <img src={Image} alt="" className="w-[350px] h-[400px] object-cover" />
            </div>
            <div className="bg-gray-50 border max-h-[400px] flex-grow px-4 pb-2 overflow-y-auto space-y-3">
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
  )
}

export default FeedbackModal