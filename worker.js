// ==========================================
// DOH Proxy by Sabourifar
// GitHub: https://github.com/Sabourifar/DOHProxy
// ==========================================

// Cloudflare DNS-over-HTTPS endpoint
const DOH_ENDPOINT = 'https://cloudflare-dns.com/dns-query';

// Export worker module with fetch handler
export default {
  async fetch(request) {
    try {
      // Extract query string from request URL and append to DoH endpoint
      const targetUrl = DOH_ENDPOINT + (request.url.indexOf('?') >= 0 ? request.url.slice(request.url.indexOf('?')) : '');
      
      // Forward request to DoH server with original request properties
      return await fetch(targetUrl, request);
    } catch {
      // Return error response if DoH request fails
      return new Response('Error fetching DoH server', {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  },
};
