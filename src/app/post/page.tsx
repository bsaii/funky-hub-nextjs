'use client';

import { Cell, Grid } from 'baseui/layout-grid';
import { DisplayMedium, ParagraphMedium } from 'baseui/typography';
import React, { useState } from 'react';
import { useStyletron } from 'baseui';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { Select } from 'baseui/select';
import { Textarea } from 'baseui/textarea';

type TPost = {
  nickname: string;
  interests: Array<{ id: number; label: string; isCreatable?: boolean }>;
  about_you: string;
};

export default function Post() {
  const [css] = useStyletron();

  const [nickname, setNickname] = useState('');

  return (
    <main>
      <Grid>
        <Cell span={[4, 8, 12]}>
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
              Let your personality shine! <br /> Post something about yourself,
              your interests, or your latest adventures. <br /> Your friends are
              excited to get to know you better.
            </ParagraphMedium>
          </div>
          <div
            className={css({
              maxWidth: '35rem',
            })}
          >
            <form>
              <FormControl
                label={() => 'Your nickname'}
                caption={() => 'What friends call you.'}
                positive={undefined}
                // error='Oops! Looks like the nickname field is empty. Please provide a nickname.'
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
                  options={[
                    { label: 'Traveling' },
                    { label: 'Reading' },
                    { label: 'Photography' },
                    { label: 'Cooking' },
                    { label: 'Gaming' },
                    { label: 'Sports' },
                    { label: 'Music' },
                    { label: 'Art and Design' },
                    { label: 'Technology' },
                    { label: 'Fitness' },
                    { label: 'Coding' },
                    { label: 'Dancing' },
                    { label: 'Nature Exploration' },
                    { label: 'Fashion' },
                    { label: 'Writing' },
                  ]}
                />
              </FormControl>

              <FormControl
                label='Write Your Vibe'
                // error="Oops! It seems you forgot to share something. Don't leave us hanging!"
              >
                <Textarea
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
                type='submit'
                style={{ paddingLeft: '6.5rem', paddingRight: '6.5rem' }}
              >
                Post
              </Button>
            </form>
          </div>
        </Cell>
      </Grid>
    </main>
  );
}
