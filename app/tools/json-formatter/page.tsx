"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function formatJSON() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch {
      setOutput("");
      setError("Invalid JSON");
    }
  }

  function minifyJSON() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch {
      setOutput("");
      setError("Invalid JSON");
    }
  }

  function copyOutput() {
    navigator.clipboard.writeText(output);
    alert("Copied!");
  }

  function clearAll() {
    setInput("");
    setOutput("");
    setError("");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-5xl font-black">
            📄 JSON Formatter
          </h1>

          <p className="mt-3 text-gray-400">
            Format, validate and minify JSON instantly.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Paste JSON here...'
              className="h-[500px] rounded-2xl border border-white/10 bg-white/5 p-5 outline-none focus:border-blue-500 font-mono"
            />

            <textarea
              readOnly
              value={output}
              placeholder="Formatted JSON will appear here..."
              className="h-[500px] rounded-2xl border border-white/10 bg-white/5 p-5 outline-none font-mono"
            />

          </div>

          {error && (
            <p className="mt-4 text-red-400 font-semibold">
              {error}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={formatJSON}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              ✨ Format JSON
            </button>

            <button
              onClick={minifyJSON}
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
            >
              📦 Minify JSON
            </button>

            <button
              onClick={copyOutput}
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

        </div>
      </main>
    </>
  );
}