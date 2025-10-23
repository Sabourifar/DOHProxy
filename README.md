<xaiArtifact artifact_id="d10772f7-3328-4d11-8d02-1382a1893f94" artifact_version_id="5cc80ac5-9a44-493c-8af6-5c377861878a" title="README.md" contentType="text/markdown">

# DOHProxy

A simple Cloudflare Worker that proxies DNS-over-HTTPS (DoH) requests to Cloudflare's DNS service (`cloudflare-dns.com/dns-query`). This allows you to resolve DNS queries securely over HTTPS.

## Features
- Proxies DNS queries to Cloudflare's DoH endpoint.
- Lightweight and easy to deploy.
- Handles errors gracefully with a custom error response.

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

### 2. Manual Deployment via Cloudflare Workers Dashboard

You can manually deploy the worker by copying the code into the Cloudflare Workers dashboard.

**Steps:**
1. Log in to your [Cloudflare dashboard](https://dash.cloudflare.com/).
2. Navigate to the **Workers** section and click **Create a Worker**.
3. Copy the code from `worker.js` in the repository and paste it into the script editor.
4. Name your worker (e.g., `doh-proxy`).
5. Click **Save and Deploy** to make the worker live.

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
main = "index.js"
compatibility_date = "2025-10-24"
```

3. Ensure the `index.js` file is in the project directory (available in the repository).
4. Deploy the worker using Wrangler:
   ```bash
   wrangler deploy
   ```

5. Once deployed, Wrangler will provide the URL for your worker.

## Usage

Once deployed, your worker will proxy DNS-over-HTTPS requests to `https://cloudflare-dns.com/dns-query`. You can test it by sending a DoH request to the worker's URL with a valid DNS query (e.g., `?dns=...`).

## Troubleshooting

If the deploy button does not appear or work:
- View the README on the [GitHub repository](https://github.com/Sabourifar/DOHProxy) in a browser to ensure proper rendering.
- Disable any ad blockers or browser extensions that may block the button image (`https://deploy.workers.cloudflare.com/button`).
- Verify the repository URL in the deploy button link is correct: `https://deploy.workers.cloudflare.com/?url=https://github.com/Sabourifar/DOHProxy`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on the [GitHub repository](https://github.com/Sabourifar/DOHProxy).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

</xaiArtifact>
