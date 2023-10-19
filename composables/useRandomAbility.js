import seedrandom from "seedrandom";

const today = new Date().setHours(0, 0, 0, 0);;
let yesterday = new Date(today);
yesterday = today - (24 * 60 * 60 * 1000);

export default function useRandomAbility() {
	function generateDailyAbility(obj) {
		var myrng = seedrandom(today);
		return Object.keys(obj)[Math.floor(myrng() * Object.keys(obj).length)];
	}

	function yesterdayAbility(obj) {
		var myrng = seedrandom(yesterday);
		return Object.keys(obj)[Math.floor(myrng() * Object.keys(obj).length)];
	}

	function generateRandomAbility(obj) {
		return Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
	}

	return {
		generateDailyAbility,
		yesterdayAbility,
		generateRandomAbility,
	};
}
