// DOH Proxy by Sabourifar - GitHub: https://github.com/Sabourifar/DOHProxy
// Proxies DNS-over-HTTPS requests to Cloudflare | Parses URL safely with new URL() | Clones headers to prevent mutation | Forwards method, headers, and body to upstream DoH endpoint
const DOH_ENDPOINT = "https://cloudflare-dns.com/dns-query";
export default {
	async fetch(request) {
		const url = new URL(request.url);
		const headers = new Headers(request.headers);
		return fetch(DOH_ENDPOINT + url.search, {
			method: request.method,
			headers: headers,
			body: request.body,
		});
	},
};
