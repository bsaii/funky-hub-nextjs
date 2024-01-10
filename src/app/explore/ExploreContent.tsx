'use client';

import { useStyletron } from 'baseui';
import { Card, StyledBody } from 'baseui/card';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Tag } from 'baseui/tag';
import { LabelMedium, ParagraphXSmall } from 'baseui/typography';
import Link from 'next/link';
import React from 'react';

export const ExploreContent = ({
  feeds,
}: {
  feeds: {
    id: string;
    about_you: string;
    interests: string[];
    nickname: string;
    created_at: Date;
  }[];
}) => {
  const [css] = useStyletron();

  const $createdAt = (date: Date) => {
    const $date = new Date(date);
    return $date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  function truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  }

  return (
    <div>
      <FlexGrid
        flexGridColumnCount={[1, 1, 2, 3]}
        flexGridColumnGap='scale600'
        flexGridRowGap='scale600'
      >
        {feeds.map((feed, index) => (
          <FlexGridItem
            key={index}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Link
              href={`/post/${feed.id}`}
              className={css({ textDecoration: 'none' })}
            >
              <Card overrides={{ Root: { style: { width: '328px' } } }}>
                <StyledBody>
                  <LabelMedium>
                    @{feed.nickname.toLocaleLowerCase()}
                  </LabelMedium>
                  <ParagraphXSmall marginTop='-0.25rem'>
                    {$createdAt(feed.created_at)}
                  </ParagraphXSmall>
                  {truncateText(feed.about_you, 150)}
                </StyledBody>
                <div
                  className={css({
                    marginTop: '.5rem',
                    marginBottom: '.5rem',
                  })}
                >
                  <div
                    className={css({
                      display: 'flex',
                      gap: '0.05rem',
                      flexWrap: 'wrap',
                    })}
                  >
                    {feed.interests.slice(0, 4).map((interest, index) => (
                      <Tag key={index} closeable={false} variant='solid'>
                        {interest}
                      </Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          </FlexGridItem>
        ))}
      </FlexGrid>
    </div>
  );
};
