import { onAuth } from "../events/onAuth.js";

export function setAuthListener() {
	document.forms.auth.addEventListener("submit", onAuth);
}