//local storage functions
export function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}
