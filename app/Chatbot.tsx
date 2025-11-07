"use client";
import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";

type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

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
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: "bot", text: "Došlo je do greške 😅" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  // 🔗 Formatiranje poruke s ispravnim i klikabilnim linkovima
  const formatMessage = (text: string) => {
    // Regex koji ignorira zatvorene zagrade, zareze i točke na kraju
    const urlRegex = /(https?:\/\/[^\s)]+[^\s.,)])/g;

    return text.replace(urlRegex, (url) => {
      return `
        <a href="${url}" target="_blank" rel="noopener noreferrer" 
          style="color:#2563eb; text-decoration:none; display:inline-flex; align-items:center; gap:4px;">
          <span style="font-size:14px;">🔗</span>${url}
        </a>`;
    });
  };

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 999 }}>
      {/* Otvarač widgeta */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            width: 64,
            height: 64,
            borderRadius: 12,
            background: "linear-gradient(135deg, #2563eb, #1e40af)",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
        >
          🤖
        </button>
      )}

      {/* Chat prozor */}
      {open && (
        <div
          style={{
            width: "90vw",
            maxWidth: 380,
            height: "70vh",
            maxHeight: 520,
            background: "#ffffff",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            fontFamily: "'Inter', sans-serif",
            transition: 'transform 220ms ease, opacity 180ms ease',
            animation: "fadeIn 0.25s ease-in-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "12px 16px",
              background: "#2563eb",
              color: "white",
              fontWeight: 600,
              fontSize: 16,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "2px solid #1e3a8a",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 22 }}>🤖</span>UniPath Agent
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                fontSize: 18,
                cursor: "pointer",
              }}
            >
              ✖
            </button>
          </div>

          {/* Poruke */}
          <div style={{ flex: 1, padding: "12px", overflowY: "auto", background: "#f9fafb" }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: m.sender === "user" ? "flex-end" : "flex-start",
                  marginBottom: 10,
                }}
              >
                <div
                  style={{
                    background: m.sender === "user" ? "#2563eb" : "#e5e7eb",
                    color: m.sender === "user" ? "white" : "#111",
                    padding: "8px 12px",
                    borderRadius: 10,
                    maxWidth: "80%",
                    wordWrap: "break-word",
                    fontSize: 14,
                    boxShadow:
                      m.sender === "user"
                        ? "0 2px 6px rgba(37,99,235,0.4)"
                        : "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  {m.sender === "bot" ? (
                    <span dangerouslySetInnerHTML={{ __html: formatMessage(m.text) }} />
                  ) : (
                    m.text
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ color: "#999", fontSize: 14, margin: "4px 0" }}>
                UniPath Agent piše...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input dio */}
          <div
            style={{
              display: "flex",
              padding: 10,
              borderTop: "2px solid #e5e7eb",
              background: "#ffffff",
            }}
          >
            <input
              ref={inputRef}
              style={{
                flex: 1,
                border: "1px solid #d1d5db",
                borderRadius: 8,
                padding: "10px 14px",
                outline: "none",
                fontSize: 14,
                backgroundColor: "#f3f4f6",
                color: "#111",
                transition: "border 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.border = "1px solid #2563eb")}
              onBlur={(e) => (e.currentTarget.style.border = "1px solid #d1d5db")}
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Pitaj me nešto..."
            />
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: 8,
                padding: "0 16px",
                marginLeft: 8,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
              onClick={sendMessage}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
