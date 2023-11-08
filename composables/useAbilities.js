const abilities = ref({});
const excluded = ['FOCALORSBurst', 'FOCALORSSkill']
const unreleased = []

export function useAbilities() {

  async function fetchAbilities() {

    const data = await useFetch('/abilities.json')

    abilities.value = data.data.value
    unreleased.forEach(ability => {
      delete abilities.value[ability]
    });
  }

  fetchAbilities()

  return {
    abilities,
    excluded,
    unreleased,
  };
}
