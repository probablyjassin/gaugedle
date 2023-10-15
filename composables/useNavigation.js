export default function useNavigation() {
	function navigate($event) {
		let current = parseInt($event.target.getAttribute("tabindex"));
		if ($event.key == "ArrowDown") {
			$event.preventDefault();
			if (document.querySelector(`[tabindex="${current + 1}"]`)) {
				document.querySelector(`[tabindex="${current + 1}"]`).focus();
			} else {
				document.querySelector('[tabindex="1"]').focus();
			}
		}
		if ($event.key == "ArrowUp") {
			$event.preventDefault();
			if (document.querySelector(`[tabindex="${current - 1}"]`)) {
				document.querySelector(`[tabindex="${current - 1}"]`).focus();
			}
		}
	}

	return {
		navigate,
	};
}
