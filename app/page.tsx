import Link from 'next/link';

export default function Page() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-panel/90 p-8 shadow-2xl shadow-black/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.2),transparent_55%)]" />

      <div className="relative mx-auto max-w-2xl space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">Members-Only Community</p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Private. Verified.
          <span className="block text-red-400">Consent-First.</span>
        </h1>
        <p className="text-base text-zinc-300 sm:text-lg">
          A discreet, invitation-style space for consenting adults. Please confirm your age to continue or leave this
          site now.
        </p>

        <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:justify-center">
          <Link href="/age-gate" className="btn px-6 py-3 text-base">
            Enter 18+
          </Link>
          <Link
            href="https://www.google.com"
            className="rounded-md border border-zinc-600 bg-zinc-900/70 px-6 py-3 text-base font-semibold text-zinc-200 transition hover:bg-zinc-800"
          >
            Exit Site
          </Link>
        </div>
      </div>
    </section>
  );
}
