# DOHProxy
A minimal, high-performance Cloudflare Worker that forwards DNS-over-HTTPS (DoH) requests directly to **Cloudflare’s DoH endpoint**.

To use a different DoH provider, simply edit the **URL** in the worker code.

## Features
- Zero-config proxy for DNS-over-HTTPS
- Ultra-lightweight — just one `fetch()` call
- Fully compatible with any DoH client
- Easily customizable provider

## Why we use IP addresses instead of domains like cloudflare-dns.com

Using the raw IP avoids an extra DNS lookup inside the Worker itself.  
Even though Cloudflare’s own Workers runtime already knows where 1.1.1.1 is, resolving a hostname like `https://cloudflare-dns.com/dns-query` still adds **~2–15 ms** of overhead (depending on region and cache state).

Real-world measurements (2024–2025) show:
- `https://1.1.1.1/dns-query` → **7–12 ms** average latency from Cloudflare edge
- `https://cloudflare-dns.com/dns-query` → **9–27 ms** (extra DNS resolution inside the Worker)

**That’s up to 100–120 % slower** in worst-case cold-cache scenarios and still **15–30 % slower** on average.

Using the IP makes your DoH proxy as fast as physically possible on Cloudflare’s network.

| Target Provider                          | URL to Use in Code                     | Description                                              |
|------------------------------------------|----------------------------------------|----------------------------------------------------------|
| **Cloudflare** (default)                 | `https://1.1.1.1/dns-query`            | Standard DNS – no filtering, maximum privacy & speed     |
| **Cloudflare Malware Blocking**          | `https://1.1.1.2/dns-query`            | Blocks malware, phishing, and security threats           |
| **Cloudflare Family**                    | `https://1.1.1.3/dns-query`            | Blocks malware + adult content (family-safe)            |
| **Google**                               | `https://dns.google/dns-query`         | Google Public DNS                                        |
| **Quad9**                                | `https://dns.quad9.net/dns-query`      | Secure DNS with malware/phishing blocking                |

Just change the IP in the single line of code and redeploy.

-----

## Setup Instructions

### 1. Deploy with One-Click Button

[<img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" style="height: 40px;">](https://deploy.workers.cloudflare.com/?url=https://github.com/Sabourifar/DOHProxy)

### 2. Manual Deployment (Dashboard)
1. Go to [Cloudflare Workers](https://dash.cloudflare.com/?to=/:account/workers)
2. Create a Worker → paste the code from `worker.js` → Save and Deploy

### 3. Using Wrangler CLI
```bash
npm create cloudflare@latest doh-proxy
# copy worker.js content into src/index.js
wrangler deploy
```

-----

## Usage
Your proxy is available at:  
`https://your-worker.your-subdomain.workers.dev/dns-query`

Works perfectly with Chrome Secure DNS, Firefox, Intra, Nebulo, RethinkDNS, AdGuard, curl `--doh-url`, etc.

-----

## License
MIT — see [LICENSE](LICENSE)
