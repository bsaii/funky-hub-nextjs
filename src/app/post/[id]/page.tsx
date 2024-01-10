import React from 'react';
import { PostContainer } from '../PostContainer';
import { PostContent } from './PostContent';

const funky_api = process.env.NEXT_PUBLIC_FUNKY_HUB_ENDPOINT ?? '';

async function getPost(id: string) {
  const res = await fetch(`${funky_api}/feed/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch post with id ${id}`);
  }

  const feed = (await res.json()) as {
    feed: {
      id: string;
      about_you: string;
      interests: Array<string>;
      nickname: string;
      created_at: Date;
    };
  };

  return feed.feed;
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const feed = await getPost(id);
  return (
    <main>
      <PostContainer>
        <PostContent feed={feed} />
      </PostContainer>
    </main>
  );
}
