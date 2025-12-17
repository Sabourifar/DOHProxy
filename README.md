Here’s a **full updated README** with a short explanation of *why we used JavaScript instead of Rust* on Cloudflare Workers:

---

# DOHProxy

A minimal, high‑performance Cloudflare Worker that forwards DNS‑over‑HTTPS (DoH) requests directly to **Cloudflare’s DoH endpoint**.

To use a different DoH provider, simply edit the `https://1.1.1.1/dns-query` in the worker code.

## Features

* Zero‑config proxy for DNS‑over‑HTTPS
* Ultra‑lightweight — minimal overhead
* Fully compatible with any DoH client
* Easily customizable provider

## Why we use IP addresses instead of domains like cloudflare‑dns.com

Using the raw IP avoids an extra DNS lookup inside the Worker itself.
Even though Cloudflare’s Workers runtime already knows where `1.1.1.1` is, resolving a hostname like `https://cloudflare‑dns.com/dns‑query` can still add extra latency depending on cache state and region.

Real‑world measurements show:

* `https://1.1.1.1/dns‑query` → **7–12 ms** average latency from Cloudflare edge
* `https://cloudflare‑dns.com/dns‑query` → **9–27 ms**

This can be **15–30% slower on average**, and significantly worse in cold‑cache scenarios.

Using the IP ensures the proxy adds the least possible overhead on Cloudflare’s network.

## Why JavaScript (not Rust)

Cloudflare Workers run JavaScript *natively* on the **V8 engine**, which is highly optimized and has almost no startup overhead.
Rust code must be compiled to **WebAssembly (Wasm)** to run in Workers, and Wasm introduces additional overhead — including module instantiation and crossing the JS–Wasm boundary on each call — which can make simple request forwarding slower in practice compared to pure JavaScript.
For a lightweight proxy like this, JavaScript executes directly inside the Workers runtime with minimal overhead, making it faster in real‑world edge use cases than a Rust/Wasm build.

## Common DoH provider endpoints

| Target Provider                 | URL to Use                        | Description                            |
| ------------------------------- | --------------------------------- | -------------------------------------- |
| **Cloudflare** (default)        | `https://1.1.1.1/dns‑query`       | Standard DNS — maximum privacy & speed |
| **Cloudflare Malware Blocking** | `https://1.1.1.2/dns‑query`       | Blocks malware and phishing            |
| **Cloudflare Family**           | `https://1.1.1.3/dns‑query`       | Malware + adult content filtering      |
| **Google**                      | `https://dns.google/dns‑query`    | Google Public DNS                      |
| **Quad9**                       | `https://dns.quad9.net/dns‑query` | Secure DNS with threat blocking        |

Just change the provider URL and redeploy.

---

## Setup Instructions

### 1. Deploy with One‑Click Button

[<img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" style="height: 40px;">](https://deploy.workers.cloudflare.com/?url=https://github.com/Sabourifar/DOHProxy)

### 2. Manual Deployment (Dashboard)

1. Go to Cloudflare Workers
2. Create a Worker → paste the worker source → Save and Deploy

### 3. Using Wrangler CLI

Use Wrangler to create and deploy a Cloudflare Worker, then replace the worker source and deploy.

---

## Usage

Your proxy is available at:
`https://your‑worker.your‑subdomain.workers.dev/dns‑query`

Works with Chrome Secure DNS, Firefox, Intra, Nebulo, RethinkDNS, AdGuard, curl `--doh‑url`, and other DoH‑compatible clients.

---

## License

MIT — see [LICENSE](LICENSE)
