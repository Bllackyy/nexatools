"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const tools = [
  {
    icon: "🔐",
    title: "Password Generator",
    description: "Generate secure passwords instantly.",
    href: "/tools/password-generator",
    category: "Security",
  },
  {
    icon: "📱",
    title: "QR Generator",
    description: "Generate QR codes instantly.",
    href: "/tools/qr-generator",
    category: "Utility",
  },
  {
    icon: "📄",
    title: "Image to PDF",
    description: "Convert images into PDF files.",
    href: "/tools/image-to-pdf",
    category: "Image",
  },
  {
    icon: "🗜️",
    title: "Image Compressor",
    description: "Reduce image size.",
    href: "/tools/image-compressor",
    category: "Image",
  },
  {
    icon: "📝",
    title: "Word Counter",
    description: "Count words and characters.",
    href: "/tools/word-counter",
    category: "Text",
  },
  {
    icon: "📄",
    title: "JSON Formatter",
    description: "Format JSON beautifully.",
    href: "/tools/json-formatter",
    category: "Developer",
  },
  {
    icon: "🆔",
    title: "UUID Generator",
    description: "Generate UUIDs instantly.",
    href: "/tools/uuid-generator",
    category: "Developer",
  },
  {
    icon: "🔤",
    title: "Base64 Encoder",
    description: "Encode & Decode Base64.",
    href: "/tools/base64",
    category: "Developer",
  },
  {
    icon: "🔠",
    title: "Text Case Converter",
    description: "Convert text case.",
    href: "/tools/text-case-converter",
    category: "Text",
  },
  {
    icon: "🕒",
    title: "Timestamp Converter",
    description: "Convert Unix timestamps.",
    href: "/tools/timestamp-converter",
    category: "Developer",
  },
  {
  icon: "🤖",
  title: "AI Prompt Generator",
  description: "Generate professional AI prompts instantly.",
  href: "/tools/ai-prompt-generator",
  category: "AI",
},
];

export default function ToolsPage() {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) =>
      (
        tool.title +
        tool.description +
        tool.category
      )
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      

      <main className="min-h-screen bg-[#050816] text-white px-6 py-12">
        <div className="mx-auto max-w-7xl">

          <h1 className="text-5xl font-black">
            🚀 All Tools
          </h1>

          <p className="mt-3 text-gray-400">
            Fast, beautiful and free online tools.
          </p>

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search tools..."
            className="mt-10 w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-blue-500"
          />

          <p className="mt-4 text-sm text-gray-400">
            {filteredTools.length} tool
            {filteredTools.length !== 1 ? "s" : ""} found
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500 hover:bg-white/10"
              >
                <div className="text-4xl">{tool.icon}</div>

                <h2 className="mt-4 text-xl font-bold">
                  {tool.title}
                </h2>

                <p className="mt-2 text-gray-400">
                  {tool.description}
                </p>

                <span className="mt-4 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-300">
                  {tool.category}
                </span>

                <div className="mt-6 font-semibold text-blue-400">
                  Open Tool →
                </div>
              </Link>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="mt-16 rounded-2xl border border-dashed border-white/20 p-10 text-center">
              <h2 className="text-2xl font-bold">
                😕 No tools found
              </h2>

              <p className="mt-2 text-gray-400">
                Try searching with a different keyword.
              </p>
            </div>
          )}

        </div>
      </main>
    </>
  );
}