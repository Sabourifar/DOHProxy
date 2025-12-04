// DOHProxy by Sabourifar - GitHub: https://github.com/Sabourifar/DOHProxy
// Forwards DNS-over-HTTPS requests to Cloudflare. To use a different DoH provider, replace the URL (https://1.1.1.1/dns-query) below.
export default{fetch:r=>fetch("https://1.1.1.1/dns-query"+(r.url.includes("?")?r.url.slice(r.url.indexOf("?")):""),r)}
