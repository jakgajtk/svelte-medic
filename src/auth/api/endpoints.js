import CryptoJS from 'crypto-js';

export const authorize = async () => {
	const computedHash = CryptoJS.HmacMD5(`${API_AUTH_URL}/login`, API_PASSWORD);
	const computedHashString = computedHash.toString(CryptoJS.enc.Base64);

	const response = await fetch(`${API_AUTH_URL}/login`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${API_USERNAME}:${computedHashString}`,
		},
	});
	return response.json();
};
