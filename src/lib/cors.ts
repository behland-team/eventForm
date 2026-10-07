export const apiResponseHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Cache-Control": "no-store",
};

export function corsPreflight() {
  return new Response(null, {
    status: 204,
    headers: {
      ...apiResponseHeaders,
      "Access-Control-Max-Age": "86400",
    },
  });
}
