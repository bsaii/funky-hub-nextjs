'use client';

import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { Tag } from 'baseui/tag';
import {
  DisplayLarge,
  DisplayMedium,
  LabelSmall,
  ParagraphMedium,
} from 'baseui/typography';
import { useRouter } from 'next/navigation';
import React from 'react';

export const PostContent = ({
  feed,
}: {
  feed: {
    id: string;
    about_you: string;
    interests: string[];
    nickname: string;
    created_at: Date;
  };
}) => {
  const [css] = useStyletron();
  const router = useRouter();

  const { about_you, created_at, id, interests, nickname } = feed;

  const date = new Date(created_at);
  const createdAt = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <div className={css({ marginTop: '4rem', marginBottom: '4rem' })}>
        <Button onClick={() => router.back()}>Back</Button>
      </div>
      <div
        className={css({
          marginTop: '3.5rem',
          marginBottom: '1rem',
        })}
      >
        <DisplayMedium marginBottom='scale500'>
          View the shared post <br /> on Funky Hub!
        </DisplayMedium>
        <ParagraphMedium>
          Explore the vibrant world of {nickname}! <br /> This page unveils the
          unique story and interests of {nickname}, offering a glimpse into{' '}
          <br />
          their life. Discover the individuality that shapes {nickname}&apos;s
          personality and passions. <br /> Dive into this engaging profile to
          get to know {nickname} on a more personal level.
        </ParagraphMedium>
      </div>
      <div className={css({ marginTop: '5rem', marginBottom: '5rem' })}>
        <DisplayLarge marginBottom='scale300' maxWidth={'15rem'}>
          @{nickname.toLocaleLowerCase()}
        </DisplayLarge>
        <LabelSmall>{createdAt}</LabelSmall>
        <ParagraphMedium maxWidth={'45rem'}>{about_you}</ParagraphMedium>
      </div>
      <div
        className={css({
          display: 'flex',
          gap: '0.05rem',
          flexWrap: 'wrap',
          maxWidth: '30rem',
          marginTop: '1.5rem',
          marginBottom: '1.5rem',
        })}
      >
        {interests.map((interest, index) => (
          <Tag key={index} closeable={false} size='medium'>
            {interest}
          </Tag>
        ))}
      </div>
    </>
  );
};
