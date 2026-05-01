const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export async function supabaseFetch(path: string, init?: RequestInit) {
  const url = `${supabaseUrl}/rest/v1/${path}`;
  return fetch(url, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`,
      ...(init?.headers || {})
    }
  });
}
