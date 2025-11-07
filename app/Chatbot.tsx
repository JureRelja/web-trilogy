"use client";
import React, { useState, useEffect, useRef, ChangeEvent } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
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
      console.error(err);
      setMessages((prev) => [...prev, { sender: "bot", text: "Greška 😅" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div style={{ position: "fixed", right: 20, bottom: 20, zIndex: 60 }} className="flex flex-col justify-end items-end">
        <div
          role="dialog"
          aria-label="KariBot chat"
          aria-hidden={!open}
          style={{
            width: 340,
            height: 460,
            marginBottom: 12,
            background: "white",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "sans-serif",
            transition: "transform 220ms ease, opacity 180ms ease",
            transform: open ? "translateY(0)" : "translateY(12px)",
            opacity: open ? 1 : 0,
            pointerEvents: open ? "auto" : "none"
          }}
        >
          <div style={{ padding: 12, background: "#3b82f6", color: "white", fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>AI agent 🎓</div>
            <button aria-label="Close chat" onClick={() => setOpen(false)} style={{ background: "transparent", border: "none", color: "white", fontSize: 18 }}>
              ×
            </button>
          </div>

          <div style={{ flex: 1, padding: 12, overflowY: "auto" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ textAlign: m.sender === "user" ? "right" : "left", margin: "6px 0" }}>
                <span style={{
                  display: "inline-block",
                  padding: "8px 12px",
                  borderRadius: 12,
                  background: m.sender === "user" ? "#3b82f6" : "#e5e7eb",
                  color: m.sender === "user" ? "white" : "black"
                }}>{m.text}</span>
              </div>
            ))}
            {loading && <div style={{ color: "#666" }}>AI agent piše...</div>}
          </div>

          <div style={{ display: "flex", borderTop: "1px solid #eee", padding: 8 }}>
            <input
              ref={inputRef}
              style={{ flex: 1, border: "1px solid #e5e7eb", borderRadius: 8, padding: "8px 10px" }}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Pitaj me bilo što..."
            />
            <button
              style={{ marginLeft: 8, background: "#3b82f6", color: "white", padding: "8px 12px", borderRadius: 8, border: "none" }}
              onClick={sendMessage}
            >
              Pošalji
            </button>
          </div>
        </div>

        <button
          aria-expanded={open}
          aria-label={open ? "Zatvori chat" : "Otvori chat"}
          onClick={() => setOpen((s) => !s)}
          style={{
            width: 56,
            height: 56,
            borderRadius: 9999,
            background: "#3b82f6",
            color: "white",
            border: "none",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 20,
            cursor: "pointer"
          }}
        >
          💬
        </button>
      </div>
    </>
  );
}