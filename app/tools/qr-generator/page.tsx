"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import QRCode from "react-qr-code";

export default function QRGenerator() {
  const [text, setText] = useState("https://nexatools.com");

  async function copyText() {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center p-6">
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">

          <h1 className="text-4xl font-bold">
            📱 QR Code Generator
          </h1>

          <p className="mt-3 text-gray-400">
            Generate QR codes instantly for URLs or text.
          </p>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or URL..."
            className="mt-8 w-full rounded-xl bg-black/30 p-4 outline-none"
          />

          <div className="mt-10 flex justify-center rounded-2xl bg-white p-6">
            <QRCode value={text || " "} size={220} />
          </div>

          <button
            onClick={copyText}
            className="mt-8 w-full rounded-xl bg-blue-600 py-4 font-bold hover:bg-blue-500 transition"
          >
            📋 Copy Text
          </button>

        </div>
      </main>
    </>
  );
}