# DOHProxy

A minimal, high-performance Cloudflare Worker that forwards DNS-over-HTTPS (DoH) requests directly to Cloudflare's DoH endpoint (`cloudflare-dns.com/dns-query`).

To use a different DoH provider, simply edit the URL in the code.

## Features

- Zero-config proxy for DNS-over-HTTPS
- Ultra-lightweight — just one `fetch()` call
- Fully compatible with any DoH client
- Easily customizable provider

## Setup Instructions

### 1. Deploy with One-Click Button

Click the button below to deploy instantly:

[<img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" style="height: 40px;">](https://deploy.workers.cloudflare.com/?url=https://github.com/Sabourifar/DOHProxy)

**Steps:**
1. Click the button above.
2. Log in to Cloudflare (if needed).
3. Name your worker (e.g., `doh-proxy`).
4. Deploy — done in seconds!

Your worker is now live and proxying DoH requests.

---

### 2. Manual Deployment (Dashboard)

1. Go to [Cloudflare Workers](https://dash.cloudflare.com/?to=/:account/workers)
2. Click **Create a Worker**
3. Delete the default code
4. Paste this:

```js
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
```

5. Click **Save and Deploy**

---

### 3. Using Wrangler CLI

```bash
npm create cloudflare@latest doh-proxy
cd doh-proxy
```

Replace `src/index.js` with:

```js
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
```

Then:

```bash
wrangler deploy
```

## Change DoH Provider

Edit the URL in the code:

```js
// Change this line:
`https://cloudflare-dns.com/dns-query${...}`

// To Google:
`https://dns.google/dns-query${...}`

// Or Quad9:
`https://dns.quad9.net/dns-query${...}`
```

Save and redeploy.

## Usage

Send DoH requests to your worker URL:

```
https://your-worker.your-subdomain.workers.dev/?dns=...
```

Works with Firefox, curl, `dog`, etc.

## License

MIT — see [LICENSE](LICENSE)
