const recentUploads = [
  { id: 1, title: 'Beach sunset', user: 'CoupleLounge22', day: 'Today', color: 'from-pink-500 to-orange-500' },
  { id: 2, title: 'Date night', user: 'VelvetPair', day: 'Today', color: 'from-purple-500 to-fuchsia-500' },
  { id: 3, title: 'Weekend brunch', user: 'GoldenHearts', day: 'Yesterday', color: 'from-rose-500 to-red-500' },
  { id: 4, title: 'Poolside smile', user: 'NightOwlPair', day: 'Yesterday', color: 'from-indigo-500 to-purple-500' },
  { id: 5, title: 'Summer dress', user: 'OpenVibes', day: '2 days ago', color: 'from-amber-500 to-red-500' },
  { id: 6, title: 'Concert lights', user: 'MoonlitDuo', day: '2 days ago', color: 'from-cyan-500 to-blue-500' },
];

export default function DailyPostsPage() {
  return (
    <section className="space-y-6">
      <div className="card space-y-3">
        <h2 className="text-2xl font-semibold">Daily Wife Photo Post</h2>
        <p className="text-zinc-300">
          Share one daily photo post, then browse a quick index of small photos from members who uploaded recently.
        </p>
        <form className="grid gap-3 md:grid-cols-2">
          <input className="input" type="text" placeholder="Post title" aria-label="Post title" />
          <input className="input" type="text" placeholder="Your username" aria-label="Your username" />
          <textarea
            className="input md:col-span-2"
            rows={3}
            placeholder="Add a short caption for today's upload"
            aria-label="Upload caption"
          />
          <input className="input md:col-span-2" type="file" aria-label="Upload photo" accept="image/*" />
          <button type="button" className="btn w-fit">Post daily upload</button>
        </form>
      </div>

      <div className="card space-y-4">
        <div>
          <h3 className="text-xl font-semibold">Recently Uploaded</h3>
          <p className="text-sm text-zinc-400">Small-photo index of latest member uploads.</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {recentUploads.map((upload) => (
            <article key={upload.id} className="space-y-2">
              <div className={`h-28 w-full rounded-md bg-gradient-to-br ${upload.color}`} />
              <div>
                <p className="text-sm font-medium">{upload.title}</p>
                <p className="text-xs text-zinc-400">{upload.user}</p>
                <p className="text-xs text-zinc-500">{upload.day}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
