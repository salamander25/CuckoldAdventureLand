'use client';

import { FormEvent, useMemo, useState } from 'react';

type ChatMessage = {
  id: number;
  user: string;
  text: string;
  timestamp: string;
};

const seedMessages: ChatMessage[] = [
  { id: 1, user: 'ModBot', text: 'Welcome to the community chat room. Be respectful and consent-first.', timestamp: 'Now' }
];

export default function ChatPage() {
  const [name, setName] = useState('Guest');
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>(seedMessages);

  const canSend = useMemo(() => draft.trim().length > 0 && name.trim().length > 0, [draft, name]);

  const onSend = (event: FormEvent) => {
    event.preventDefault();
    if (!canSend) return;

    setMessages((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        user: name.trim(),
        text: draft.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setDraft('');
  };

  return (
    <section className="card space-y-4">
      <h2 className="text-3xl font-semibold">Community Chat Room</h2>
      <p className="text-zinc-300">Live room prototype for members to meet and talk in real time.</p>

      <div className="grid gap-3 sm:grid-cols-[200px_1fr]">
        <label className="text-sm font-medium text-zinc-200" htmlFor="display-name">
          Display Name
          <input
            id="display-name"
            className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <form onSubmit={onSend} className="flex gap-2">
          <input
            className="w-full rounded-lg border border-zinc-700 bg-zinc-900 p-2"
            placeholder="Type a message…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <button type="submit" disabled={!canSend} className="btn disabled:opacity-50">
            Send
          </button>
        </form>
      </div>

      <div className="space-y-2 rounded-xl border border-zinc-800 bg-zinc-950 p-3">
        {messages.map((message) => (
          <div key={message.id} className="rounded-lg border border-zinc-800 bg-zinc-900 p-2">
            <p className="text-xs text-zinc-400">{message.user} • {message.timestamp}</p>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
