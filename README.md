# DOHProxy

A minimal, high-performance Cloudflare Worker that forwards DNS-over-HTTPS (DoH) requests directly to **Cloudflare's DoH endpoint**.

To use a different DoH provider, simply edit the **URL** in the worker code.

## Features

  * Zero-config proxy for DNS-over-HTTPS
  * Ultra-lightweight — just one `fetch()` call
  * Fully compatible with any DoH client
  * Easily customizable provider

-----

## Setup Instructions

### 1\. Deploy with One-Click Button

Click the button below to deploy instantly:

[<img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" style="height: 40px;">](https://deploy.workers.cloudflare.com/?url=https://github.com/Sabourifar/DOHProxy)

**Steps:**

1.  Click the button above.
2.  Log in to Cloudflare (if needed).
3.  Name your worker (e.g., `doh-proxy`).
4.  Deploy — done in seconds\!

Your worker is now live and proxying DoH requests.

-----

### 2\. Manual Deployment (Dashboard)

1.  Go to [Cloudflare Workers](https://dash.cloudflare.com/?to=/:account/workers)
2.  Click **Create a Worker**
3.  Delete the default code
4.  Paste the worker script from the repository (`worker.js`)
5.  Click **Save and Deploy**

-----

### 3\. Using Wrangler CLI

```bash
npm create cloudflare@latest doh-proxy
cd doh-proxy
```

Copy the worker script from the repository into `src/index.js`, then:

```bash
wrangler deploy
```

-----

## Change DoH Provider

To change the DoH provider, you need to edit the target **URL string** within the Worker's `fetch` function. The worker currently uses Cloudflare's IP-based endpoint, `https://1.1.1.1/dns-query`.

To switch providers, replace this URL with your desired DoH endpoint, examples:

| Target Provider | URL to Use in Code |
| :--- | :--- |
| **Cloudflare** | `https://1.1.1.1/dns-query` |
| **Google** | `https://dns.google/dns-query` |
| **Quad9** | `https://dns.quad9.net/dns-query` |

Save and redeploy.

-----

## Usage

Your worker accepts standard DoH requests at:

```
https://your-worker.your-subdomain.workers.dev/dns-query
```

Works with:

  * Browsers (set as DoH resolver)
  * Intra (Phone App)
  * `curl` with `--doh-url` support
  * `dog`, `dig` (with DoH support), etc.

-----

## License

MIT — see [LICENSE](https://www.google.com/search?q=LICENSE)
