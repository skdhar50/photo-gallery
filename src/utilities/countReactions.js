const countReactions = (feedbacks) => {
	let reactions = {
		wow: 0,
		care: 0,
		angry: 0,
		sad: 0,
		haha: 0,
	};

	feedbacks?.forEach((feedback) => {
		switch (feedback?.feedback) {
			case "wow":
				reactions.wow++;
				break;
			case "care":
				reactions.care++;
				break;
			case "angry":
				reactions.angry++;
				break;
			case "sad":
				reactions.sad++;
				break;
			case "haha":
				reactions.haha++;
				break;
			default:
				break;
		}
	});

    return reactions;
};

export default countReactions;
