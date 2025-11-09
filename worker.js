// DOH Proxy by Sabourifar - GitHub: https://github.com/Sabourifar/DOHProxy
// Forwards DNS-over-HTTPS requests to Cloudflare. To use a different DoH provider, replace the https://cloudflare-dns.com/dns-query below.
export default {
	async fetch(request) {
		return fetch(
			`https://cloudflare-dns.com/dns-query${new URL(request.url).search}`,
			{
				method: request.method,
				headers: request.headers,
				body: request.body,
			},
		);
	},
};
