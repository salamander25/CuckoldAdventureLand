const samplePosts = [
  {
    id: 1,
    title: 'Saturday Date Night',
    author: 'M & T',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    imageUrl: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80',
    caption: 'Verified couple sharing a consented highlight from the weekend.',
  },
  {
    id: 2,
    title: 'Beach Weekend Album',
    author: 'R & J',
    videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
    caption: 'Photo upload from a private trip, posted with partner approval.',
  },
];

export default function ShowcasePage() {
  return (
    <section className="space-y-8">
      <header className="card space-y-3">
        <h1 className="text-3xl font-semibold">Community Video & Photo Posts</h1>
        <p className="text-zinc-300">
          A private feed where members can share videos and photos with explicit partner consent.
        </p>
      </header>

      <div className="grid gap-6">
        {samplePosts.map((post) => (
          <article key={post.id} className="card space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-zinc-400">Posted by {post.author}</p>
            </div>
            <video controls className="w-full rounded-2xl border border-zinc-800" preload="metadata">
              <source src={post.videoUrl} type="video/mp4" />
              Your browser does not support video playback.
            </video>
            <img src={post.imageUrl} alt={`${post.title} preview`} className="w-full rounded-2xl border border-zinc-800" />
            <p className="text-zinc-300">{post.caption}</p>
          </article>
        ))}
      </div>

      <section className="card space-y-4">
        <h2 className="text-2xl font-semibold">Upload a New Post</h2>
        <p className="text-zinc-400 text-sm">All submissions require a partner consent confirmation before publishing.</p>
        <form className="grid gap-4 md:grid-cols-2">
          <label className="grid gap-2">
            <span className="text-sm">Post title</span>
            <input className="rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2" name="title" placeholder="Enter a title" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm">Display name</span>
            <input className="rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2" name="author" placeholder="Your names" />
          </label>
          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm">Upload video</span>
            <input className="rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2" name="video" type="file" accept="video/*" />
          </label>
          <label className="grid gap-2 md:col-span-2">
            <span className="text-sm">Upload photos</span>
            <input className="rounded-lg bg-zinc-900 border border-zinc-700 px-3 py-2" name="photos" type="file" accept="image/*" multiple />
          </label>
          <label className="flex items-start gap-2 md:col-span-2 text-sm text-zinc-300">
            <input type="checkbox" className="mt-1" required />
            I confirm all people shown have consented to this content being uploaded.
          </label>
          <button className="btn md:col-span-2" type="submit">Submit for Review</button>
        </form>
      </section>
    </section>
  );
}
