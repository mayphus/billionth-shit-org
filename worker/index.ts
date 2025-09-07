export default {
  async fetch(request: Request, env: any) {
    // Try to serve a static asset first
    let response = await env.ASSETS.fetch(request)

    // SPA fallback to index.html for unknown routes
    if (response.status === 404 && request.method === 'GET') {
      const url = new URL(request.url)
      const indexRequest = new Request(`${url.origin}/index.html`, request)
      response = await env.ASSETS.fetch(indexRequest)
    }

    return response
  },
}

