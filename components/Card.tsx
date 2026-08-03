import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export default function Card({
  title,
  description,
  href,
  icon,
}: CardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-blue-500 hover:bg-white/10"
    >
      <div className="text-4xl">{icon}</div>

      <h2 className="mt-4 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-gray-400">
        {description}
      </p>

      <div className="mt-6 text-blue-400 font-semibold">
        Open Tool →
      </div>
    </Link>
  );
}