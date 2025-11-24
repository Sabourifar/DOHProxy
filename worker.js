// DOH Proxy by Sabourifar - GitHub: https://github.com/Sabourifar/DOHProxy
// Forwards DNS-over-HTTPS requests to Cloudflare. To use a different DoH provider, replace the https://cloudflare-dns.com/dns-query below.
export default {
	fetch(request) {
		const url = new URL(request.url);
		return fetch("https://cloudflare-dns.com" + url.pathname + url.search, {
			method: request.method,
			headers: request.headers,
			body: request.body,
		});
	},
};
