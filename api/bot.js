export default function handler(req, res) {
  if (req.method !== "POST") return res.status(200).send("Bot online.");

  const body = req.body;

  const conversationId = body?.conversation?.id;
  const message = body?.message?.content || "";

  // Resposta simples
  let reply = "Desculpe, não entendi.";

  if (message.toLowerCase().includes("oi") || message.toLowerCase().includes("olá")) {
    reply = "Olá! Qual seu nome?";
  }

  // Retorna JSON que Chatwoot espera
  res.status(200).json({
    content: reply,
    message_type: "outgoing"
  });
}
