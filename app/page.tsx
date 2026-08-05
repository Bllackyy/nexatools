import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#030712] via-[#071428] to-[#050816] text-white">
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-24 text-center">
        <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm text-blue-300">
          🚀 Over 10+ Free Tools (Growing Every Week)
        </div>

        <h1 className="mt-10 text-6xl font-black leading-tight md:text-8xl">
          Build Faster.
          <br />
          Work Smarter.
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-400">
          NexaTools brings together powerful online tools that are fast,
          beautiful and completely free.
        </p>

        <div className="mt-12">
          <input
            placeholder="🔍 Search tools... (Coming Soon)"
            className="w-full max-w-3xl rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg backdrop-blur outline-none transition focus:border-blue-500"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-4xl font-black">
            Featured Tools
          </h2>

          <span className="text-gray-400">
            More tools coming soon...
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            icon="🔐"
            title="Password Generator"
            description="Generate secure passwords instantly."
            href="/tools/password-generator"
          />

          <Card
            icon="📱"
            title="QR Code Generator"
            description="Generate QR codes instantly."
            href="/tools/qr-generator"
          />

          <Card
            icon="📄"
            title="Image to PDF"
            description="Convert images into PDF files."
            href="/tools/image-to-pdf"
          />

          <Card
            icon="🗜️"
            title="Image Compressor"
            description="Reduce image file size instantly."
            href="/tools/image-compressor"
          />

          <Card
            icon="📝"
            title="Word Counter"
            description="Count words, characters and reading time."
            href="/tools/word-counter"
          />

          <Card
            icon="📄"
            title="JSON Formatter"
            description="Format, validate and minify JSON."
            href="/tools/json-formatter"
          />

          <Card
            icon="🆔"
            title="UUID Generator"
            description="Generate secure Version 4 UUIDs instantly."
            href="/tools/uuid-generator"
          />

          <Card
            icon="🔤"
            title="Base64 Encoder"
            description="Encode and decode Base64 instantly."
            href="/tools/base64"
          />

          <Card
            icon="🔠"
            title="Text Case Converter"
            description="Convert text to uppercase, lowercase and title case."
            href="/tools/text-case-converter"
          />

          <Card
            icon="🕒"
            title="Timestamp Converter"
            description="Convert Unix timestamps into readable dates."
            href="/tools/timestamp-converter"
          />
        </div>
      </section>
    </main>
  );
}