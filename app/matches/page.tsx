import { runMatch } from '@/app/actions';
export default async function Matches(){const m=await runMatch();return <div className="card"><h2 className="text-2xl">Match Recommendations</h2><p>Compatibility: {m.score}%</p><p>{m.reason}</p><p>No automatic messages are sent. Use Request Intro to proceed.</p></div>}
