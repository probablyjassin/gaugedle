const { abilities } = useAbilities()

export function useUtils() {

    function pretty(input) {
        if (!input) return ''
		return input.replace(/([A-Z](?=[a-z\d])|\d+)/g, " $1").trim();
	}

    function singles(property) {
		return property.split(/,|-/).map((value) => value.trim());
	}

    return {
        pretty,
        singles,
    }
}