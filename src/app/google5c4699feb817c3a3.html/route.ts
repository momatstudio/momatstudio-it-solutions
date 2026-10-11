export const dynamic = "force-static";

export function GET() {
  return new Response(
    "google-site-verification: google5c4699feb817c3a3.html",
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=300",
      },
    },
  );
}
