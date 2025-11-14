export default function handler(req, res) {
  if (req.method !== "POST") return res.status(200).send("Bot online.");

  const message = req.body?.message?.content || "";
  let reply = "Desculpe, não entendi.";

  if (message.toLowerCase().includes("oi") || message.toLowerCase().includes("olá")) {
    reply = "Olá! Qual seu nome?";
  }

  res.status(200).json({ reply });
}
