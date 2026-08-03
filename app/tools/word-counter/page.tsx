"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();

    const words = trimmed ? trimmed.split(/\s+/).length : 0;

    const characters = text.length;

    const charactersNoSpaces = text.replace(/\s/g, "").length;

    const sentences = trimmed
      ? trimmed.split(/[.!?]+/).filter(Boolean).length
      : 0;

    const paragraphs = trimmed
      ? trimmed.split(/\n\s*\n/).filter(Boolean).length
      : 0;

    const readingTime = Math.max(1, Math.ceil(words / 200));

    return {
      words,
      characters,
      charactersNoSpaces,
      sentences,
      paragraphs,
      readingTime,
    };
  }, [text]);

  function copyText() {
    navigator.clipboard.writeText(text);
    alert("Copied!");
  }

  function clearText() {
    setText("");
  }

  return (
    <>
      

      <main className="min-h-screen bg-[#050816] px-6 py-12 text-white">
        <div className="mx-auto max-w-6xl">

          <h1 className="text-5xl font-black">
            📝 Word Counter
          </h1>

          <p className="mt-3 text-gray-400">
            Count words, characters, sentences and reading time instantly.
          </p>

          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your text..."
            className="mt-10 h-72 w-full rounded-2xl border border-white/10 bg-white/5 p-6 outline-none focus:border-blue-500"
          />

          <div className="mt-8 grid gap-5 md:grid-cols-3">

            <StatCard
              title="Words"
              value={stats.words}
            />

            <StatCard
              title="Characters"
              value={stats.characters}
            />

            <StatCard
              title="Characters (No Spaces)"
              value={stats.charactersNoSpaces}
            />

            <StatCard
              title="Sentences"
              value={stats.sentences}
            />

            <StatCard
              title="Paragraphs"
              value={stats.paragraphs}
            />

            <StatCard
              title="Reading Time"
              value={`${stats.readingTime} min`}
            />

          </div>

          <div className="mt-8 flex gap-4">

            <button
              onClick={copyText}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              📋 Copy
            </button>

            <button
              onClick={clearText}
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

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-gray-400">{title}</p>

      <h2 className="mt-3 text-4xl font-black">
        {value}
      </h2>
    </div>
  );
}