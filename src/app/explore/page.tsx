import React from 'react';
import { ExploreContainer } from './ExploreContainer';
import { ExploreHeader } from './ExploreHeader';
import { ExploreContent } from './ExploreContent';

const funky_api = process.env.NEXT_PUBLIC_FUNKY_HUB_ENDPOINT ?? '';

async function getPosts() {
  const res = await fetch(`${funky_api}/feeds`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to get feeds.');
  }

  const feeds = (await res.json()) as {
    feeds: Array<{
      id: string;
      about_you: string;
      interests: Array<string>;
      nickname: string;
      created_at: Date;
    }>;
  };

  return feeds.feeds;
}

export default async function Explore() {
  const feeds = await getPosts();
  return (
    <main>
      <ExploreContainer>
        <ExploreHeader />
        <ExploreContent feeds={feeds} />
      </ExploreContainer>
    </main>
  );
}
