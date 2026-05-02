'use client';

import { useMemo, useState } from 'react';

const lessons = [
  {
    title: 'Lesson 1: Build a Consent Framework',
    points: [
      'Define hard boundaries, soft boundaries, and aftercare needs together.',
      'Agree on stop words and check-in timings before every experience.',
      'Write your agreements down so both partners can review them calmly.',
    ],
  },
  {
    title: 'Lesson 2: Communication and Emotional Safety',
    points: [
      'Practice weekly debriefs: what felt good, what felt difficult, what changes are needed.',
      'Name emotions without blame and ask for reassurance directly.',
      'Use pacing: start with fantasy talk before introducing real-world steps.',
    ],
  },
  {
    title: 'Lesson 3: Vetting and Logistics',
    points: [
      'Verify identity, discuss STI testing windows, and confirm privacy expectations.',
      'Choose neutral locations first and plan independent transportation.',
      'Set a post-date reconnection ritual for the couple to stay bonded.',
    ],
  },
];

export default function TrainerPage() {
  const [goal, setGoal] = useState('Improve communication and trust while exploring cuckold dynamics safely.');
  const [experience, setExperience] = useState('Beginner couple, no in-person experience yet.');

  const trainerPrompt = useMemo(
    () =>
      `You are a consent-first relationship coach for couples exploring cuckold dynamics.\nGoal: ${goal}\nExperience: ${experience}\nProvide a 30-day plan with safety checklists, communication scripts, and reflective questions. Keep guidance non-explicit, respectful, and practical.`,
    [goal, experience],
  );

  return (
    <section className="space-y-6">
      <div className="card space-y-3">
        <h1 className="text-3xl font-semibold">Cuckold Couple Trainer</h1>
        <p className="text-zinc-300">
          A structured learning space for couples who want to explore this dynamic through consent, communication,
          and emotional safety.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {lessons.map((lesson) => (
          <article key={lesson.title} className="card space-y-2">
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <ul className="list-disc space-y-1 pl-5 text-zinc-300">
              {lesson.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="card space-y-4">
        <h2 className="text-2xl font-semibold">AI Trainer GPT Builder</h2>
        <p className="text-zinc-300">
          Customize a GPT prompt for your couple&apos;s goals. Copy the generated prompt into your preferred AI chat tool
          to get tailored practice plans.
        </p>
        <div className="space-y-3">
          <label className="block space-y-1">
            <span className="text-sm text-zinc-300">Primary Goal</span>
            <input className="input" value={goal} onChange={(e) => setGoal(e.target.value)} />
          </label>
          <label className="block space-y-1">
            <span className="text-sm text-zinc-300">Current Experience Level</span>
            <input className="input" value={experience} onChange={(e) => setExperience(e.target.value)} />
          </label>
          <label className="block space-y-1">
            <span className="text-sm text-zinc-300">Generated GPT Prompt</span>
            <textarea className="input min-h-40" value={trainerPrompt} readOnly />
          </label>
        </div>
      </div>
    </section>
  );
}
