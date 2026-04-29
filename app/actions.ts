'use server';

import { scoreMatch } from '@/lib/match';

export async function requestIntro(formData: FormData){
  return { ok: true, message: `Intro requested for ${formData.get('targetId')}` };
}

export async function runMatch(){
  return scoreMatch({ desiredType:'Bull', profileType:'Bull', distanceOk:true, privacy:1, experience:1, visual:1, video:1, comms:1, hardNoConflict:false });
}
