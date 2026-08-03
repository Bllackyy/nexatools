export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} NexaTools. Built with ❤️ using Next.js.
    </footer>
  );
}