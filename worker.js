// DOHProxy by Sabourifar - GitHub: https://github.com/Sabourifar/DOHProxy
// Forwards DNS-over-HTTPS requests to Cloudflare. To use a different DoH provider, replace the https://cloudflare-dns.com/dns-query below.
export default {
	fetch(request) {
		const url = `https://cloudflare-dns.com/dns-query${new URL(request.url).search}`;
		return fetch(new Request(url, request));
	},
};
