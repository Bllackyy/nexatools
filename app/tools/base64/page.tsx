"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function Base64Tool() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function encode() {
    try {
      setResult(btoa(text));
    } catch {
      alert("Unable to encode text.");
    }
  }

  function decode() {
    try {
      setResult(atob(text));
    } catch {
      alert("Invalid Base64 string.");
    }
  }

  function copyResult() {
    if (!result) return;
    navigator.clipboard.writeText(result);
    alert("Copied!");
  }

  function clearAll() {
    setText("");
    setResult("");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white px-6 py-12">
        <div className="mx-auto max-w-5xl">

          <h1 className="text-5xl font-black">
            🔤 Base64 Encoder / Decoder
          </h1>

          <p className="mt-3 text-gray-400">
            Encode plain text to Base64 or decode Base64 back to text.
          </p>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text or Base64..."
            className="mt-10 h-56 w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none focus:border-blue-500"
          />

          <div className="mt-6 flex flex-wrap gap-4">

            <button
              onClick={encode}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              🔒 Encode
            </button>

            <button
              onClick={decode}
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
            >
              🔓 Decode
            </button>

            <button
              onClick={copyResult}
              className="rounded-xl bg-yellow-600 px-6 py-3 font-semibold hover:bg-yellow-500"
            >
              📋 Copy
            </button>

            <button
              onClick={clearAll}
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-500"
            >
              🗑 Clear
            </button>

          </div>

          <textarea
            readOnly
            value={result}
            placeholder="Result..."
            className="mt-8 h-56 w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none"
          />

        </div>
      </main>
    </>
  );
}