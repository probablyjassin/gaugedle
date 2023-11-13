const abilities = ref({});
const excluded = ['FOCALORSBurst', 'FOCALORSSkill']
const unreleased = []

async function fetchAbilities() {

  const data = await useFetch('/abilities.json')

  abilities.value = data.data.value
  unreleased.forEach(ability => {
    delete abilities.value[ability]
  });
}

fetchAbilities()

export function useAbilities() {

  return {
    abilities,
    excluded,
    unreleased,
  };
}
