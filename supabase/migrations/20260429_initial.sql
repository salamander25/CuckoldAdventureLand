create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key default auth.uid(),
  display_name text not null,
  profile_type text not null,
  city text,
  state text,
  relationship_status text,
  short_bio text,
  experience_level text,
  looking_for text,
  boundaries text,
  hard_no_categories text[] default '{}',
  privacy_level text default 'private',
  photo_exchange_preference text,
  video_chat_preference text,
  travel_radius int default 50,
  approved boolean default false,
  hidden boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table desire_tests(id uuid primary key default uuid_generate_v4(), user_id uuid references profiles(id), created_at timestamptz default now());
create table desire_answers(id uuid primary key default uuid_generate_v4(), desire_test_id uuid references desire_tests(id) on delete cascade, question_key text, answer_value text);
create table match_recommendations(id uuid primary key default uuid_generate_v4(), user_id uuid references profiles(id), matched_profile_id uuid references profiles(id), score int, explanation text, created_at timestamptz default now());
create table intro_requests(id uuid primary key default uuid_generate_v4(), requester_id uuid references profiles(id), target_id uuid references profiles(id), status text default 'pending', created_at timestamptz default now());
create table profile_photos(id uuid primary key default uuid_generate_v4(), profile_id uuid references profiles(id), photo_url text, is_private boolean default false, created_at timestamptz default now());
create table photo_access_grants(id uuid primary key default uuid_generate_v4(), owner_profile_id uuid references profiles(id), viewer_profile_id uuid references profiles(id), granted boolean default false, created_at timestamptz default now());
create table reports(id uuid primary key default uuid_generate_v4(), reporter_id uuid references profiles(id), reported_profile_id uuid references profiles(id), reason text, status text default 'open', created_at timestamptz default now());
create table admin_actions(id uuid primary key default uuid_generate_v4(), admin_id uuid references profiles(id), action text not null, target_type text, target_id uuid, metadata jsonb default '{}', created_at timestamptz default now());

alter table profiles enable row level security;
alter table profile_photos enable row level security;
alter table admin_actions enable row level security;

create policy "approved members view directory" on profiles for select using (approved = true and hidden = false and auth.uid() is not null);
create policy "own profile update" on profiles for update using (auth.uid() = id);
create policy "own profile select" on profiles for select using (auth.uid() = id);
create policy "private photos by grant" on profile_photos for select using (
  is_private = false or exists (
    select 1 from photo_access_grants g
    where g.owner_profile_id = profile_id and g.viewer_profile_id = auth.uid() and g.granted = true
  )
);
create policy "admin actions read" on admin_actions for select using (exists (select 1 from profiles p where p.id = auth.uid() and p.profile_type = 'Admin'));
create policy "admin actions write" on admin_actions for insert with check (exists (select 1 from profiles p where p.id = auth.uid() and p.profile_type = 'Admin'));
