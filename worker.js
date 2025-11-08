// ==========================================
// DOH Proxy by Sabourifar
// GitHub: https://github.com/Sabourifar/DOHProxy
// ==========================================
const DOH_ENDPOINT = "https://cloudflare-dns.com/dns-query";
// Export worker module with fetch handler
export default {
  async fetch(request) {
    // Extract query parameters from incoming request
    const url = new URL(request.url);
    // Clone headers (no need to set Host, fetch handles it)
    const headers = new Headers(request.headers);
    // Forward request to Cloudflare DoH with corrected headers
    return fetch(DOH_ENDPOINT + url.search, {
      method: request.method,
      headers: headers,
      body: request.body,
    });
  },
};
