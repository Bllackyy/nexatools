"use client";

import Navbar from "@/components/Navbar";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { jsPDF } from "jspdf";

export default function ImageToPDF() {
  const [images, setImages] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImages((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
  });

  async function createPDF() {
    if (images.length === 0) return;

    setLoading(true);

    const pdf = new jsPDF();

    for (let i = 0; i < images.length; i++) {
      const file = images[i];

      const data = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });

      if (i > 0) pdf.addPage();

      pdf.addImage(data, "JPEG", 10, 10, 190, 250);
    }

    pdf.save("NexaTools.pdf");

    setLoading(false);
  }

  function removeImage(index: number) {
    setImages(images.filter((_, i) => i !== index));
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white px-6 py-12">

        <div className="mx-auto max-w-4xl">

          <h1 className="text-5xl font-black">
            📄 Image to PDF
          </h1>

          <p className="mt-3 text-gray-400">
            Convert one or multiple images into a PDF.
          </p>

          <div
            {...getRootProps()}
            className={`mt-10 rounded-3xl border-2 border-dashed p-12 text-center cursor-pointer transition ${
              isDragActive
                ? "border-blue-500 bg-blue-500/10"
                : "border-white/20"
            }`}
          >
            <input {...getInputProps()} />

            <p className="text-xl">
              📂 Drag & Drop Images Here
            </p>

            <p className="mt-2 text-gray-400">
              or click to browse
            </p>
          </div>

          {images.length > 0 && (
            <>
              <h2 className="mt-12 text-2xl font-bold">
                Uploaded Images
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt=""
                      className="h-48 w-full rounded-xl object-cover"
                    />

                    <p className="mt-3 truncate text-sm">
                      {image.name}
                    </p>

                    <button
                      onClick={() => removeImage(index)}
                      className="mt-4 w-full rounded-xl bg-red-600 py-2 hover:bg-red-500 transition"
                    >
                      Remove
                    </button>
                  </div>
                ))}

              </div>

              <button
                onClick={createPDF}
                disabled={loading}
                className="mt-10 w-full rounded-2xl bg-blue-600 py-5 text-xl font-bold hover:bg-blue-500 transition disabled:opacity-50"
              >
                {loading ? "Creating PDF..." : "📄 Download PDF"}
              </button>
            </>
          )}

        </div>

      </main>
    </>
  );
}