"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";

export default function TextCaseConverter() {
  const [text, setText] = useState("");

  const toUpper = () => setText(text.toUpperCase());

  const toLower = () => setText(text.toLowerCase());

  const toTitle = () =>
    setText(
      text.replace(/\w\S*/g, (word) => {
        return (
          word.charAt(0).toUpperCase() +
          word.slice(1).toLowerCase()
        );
      })
    );

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Copied!");
  };

  const clear = () => setText("");

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white px-6 py-12">
        <div className="mx-auto max-w-5xl">

          <h1 className="text-5xl font-black">
            🔠 Text Case Converter
          </h1>

          <p className="mt-3 text-gray-400">
            Convert text instantly to different letter cases.
          </p>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text..."
            className="mt-10 h-72 w-full rounded-2xl border border-white/10 bg-white/5 p-5 outline-none focus:border-blue-500"
          />

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={toUpper}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              UPPERCASE
            </button>

            <button
              onClick={toLower}
              className="rounded-xl bg-green-600 px-6 py-3 font-semibold hover:bg-green-500"
            >
              lowercase
            </button>

            <button
              onClick={toTitle}
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500"
            >
              Title Case
            </button>

            <button
              onClick={copy}
              className="rounded-xl bg-yellow-600 px-6 py-3 font-semibold hover:bg-yellow-500"
            >
              📋 Copy
            </button>

            <button
              onClick={clear}
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