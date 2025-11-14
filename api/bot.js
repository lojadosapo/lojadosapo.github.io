export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("Bot online.");
  }

  const event = req.body;

  const conversationId = event?.conversation?.id;
  const message = event?.message?.content || "";

  // Resposta simples do bot
  const reply = `Você disse: ${message}`;

  // Envia a resposta para o Chatwoot
  await fetch(`https://app.chatwoot.com/api/v1/accounts/${process.env.CW_ACCOUNT_ID}/conversations/${conversationId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api_access_token": process.env.CW_API_TOKEN
    },
    body: JSON.stringify({
      content: reply,
      message_type: "outgoing"
    })
  });

  res.status(200).json({ success: true });
}
