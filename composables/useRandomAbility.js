import seedrandom from "seedrandom";

const today = new Date().setHours(0, 0, 0, 0);;
let yesterday = new Date(today);
yesterday = today - (24 * 60 * 60 * 1000);

export default function useRandomAbility(obj) {
	function getDate(offset) {
		let day = new Date(today);
		day.setDate(day.getDate() - offset);
		return `${day.getDate().toString().padStart(2, "0")}-${(day.getMonth() + 1).toString().padStart(2, "0")}-${day.getFullYear()}`;
	}
	
	function generateAbility(offset) {
		var myrng = seedrandom(getDate(offset));
		return Object.keys(obj)[Math.floor(myrng() * Object.keys(obj).length)];
	}
	
	function pastAbility(offset) {
		return generateAbility(offset);
	}
	
	function generateRandomAbility() {
		return Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
	}

	return {
		generateAbility,
		pastAbility,
		generateRandomAbility,
	};
}
