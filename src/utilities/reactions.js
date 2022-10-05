import Sad from "../assets/icons/sad.svg";
import Angry from "../assets/icons/angry.svg";
import Haha from "../assets/icons/haha.svg";
import Care from "../assets/icons/care.svg";
import Wow from "../assets/icons/wow.svg";

const getReactionIcon = (expression) => {
	switch (expression) {
		case "wow":
			return Wow;
		case "care":
			return Care;
		case "sad":
			return Sad;
		case "angry":
			return Angry;
		case "haha":
			return Haha;
		default:
			return;
	}
};

export default getReactionIcon;
