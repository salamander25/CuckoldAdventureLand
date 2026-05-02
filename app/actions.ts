'use server';

import { scoreMatch } from '@/lib/match';

export async function requestIntro(formData: FormData): Promise<void> {
  const targetId = formData.get('targetId');
  console.info('Intro requested for target profile:', targetId);
}

export async function runMatch() {
  return scoreMatch({
    desiredType: 'Bull',
    profileType: 'Bull',
    distanceOk: true,
    privacy: 1,
    experience: 1,
    visual: 1,
    video: 1,
    comms: 1,
    hardNoConflict: false
  });
}
