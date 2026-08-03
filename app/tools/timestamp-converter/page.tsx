"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function TimestampConverter() {
  const [timestamp, setTimestamp] = useState("");
  const [date, setDate] = useState("");

  function convertTimestamp() {
    const num = Number(timestamp);

    if (isNaN(num)) {
      alert("Please enter a valid Unix timestamp.");
      return;
    }

    const d = new Date(num * 1000);

    if (isNaN(d.getTime())) {
      alert("Invalid timestamp.");
      return;
    }

    setDate(d.toLocaleString());
  }

  function convertCurrent() {
    setTimestamp(Math.floor(Date.now() / 1000).toString());
    setDate(new Date().toLocaleString());
  }

  function clearAll() {
    setTimestamp("");
    setDate("");
  }

  async function copyResult() {
    if (!date) return;
    await navigator.clipboard.writeText(date);
    alert("Copied!");
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white px-6 py-12">
        <div className="mx-auto max-w-4xl">

          <h1 className="text-5xl font-black">
            🕒 Timestamp Converter
          </h1>

          <p className="mt-3 text-gray-400">
            Convert Unix timestamps into readable dates.
          </p>

          <input
            type="text"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
            placeholder="Enter Unix Timestamp..."
            className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none focus:border-blue-500"
          />

          <div className="mt-6 flex flex-wrap gap-4">

            <button
              onClick={convertTimestamp}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              Convert
            </button>

            <button
              onClick={convertCurrent}
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
            >
              Current Timestamp
            </button>

            <button
              onClick={copyResult}
              className="rounded-xl bg-yellow-600 px-6 py-3 font-semibold hover:bg-yellow-500"
            >
              Copy
            </button>

            <button
              onClick={clearAll}
              className="rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-500"
            >
              Clear
            </button>

          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-bold">
              Result
            </h2>

            <p className="break-all text-lg">
              {date || "Converted date will appear here..."}
            </p>
          </div>

        </div>
      </main>
    </>
  );
}