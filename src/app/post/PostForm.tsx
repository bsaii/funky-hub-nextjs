'use client';

import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Select, Value } from 'baseui/select';
import { Textarea } from 'baseui/textarea';
import React, { useState } from 'react';
import { postFunky } from '../actions';
import { useRouter } from 'next/navigation';
import { toaster } from 'baseui/toast';

export const PostForm = () => {
  const [nickname, setNickname] = useState('');
  const [interests, setInterests] = useState<Value>([]);
  const [aboutYou, setAboutYou] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [css] = useStyletron();
  const router = useRouter();

  return (
    <form
      className={css({
        maxWidth: '35rem',
      })}
    >
      <FormControl
        label={() => 'Your nickname'}
        caption={() => 'What friends call you.'}
      >
        <Input
          id='nickname-id'
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
      </FormControl>

      <FormControl
        label='Your interests'
        caption='Choose one or more interests that best describe you'
      >
        <Select
          creatable
          multi
          required
          placeholder='Select interests'
          value={interests}
          onChange={(params) => setInterests(params.value)}
          options={[
            { label: 'Traveling', id: 'traveling' },
            { label: 'Reading', id: 'reading' },
            { label: 'Photography', id: 'photography' },
            { label: 'Cooking', id: 'cooking' },
            { label: 'Gaming', id: 'gaming' },
            { label: 'Sports', id: 'sports' },
            { label: 'Music', id: 'music' },
            { label: 'Art and Design', id: 'art and design' },
            { label: 'Technology', id: 'technology' },
            { label: 'Fitness', id: 'fitness' },
            { label: 'Coding', id: 'coding' },
            { label: 'Dancing', id: 'dancing' },
            { label: 'Nature Exploration', id: 'nature exploration' },
            { label: 'Fashion', id: 'fashion' },
            { label: 'Writing', id: 'writing' },
          ]}
        />
      </FormControl>

      <FormControl label='Write Your Vibe'>
        <Textarea
          value={aboutYou}
          onChange={(e) => setAboutYou(e.target.value)}
          placeholder='Express yourself! Write about your hobbies, experiences, or simply what makes you, you.'
          clearable
          clearOnEscape
          resize='both'
          rows={7}
          overrides={{
            Root: {
              style: {
                width: '100%',
              },
            },
          }}
          required
        />
      </FormControl>
      <Button
        type='button'
        style={{ paddingLeft: '6.5rem', paddingRight: '6.5rem' }}
        onClick={async () => {
          setIsLoading(true);
          const $interests: string[] = [];

          interests.map((interest) => {
            if (!interest.id) return;
            $interests.push(interest.id.toString().toLowerCase());
          });

          await postFunky({
            aboutYou,
            interests: $interests,
            nickname,
          })
            .then((res) => {
              console.log(res);
              setIsLoading(false);
              toaster.positive(<>You joined in. You rock!</>);
              router.push(`/post/${res.id}`);
            })
            .catch((err) => {
              console.error(err);
              toaster.negative(
                <>Connection error. Check internet and try again.</>
              );
            });
        }}
        disabled={isLoading}
        isLoading={isLoading}
      >
        Post
      </Button>
    </form>
  );
};
