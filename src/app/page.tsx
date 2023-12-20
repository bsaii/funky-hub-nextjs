'use client';

import { useStyletron } from 'baseui';
import { Button } from 'baseui/button';
import { Cell, Grid } from 'baseui/layout-grid';
import { DisplayLarge, ParagraphLarge } from 'baseui/typography';
import Link from 'next/link';

export default function Home() {
  const [css] = useStyletron();
  return (
    <main>
      <Grid>
        <Cell span={[4, 8, 12]}>
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '7.5rem',
            })}
          >
            <DisplayLarge marginBottom='scale500'>
              Welcome to FunkyHub!
            </DisplayLarge>
            <ParagraphLarge marginBottom='scale600'>
              Where friends share a bit about themselves. Discover the unique
              stories, quirks, and adventures of your pals.
            </ParagraphLarge>
            <div
              className={css({
                display: 'flex',
                gap: '1rem',
              })}
            >
              <Link href='/post'>
                <Button>Post Something</Button>
              </Link>
              <Link href='/explore'>
                <Button kind='secondary'>View Posts</Button>
              </Link>
            </div>
          </div>
        </Cell>
      </Grid>
    </main>
  );
}
