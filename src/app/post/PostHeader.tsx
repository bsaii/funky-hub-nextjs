'use client';

import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { DisplayMedium, ParagraphMedium } from 'baseui/typography';
import { useRouter } from 'next/navigation';
import React from 'react';

export const PostHeader = () => {
  const [css] = useStyletron();
  const router = useRouter();

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
          Share Your Story <br /> on Funky Hub!
        </DisplayMedium>
        <ParagraphMedium>
          Let your personality shine! <br /> Post something about yourself, your
          interests, or your latest adventures. <br /> Your friends are excited
          to get to know you better.
        </ParagraphMedium>
      </div>
    </>
  );
};
