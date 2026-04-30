export async function onRequestGet(context) {
  const code = new URL(context.request.url).searchParams.get("code");
  const response = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      client_id: context.env.GITHUB_CLIENT_ID,
      client_secret: context.env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  const data = await response.json();
  const token = data.access_token;
  const provider = "github";
  return new Response(`
    <html><body><script>
      (function() {
        function recieveMessage(e) {
          console.log("recieveMessage %o", e);
          window.opener.postMessage(
            'authorization:${provider}:success:{"token":"${token}","provider":"${provider}"}',
            e.origin
          );
        }
        window.addEventListener("message", recieveMessage, false);
        window.opener.postMessage("authorizing:${provider}", "*");
      })();
    </script></body></html>
  `, { headers: { "Content-Type": "text/html" } });
}
