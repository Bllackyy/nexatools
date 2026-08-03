"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(16);
  const [copied, setCopied] = useState(false);

  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  function generatePassword() {
    let chars = "";

    if (uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) chars += "0123456789";
    if (symbols) chars += "!@#$%^&*()";

    if (!chars) {
      alert("Please select at least one option.");
      return;
    }

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setPassword(result);
    setCopied(false);
  }

  async function copyPassword() {
    if (!password) return;

    await navigator.clipboard.writeText(password);

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl">

        <h1 className="text-4xl font-bold">
          🔐 Password Generator
        </h1>

        <p className="mt-2 text-gray-400">
          Generate strong passwords in one click.
        </p>

        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span>Password Length</span>
            <span>{length}</span>
          </div>

          <input
            type="range"
            min="8"
            max="64"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={() => setUppercase(!uppercase)}
            />
            Uppercase
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={lowercase}
              onChange={() => setLowercase(!lowercase)}
            />
            Lowercase
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={numbers}
              onChange={() => setNumbers(!numbers)}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={symbols}
              onChange={() => setSymbols(!symbols)}
            />
            Symbols
          </label>

        </div>

        <input
          value={password}
          readOnly
          placeholder="Click Generate..."
          className="mt-6 w-full rounded-xl bg-black/30 p-4 text-lg outline-none"
        />

        <button
          onClick={generatePassword}
          className="mt-6 w-full rounded-xl bg-blue-600 py-4 font-bold hover:bg-blue-500 transition"
        >
          Generate Password
        </button>

        <button
          onClick={copyPassword}
          className="mt-4 w-full rounded-xl border border-white/20 py-4 hover:bg-white hover:text-black transition"
        >
          {copied ? "✅ Copied!" : "📋 Copy Password"}
        </button>

      </div>
    </main>
  );
}