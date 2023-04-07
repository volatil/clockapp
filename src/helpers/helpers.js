export const quotes = function () {
	const allquotes = [
		"That brain of mine is something more than merely mortal; as time will show.",
		"If you can’t give me poetry, can’t you give me poetical science?",
		"Religion to me is science and science is religion.",
		"The more I study, the more insatiable do I feel my genius for it to be.",
		"Your best and wisest refuge from all troubles is in your science.",
		"The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.",
		"Imagination is the Discovering Faculty, pre-eminently. It is that which penetrates into the unseen worlds around us, the worlds of Science.",
		"Mathematical science shows what is. It is the language of unseen relations between things. But to use and apply that language, we must be able to fully to appreciate, to feel, to seize the unseen, the unconscious.",
		"As soon as I have got flying to perfection, I have got a scheme about a steam engine.",
	];
	return allquotes;
};

export function randomnumber(min, max) {
	const numerorandom = Math.floor(Math.random() * (max - min + 1) + min);
	return numerorandom;
}
