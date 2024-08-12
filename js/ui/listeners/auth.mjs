import { onAuth } from "../events/onAuth.mjs";

export function setAuthListener() {
	document.forms.auth.addEventListener("submit", onAuth);
}

