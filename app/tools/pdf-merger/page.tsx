"use client";

import { useState } from "react";

export default function PDFMerger() {
  const [files, setFiles] = useState<FileList | null>(null);

  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-16">
      <div className="mx-auto max-w-4xl">

        <h1 className="text-5xl font-black">
          📄 PDF Merger
        </h1>

        <p className="mt-4 text-gray-400">
          Merge multiple PDF files into one document.
          (Coming in the next update.)
        </p>

        <div className="mt-10 rounded-2xl border border-dashed border-white/20 p-10">

          <input
            type="file"
            multiple
            accept=".pdf"
            onChange={(e) => setFiles(e.target.files)}
          />

          <p className="mt-6 text-gray-400">
            {files
              ? `${files.length} PDF file(s) selected`
              : "No PDF selected"}
          </p>

          <button
            disabled
            className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-bold opacity-50"
          >
            Merge PDFs (Coming Soon)
          </button>

        </div>

      </div>
    </main>
  );
}