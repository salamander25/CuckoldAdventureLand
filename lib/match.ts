export type MatchInput = {
  desiredType: string; profileType: string; distanceOk: boolean; privacy: number; experience: number; visual: number; video: number; comms: number; hardNoConflict: boolean;
};

export function scoreMatch(i: MatchInput){
  if (i.hardNoConflict || !i.distanceOk) return { score: 0, reason: 'Disqualified due to hard-no or distance boundary.' };
  let score = 0;
  if (i.desiredType === i.profileType) score += 30;
  score += i.privacy * 10 + i.experience * 10 + i.visual * 10 + i.video * 10 + i.comms * 10;
  return { score, reason: 'Scored by profile type, privacy, experience, visual preferences, video chat, and communication style.' };
}
