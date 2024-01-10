'use server';

const funky_api = process.env.NEXT_PUBLIC_FUNKY_HUB_ENDPOINT ?? '';

export async function postFunky({
  aboutYou,
  interests,
  nickname,
}: {
  nickname: string;
  interests: Array<string>;
  aboutYou: string;
}) {
  try {
    const res = await fetch(`${funky_api}/feed`, {
      method: 'POST',
      body: JSON.stringify({ about_you: aboutYou, nickname, interests }),
    });

    if (!res.ok) {
      const creatFeedErr = await res.json();
      console.error(creatFeedErr);
      throw Error(creatFeedErr);
    }

    const newFeed = (await res.json()) as {
      msg: string;
      feed: {
        id: string;
        about_you: string;
        interests: Array<string>;
        nickname: string;
        created_at: string;
      };
    };

    return { id: newFeed.feed.id };
  } catch (error) {
    console.error('Failed to create a funky.', error);
    throw new Error('Failed to create a funky.');
  }
}
