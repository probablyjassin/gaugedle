let messages = ref();

export function useLogs() {
	function getLogs() {
		fetch(`https://api.github.com/repos/probablyjassin/gaugedle/commits?per_page=3`)
			.then((response) => response.json())
			.then((commits) => {
				messages.value = commits.map((commit) => commit.commit.message);
			})
			.catch((error) => {
				console.error("Error fetching commit messages:", error);
			});
	}
	onMounted(() => {
		getLogs();
	});
	return {
		messages,
	};
}
