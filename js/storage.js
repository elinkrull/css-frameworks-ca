//local storage save function
export function save(key, value) {
	localStorage.setItem(key, JSON.stringify(value));
}

//local storage load function
export function load(key) {
	return JSON.parse(localStorage.getItem(key));
}