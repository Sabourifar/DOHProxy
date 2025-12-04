// DOHProxy by Sabourifar - GitHub: https://github.com/Sabourifar/DOHProxy
// Forwards DNS-over-HTTPS requests to Cloudflare. To use a different DoH provider, replace the URL (https://1.1.1.1/dns-query) below.
export default{fetch:r=>{const i=r.url.indexOf('?');const query=i===-1?'':r.url.slice(i);return fetch("https://1.1.1.1/dns-query"+query,r)}}
