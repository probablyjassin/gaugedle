import Fuse from 'fuse.js';
const { abilities } = useAbilities()
const guessable = useState("abilities-match");

export function useSearch(space, mode) {
    
    function search(term) {
        if (mode == "match") space = guessable.value

        const spaceKeys = computed(() => {
            return Object.keys(space).map((key) => ({ key, data: space[key] }))
        })
        const fuse = new Fuse(spaceKeys.value, {threshold: 0.6, includeScore: true, keys: ['key']})

        if (!term) {
            return space
        }

        const result = fuse.search(term);

        const filteredAbilities = Object.fromEntries(
            result.map(result => 
                [result.item.key, abilities.value[result.item.key]])
          );
        return filteredAbilities;
    }

    return {
        search,
    }
}