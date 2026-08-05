"use client";

import { useState } from "react";

const prompts = {
  Writing:
    "Write a professional blog post about [TOPIC] in a friendly tone with headings, bullet points, and an engaging conclusion.",

  Coding:
    "Write clean, optimized code for [TASK] using [LANGUAGE]. Explain every important step.",

  Image:
    "Create a highly detailed cinematic image of [SUBJECT], ultra realistic, 8K, dramatic lighting, sharp focus.",

  Business:
    "Create a complete business plan for [BUSINESS IDEA] including marketing, pricing, competitors, and revenue strategy.",

  Study:
    "Teach me [TOPIC] from beginner to advanced using simple examples and quizzes.",
};

export default function AIPromptGenerator() {
  const [category, setCategory] =
    useState<keyof typeof prompts>("Writing");

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(prompts[category]);
    alert("Prompt copied!");
  };

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-5xl font-black">
          🤖 AI Prompt Generator
        </h1>

        <p className="mt-4 text-gray-400">
          Generate professional prompts for ChatGPT, Claude,
          Gemini and image AI tools.
        </p>

        <select
          className="mt-10 w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value as keyof typeof prompts)
          }
        >
          {Object.keys(prompts).map((item) => (
            <option
              key={item}
              value={item}
              className="bg-[#050816]"
            >
              {item}
            </option>
          ))}
        </select>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <pre className="whitespace-pre-wrap text-gray-300">
            {prompts[category]}
          </pre>
        </div>

        <button
          onClick={copyPrompt}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-500"
        >
          📋 Copy Prompt
        </button>

      </div>
    </main>
  );
}