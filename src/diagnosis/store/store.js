import { derived } from 'svelte/store';
import { authToken } from "../../auth/store/store"
import { getIssues } from "../api/endpoints"

export const issues = derived(authToken, ($authToken, set) => {
	if (!$authToken) return;
	getIssues({ authToken: $authToken }).then(response => {
		set(response)
	});
});
