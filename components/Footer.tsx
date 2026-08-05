import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Hire Me Section */}
      <section className="border-t border-white/10 bg-[#071428] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-black text-white">
            Need a Website or Web App?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            I build modern websites, dashboards, landing pages and custom web
            applications using the latest technologies.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-500"
            >
              🚀 Hire Me
            </Link>

            <a
              href="https://github.com/Bllackyy"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              💻 GitHub
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050816] py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} NexaTools. Built with ❤️ by Abdul Basith.
      </footer>
    </>
  );
}