"use client";
import { useState, ChangeEvent, KeyboardEvent } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Greška 😅" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      width: 300,
      height: 400,
      background: "white",
      borderRadius: 12,
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      fontFamily: "sans-serif"
    }}>
      <div style={{ padding: 10, background: "#3b82f6", color: "white", fontWeight: "bold" }}>
        KariBot 🎓
      </div>
      <div style={{ flex: 1, padding: 10, overflowY: "auto" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ textAlign: m.sender === "user" ? "right" : "left", margin: "6px 0" }}>
            <span style={{
              display: "inline-block",
              padding: "6px 10px",
              borderRadius: 12,
              background: m.sender === "user" ? "#3b82f6" : "#e5e7eb",
              color: m.sender === "user" ? "white" : "black"
            }}>
              {m.text}
            </span>
          </div>
        ))}
        {loading && <div style={{ color: "#aaa" }}>KariBot piše...</div>}
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
        <input
          style={{ flex: 1, border: "none", padding: 10 }}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Pitaj me..."
        />
        <button
          style={{ background: "#3b82f6", color: "white", padding: "0 10px" }}
          onClick={sendMessage}
        >
          Pošalji
        </button>
      </div>
    </div>
  );
}
