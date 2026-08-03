"use client";

import { useState } from "react";

import imageCompression from "browser-image-compression";

export default function ImageCompressor() {
  const [original, setOriginal] = useState<File | null>(null);
  const [compressed, setCompressed] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleImage(file: File) {
    setLoading(true);

    try {
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      });

      setOriginal(file);
      setCompressed(compressedFile);
    } catch (err) {
      console.error(err);
      alert("Failed to compress image.");
    }

    setLoading(false);
  }

  function downloadImage() {
    if (!compressed) return;

    const url = URL.createObjectURL(compressed);

    const a = document.createElement("a");
    a.href = url;
    a.download = compressed.name;

    a.click();

    URL.revokeObjectURL(url);
  }

  return (
    <>
      

      <main className="min-h-screen bg-[#050816] text-white px-6 py-12">
        <div className="mx-auto max-w-4xl">

          <h1 className="text-5xl font-black">
            🗜 Image Compressor
          </h1>

          <p className="mt-3 text-gray-400">
            Compress your images instantly in your browser.
          </p>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  handleImage(e.target.files[0]);
                }
              }}
            />

            {loading && (
              <p className="mt-6 text-blue-400">
                Compressing...
              </p>
            )}

            {original && compressed && (
              <>
                <div className="mt-8 grid gap-6 md:grid-cols-2">

                  <div>
                    <h2 className="mb-2 font-bold">
                      Original
                    </h2>

                    <img
                      src={URL.createObjectURL(original)}
                      className="rounded-xl"
                      alt="Original"
                    />

                    <p className="mt-2 text-sm text-gray-400">
                      {(original.size / 1024).toFixed(2)} KB
                    </p>
                  </div>

                  <div>
                    <h2 className="mb-2 font-bold">
                      Compressed
                    </h2>

                    <img
                      src={URL.createObjectURL(compressed)}
                      className="rounded-xl"
                      alt="Compressed"
                    />

                    <p className="mt-2 text-sm text-green-400">
                      {(compressed.size / 1024).toFixed(2)} KB
                    </p>
                  </div>

                </div>

                <button
                  onClick={downloadImage}
                  className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
                >
                  ⬇ Download Compressed Image
                </button>
              </>
            )}

          </div>

        </div>
      </main>
    </>
  );
}