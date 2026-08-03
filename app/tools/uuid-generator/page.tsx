"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");

  function generateUUID() {
    setUuid(crypto.randomUUID());
  }

  function copyUUID() {
    if (!uuid) return;
    navigator.clipboard.writeText(uuid);
    alert("UUID Copied!");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white px-6 py-12">
        <div className="mx-auto max-w-3xl">

          <h1 className="text-5xl font-black">
            🆔 UUID Generator
          </h1>

          <p className="mt-3 text-gray-400">
            Generate secure Version 4 UUIDs instantly.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">

            <button
              onClick={generateUUID}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              🎲 Generate UUID
            </button>

            <div className="mt-8 rounded-xl bg-black/30 p-5 break-all font-mono text-lg">
              {uuid || "Click the button to generate a UUID"}
            </div>

            <button
              onClick={copyUUID}
              disabled={!uuid}
              className="mt-6 rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-500 disabled:opacity-50"
            >
              📋 Copy UUID
            </button>

          </div>

        </div>
      </main>
    </>
  );
}