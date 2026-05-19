import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-narrow min-h-[60vh] flex flex-col items-center justify-center text-center py-32">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[--accent-hover]">
        404
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-[--fg]">
        Page not found.
      </h1>
      <p className="mt-3 max-w-md text-[--fg-muted] leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[--accent] hover:bg-[--accent-hover] text-white font-medium text-sm transition-colors"
      >
        Back to home →
      </Link>
    </section>
  );
}
