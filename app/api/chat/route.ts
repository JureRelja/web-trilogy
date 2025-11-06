import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const res = await fetch("https://www.chatbase.co/api/v1/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CHATBASE_API_KEY}`,
      },
      body: JSON.stringify({
        messages: [{ role: "user", content: message }],
        chatbotId: process.env.CHATBASE_BOT_ID,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Chatbase error: ${err}`);
    }

    const data = await res.json();
    const reply = data.text || "Nisam siguran kako ti pomoći s tim 🤔";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { reply: "Došlo je do pogreške pri komunikaciji s Chatbase botom 😅" },
      { status: 500 }
    );
  }
}
