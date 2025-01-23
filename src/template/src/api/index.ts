export default function handler() {
  return new Response(JSON.stringify({ message: "Hello from Bunfire API!" }), {
    headers: { "Content-Type": "application/json" },
  });
}
