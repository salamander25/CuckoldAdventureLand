import Link from 'next/link';

export default function Page() {
  return (
    <section className="card space-y-4">
      <h2 className="text-3xl font-semibold">Private. Verified. Consent-First.</h2>
      <p>A private, verified lifestyle community for consenting adults.</p>
      <div className="flex flex-wrap gap-3">
        <Link href="/age-gate" className="btn">
          Enter 18+
        </Link>
        <Link href="/apply" className="btn bg-zinc-800">
          Apply to Join
        </Link>
        <Link href="/trainer" className="btn bg-zinc-700">
          Couple Trainer + AI GPT
        </Link>
      </div>
    </section>
  );
}
