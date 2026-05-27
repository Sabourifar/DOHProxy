# ⚡ DOHProxy

> The fastest, leanest DNS-over-HTTPS proxy on the edge — powered by Cloudflare Workers.

---

## 🚀 What is it?

A **blazing-fast** Cloudflare Worker that proxies your DNS-over-HTTPS requests with **zero bloat** and **maximum correctness**. No servers. No config. Just pure speed.

---

## ✨ Why it's awesome

- ⚡ **Insanely fast** — runs natively on V8, directly at Cloudflare's edge
- 🎯 **Pixel-perfect DoH** — preserves method, headers, and body exactly as required by RFC 8484
- 🌍 **Global edge network** — your DNS resolves from the closest Cloudflare PoP on the planet
- 🔌 **Any DoH client works** — Chrome, Firefox, AdGuard, curl, you name it
- 🔧 **One line to change provider** — swap the URL and redeploy, done

---

## 🏎️ Raw IP = Raw Speed

We forward to `https://1.1.1.1/dns-query` instead of `cloudflare-dns.com` — and it matters:

| Endpoint | Avg Latency |
|---|---|
| `1.1.1.1` (raw IP) | **7–12 ms** |
| `cloudflare-dns.com` | 9–27 ms |

Skipping the hostname lookup shaves **15–30% off latency** — especially in cold-cache scenarios. Every millisecond counts. 🏁

---

## ⚙️ Why JavaScript beats Rust here

Cloudflare Workers run JS **natively on V8** — zero startup penalty. Rust requires compiling to WebAssembly, which adds module instantiation overhead and a JS↔Wasm boundary crossing on every request. For a pure proxy, **JavaScript wins**. 🥇

---

## 🌐 DoH Provider Endpoints

| Provider | URL | Notes |
|---|---|---|
| ☁️ **Cloudflare** *(default)* | `https://1.1.1.1/dns-query` | Max speed & privacy |
| 🛡️ **Cloudflare Malware** | `https://1.1.1.2/dns-query` | Blocks malware & phishing |
| 👨‍👩‍👧 **Cloudflare Family** | `https://1.1.1.3/dns-query` | + Adult content filtering |
| 🔵 **Google** | `https://8.8.8.8/dns-query` | Google Public DNS |
| 🔒 **Quad9** | `https://9.9.9.9/dns-query` | Quad9 Public DNS |

---

## 🚀 Deploy in Seconds

### One-Click
[<img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" style="height: 40px;">](https://deploy.workers.cloudflare.com/?url=https://github.com/Sabourifar/DOHProxy)

### Dashboard
1. Go to Cloudflare Workers → Create a Worker
2. Paste the source → Save & Deploy ✅

### Wrangler CLI
Create a Worker with Wrangler, paste the source, and deploy. Done.

---

## 📡 Usage

Point any DoH client to:
```
https://your-worker.your-subdomain.workers.dev/dns-query
```
Works with **Chrome Secure DNS**, **Firefox**, **AdGuard**, **Intra**, **Nebulo**, **RethinkDNS**, `curl --doh-url`, and more.

---

## 📄 License

MIT — see [LICENSE](LICENSE)
