'use client';

import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { DisplayMedium, ParagraphMedium } from 'baseui/typography';
import { useRouter } from 'next/navigation';
import React from 'react';

export const ExploreHeader = () => {
  const [css] = useStyletron();
  const router = useRouter();

  return (
    <>
      <div className={css({ marginTop: '4rem', marginBottom: '4rem' })}>
        <Button onClick={() => router.push('/')}>Home</Button>
      </div>
      <div
        className={css({
          marginTop: '3.5rem',
          textAlign: 'right',
        })}
      >
        <DisplayMedium marginBottom='scale500'>
          Discover Stories <br /> on Funky Hub!
        </DisplayMedium>
        <ParagraphMedium>
          Explore the vibrant stories shared by your friends. <br /> From
          interesting hobbies to exciting adventures, <br /> there&apos;s always
          something new to discover. <br /> Dive in and connect!
        </ParagraphMedium>
      </div>
    </>
  );
};
