import Link from 'next/link';
const members=[{id:'1',name:'Velvet Pair',type:'Hotwife Couple'},{id:'2',name:'Night Bull',type:'Bull'}];
export default function Directory(){return <section className="space-y-3"><h2 className="text-2xl">Approved Member Directory</h2>{members.map(m=><div key={m.id} className="card"><p>{m.name} · {m.type}</p><Link className="text-gold" href={`/profile/${m.id}`}>View profile</Link></div>)}</section>}
