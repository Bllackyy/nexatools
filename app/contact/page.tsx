export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-5xl font-black">Contact</h1>

        <p className="mt-4 text-gray-400">
          Need a website, web app, or custom tool? Let's work together.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">
          <p className="text-lg">
            📧 Email:
          </p>

          <p className="mt-2 text-blue-400">
            bastheeyy@gmail.com
          </p>

          <p className="mt-8 text-lg">
            💼 GitHub:
          </p>

          <a
            href="https://github.com/Bllackyy"
            target="_blank"
            className="mt-2 block text-blue-400 hover:underline"
          >
            github.com/Bllackyy
          </a>
        </div>
      </div>
    </main>
  );
}