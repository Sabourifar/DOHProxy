<xaiArtifact artifact_id="d10772f7-3328-4d11-8d02-1382a1893f94" artifact_version_id="a100ab29-54e0-4fbc-80fb-7c9e856e1462" title="README.md" contentType="text/markdown">

# DOHProxy

A high-performance and efficient Cloudflare Worker that proxies DNS-over-HTTPS (DoH) requests to a configurable DoH endpoint, defaulting to Cloudflare's DNS service (`cloudflare-dns.com/dns-query`). This enables secure and rapid DNS query resolution over HTTPS using any DoH provider or a custom endpoint.

## Features
- Proxies DNS queries to a configurable DoH endpoint.
- Lightweight and easy to deploy.
- Handles errors gracefully with a custom error response.
- Supports changing the DoH endpoint to popular providers or a custom URL.

## Setup Instructions

There are three ways to deploy this Cloudflare Worker: using a one-click deploy button, manually pasting the code into the Cloudflare Workers dashboard, or using the Wrangler CLI.

### 1. Deploy with One-Click Button

The easiest way to deploy this worker is by using the Deploy to Cloudflare Workers button below. This will guide you through the process of setting up the worker in your Cloudflare account.

[<img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" style="height: 40px;">](https://deploy.workers.cloudflare.com/?url=https://github.com/Sabourifar/DOHProxy)

**Steps:**
1. Click the "Deploy to Cloudflare Workers" button above.
2. Log in to your Cloudflare account if prompted.
3. Follow the on-screen instructions to configure and deploy the worker.
4. Once deployed, your worker will be live and ready to proxy DoH requests.
5. (Optional) To use a different DoH endpoint, edit the `DOH_ENDPOINT` constant in the worker code (see "Customizing the DoH Endpoint" below).

### 2. Manual Deployment via Cloudflare Workers Dashboard

You can manually deploy the worker by copying the code into the Cloudflare Workers dashboard.

**Steps:**
1. Log in to your [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Navigate to the **Workers** section and click **Create a Worker**.
3. Copy the code from `worker.js` in the repository and paste it into the script editor.
4. (Optional) Modify the `DOH_ENDPOINT` constant to use a different provider (see "Customizing the DoH Endpoint" below).
5. Name your worker (e.g., `doh-proxy`).
6. Click **Save and Deploy** to make the worker live.

### 3. Manual Deployment via Wrangler CLI

For advanced users, you can deploy the worker using the Wrangler CLI.

**Prerequisites:**
- Install Node.js and npm.
- Install Wrangler CLI by running:
  ```bash
  npm install -g @cloudflare/wrangler
  ```
- Authenticate Wrangler with your Cloudflare account:
  ```bash
  wrangler login
  ```

**Steps:**
1. Clone the repository or create a new directory for your project:
   ```bash
   git clone https://github.com/Sabourifar/DOHProxy.git
   cd DOHProxy
   ```
   Alternatively, create a new directory and initialize a `wrangler.toml` file.

2. Create a `wrangler.toml` configuration file in the project directory with the following content:

  ```toml
  name = "doh-proxy"
  main = "worker.js"
  compatibility_date = "2025-10-24"
  ```

3. Ensure the `worker.js` file is in the project directory (available in the repository).
4. (Optional) Modify the `DOH_ENDPOINT` constant in `worker.js` to use a different provider (see "Customizing the DoH Endpoint" below).
5. Deploy the worker using Wrangler:

   ```bash
   wrangler deploy
   ```

7. Once deployed, Wrangler will provide the URL for your worker.

## Customizing the DoH Endpoint

You can change the `DOH_ENDPOINT` constant in the `worker.js` file to any valid DNS-over-HTTPS provider or a custom DoH server. By default, it uses Cloudflare's `https://cloudflare-dns.com/dns-query`. Some popular DoH providers include:

- **Cloudflare**: `https://cloudflare-dns.com/dns-query`
- **Google**: `https://dns.google/dns-query`
- **Quad9**: `https://dns.quad9.net/dns-query`
- **AdGuard**: `https://dns.adguard.com/dns-query`
- **Custom**: Use any DoH-compliant server URL (e.g., a self-hosted DoH server).

To change the endpoint:
1. Open the `worker.js` file.
2. Update the `DOH_ENDPOINT` constant to your desired URL, e.g.:
   ```javascript
   const DOH_ENDPOINT = 'https://dns.google/dns-query';
   ```
3. Save and redeploy the worker (via the dashboard or Wrangler CLI).

## Usage

Once deployed, your worker will proxy DNS-over-HTTPS requests to the configured DoH endpoint. You can test it by sending a DoH request to the worker's URL with a valid DNS query (e.g., `?dns=...`).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/Sabourifar/DOHProxy).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

</xaiArtifact>
