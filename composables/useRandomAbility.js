import seedrandom from "seedrandom";

const { abilities, excluded } = useAbilities()

excluded.forEach(ability => {
	delete abilities.value[ability]
});

const today = new Date()
let yesterday = new Date(today);
yesterday = today - (24 * 60 * 60 * 1000);

function getDate(offset) {
	let day = new Date(today);
	day.setDate(day.getDate() - offset);
	return `${day.getDate().toString().padStart(2, "0")}-${(day.getMonth() + 1).toString().padStart(2, "0")}-${day.getFullYear()}`;
}

export default function useRandomAbility() {
	
	function generateAbility(offset) {
		var myrng = seedrandom(getDate(offset));
		return Object.keys(abilities.value)[Math.floor(myrng() * Object.keys(abilities.value).length)];
	}
	
	function pastAbility(offset) {
		return generateAbility(offset);
	}
	
	function generateRandomAbility() {
		return Object.keys(abilities.value)[Math.floor(Math.random() * Object.keys(abilities.value).length)];
	}

	return {
		generateAbility,
		pastAbility,
		generateRandomAbility,
	};
}
