// ==========================================
// DOH Proxy by Sabourifar
// GitHub: https://github.com/Sabourifar/DOHProxy
// ==========================================

// Define constant outside handler
const DOH_ENDPOINT = 'https://cloudflare-dns.com/dns-query';

// Static error response to avoid constructing on each error
const ERROR_RESPONSE = new Response('Error fetching DoH server', {
  status: 500,
  headers: { 'Content-Type': 'text/plain' },
});

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    // Build target URL with minimal processing
    const targetUrl = DOH_ENDPOINT + (request.url.includes('?') ? request.url.slice(request.url.indexOf('?')) : '');

    // Forward request with unchanged method, headers, and body
    const response = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
      redirect: 'follow',
    });

    // Return response directly
    return response;
  } catch {
    return ERROR_RESPONSE;
  }
}
