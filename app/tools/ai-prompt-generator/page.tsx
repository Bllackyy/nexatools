"use client";

import { useState } from "react";

const templates = {
  Writing:
    "Write a professional blog post about [TOPIC] in a friendly tone with headings and examples.",

  Coding:
    "Write clean and optimized [LANGUAGE] code for [TOPIC]. Explain every important step.",

  Image:
    "Create a highly detailed cinematic image of [TOPIC], ultra realistic, dramatic lighting, 8K.",

  Business:
    "Create a business plan for [TOPIC] including pricing, marketing, competitors and revenue strategy.",

  Study:
    "Teach me [TOPIC] from beginner to advanced with examples and exercises.",
};

export default function AIPromptGenerator() {
  const [category, setCategory] =
    useState<keyof typeof templates>("Writing");

  const [topic, setTopic] = useState("");

  const prompt = templates[category].replace(
    "[TOPIC]",
    topic || "your topic"
  );

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(prompt);
    alert("✅ Prompt copied!");
  };

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-5xl font-black">
          🤖 AI Prompt Generator
        </h1>

        <p className="mt-4 text-gray-400">
          Create high-quality prompts for ChatGPT, Claude, Gemini and other AI tools.
        </p>

        <select
          className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 p-4"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value as keyof typeof templates)
          }
        >
          {Object.keys(templates).map((item) => (
            <option
              key={item}
              value={item}
              className="bg-[#050816]"
            >
              {item}
            </option>
          ))}
        </select>

        <input
          className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 p-4"
          placeholder="Enter a topic (Example: Fitness, React, Marketing...)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <pre className="whitespace-pre-wrap">{prompt}</pre>
        </div>

        <button
          onClick={copyPrompt}
          className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-500"
        >
          📋 Copy Prompt
        </button>

      </div>
    </main>
  );
}