/**
 * Studio Sicurezza Padalino - API Worker
 * Cloudflare Worker per gestire le API backend
 */

export interface Env {
  CACHE: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Handle preflight requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    // Health check endpoint
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }), {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }

    // API routes
    if (url.pathname.startsWith('/api/')) {
      // Example: GET /api/courses
      if (url.pathname === '/api/courses' && request.method === 'GET') {
        // TODO: Implement courses API
        return new Response(JSON.stringify({ courses: [] }), {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        });
      }

      // Example: POST /api/contact
      if (url.pathname === '/api/contact' && request.method === 'POST') {
        // TODO: Implement contact form API
        const body = await request.json();
        return new Response(JSON.stringify({ success: true, message: 'Message received' }), {
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        });
      }

      // 404 for unknown API routes
      return new Response(JSON.stringify({ error: 'Not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      });
    }

    // Default response
    return new Response('Studio Sicurezza Padalino API', {
      headers: {
        'Content-Type': 'text/plain',
        ...corsHeaders,
      },
    });
  },
};
