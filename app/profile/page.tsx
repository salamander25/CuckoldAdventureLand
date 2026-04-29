import { profileTypes } from '@/lib/types';
export default function Profile(){return <form className="card space-y-3"><h2 className="text-2xl">Edit Profile</h2><input className="input" placeholder="display_name"/>
<select className="input">{profileTypes.map(t=><option key={t}>{t}</option>)}</select>
<input className="input" placeholder="city"/><input className="input" placeholder="state"/><textarea className="input" placeholder="boundaries"/>
<button className="btn">Save</button></form>}
