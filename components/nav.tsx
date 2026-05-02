import Link from 'next/link';
const links = ['dashboard','profile','directory','daily-posts','desire-test','matches','intro-requests','admin'];
export function Nav(){
  return <nav className="flex flex-wrap gap-3 text-sm">{links.map(l=><Link key={l} className="text-gold" href={`/${l}`}>{l}</Link>)}</nav>;
}
