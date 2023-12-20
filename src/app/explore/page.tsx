'use client';

import { useStyletron } from 'baseui';
import { Cell, Grid } from 'baseui/layout-grid';
import {
  DisplayMedium,
  LabelMedium,
  ParagraphMedium,
  ParagraphXSmall,
} from 'baseui/typography';
import React from 'react';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Card, StyledBody } from 'baseui/card';
import { Tag } from 'baseui/tag';

export default function Explore() {
  const [css] = useStyletron();
  return (
    <main>
      <Grid>
        <Cell span={[4, 8, 12]}>
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
              interesting hobbies to exciting adventures, <br /> there&apos;s
              always something new to discover. <br /> Dive in and connect!
            </ParagraphMedium>
          </div>
          <div>
            <FlexGrid
              flexGridColumnCount={[1, 1, 2, 3]}
              flexGridColumnGap='scale600'
              flexGridRowGap='scale600'
            >
              <FlexGridItem
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Card overrides={{ Root: { style: { width: '328px' } } }}>
                  <StyledBody>
                    <LabelMedium>Nickname</LabelMedium>
                    <ParagraphXSmall marginTop='-0.25rem'>
                      December 20, 2023, 7:00 PM
                    </ParagraphXSmall>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
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
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                    </div>
                  </div>
                </Card>
              </FlexGridItem>
              <FlexGridItem
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Card overrides={{ Root: { style: { width: '328px' } } }}>
                  <StyledBody>
                    <LabelMedium>Nickname</LabelMedium>
                    <ParagraphXSmall marginTop='-0.25rem'>
                      December 20, 2023, 7:00 PM
                    </ParagraphXSmall>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
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
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                    </div>
                  </div>
                </Card>
              </FlexGridItem>
              <FlexGridItem
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Card overrides={{ Root: { style: { width: '328px' } } }}>
                  <StyledBody>
                    <LabelMedium>Nickname</LabelMedium>
                    <ParagraphXSmall marginTop='-0.25rem'>
                      December 20, 2023, 7:00 PM
                    </ParagraphXSmall>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
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
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                    </div>
                  </div>
                </Card>
              </FlexGridItem>
              <FlexGridItem
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Card overrides={{ Root: { style: { width: '328px' } } }}>
                  <StyledBody>
                    <LabelMedium>Nickname</LabelMedium>
                    <ParagraphXSmall marginTop='-0.25rem'>
                      December 20, 2023, 7:00 PM
                    </ParagraphXSmall>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
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
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                    </div>
                  </div>
                </Card>
              </FlexGridItem>
              <FlexGridItem
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Card overrides={{ Root: { style: { width: '328px' } } }}>
                  <StyledBody>
                    <LabelMedium>Nickname</LabelMedium>
                    <ParagraphXSmall marginTop='-0.25rem'>
                      December 20, 2023, 7:00 PM
                    </ParagraphXSmall>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
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
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                    </div>
                  </div>
                </Card>
              </FlexGridItem>
              <FlexGridItem
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Card overrides={{ Root: { style: { width: '328px' } } }}>
                  <StyledBody>
                    <LabelMedium>Nickname</LabelMedium>
                    <ParagraphXSmall marginTop='-0.25rem'>
                      December 20, 2023, 7:00 PM
                    </ParagraphXSmall>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
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
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                    </div>
                  </div>
                </Card>
              </FlexGridItem>
              <FlexGridItem
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Card overrides={{ Root: { style: { width: '328px' } } }}>
                  <StyledBody>
                    <LabelMedium>Nickname</LabelMedium>
                    <ParagraphXSmall marginTop='-0.25rem'>
                      December 20, 2023, 7:00 PM
                    </ParagraphXSmall>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
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
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                    </div>
                  </div>
                </Card>
              </FlexGridItem>
              <FlexGridItem
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Card overrides={{ Root: { style: { width: '328px' } } }}>
                  <StyledBody>
                    <LabelMedium>Nickname</LabelMedium>
                    <ParagraphXSmall marginTop='-0.25rem'>
                      December 20, 2023, 7:00 PM
                    </ParagraphXSmall>
                    Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
                    ornare faucibus ex, non facilisis nisl.
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
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                      <Tag closeable={false} variant='solid'>
                        Tavel
                      </Tag>
                    </div>
                  </div>
                </Card>
              </FlexGridItem>
            </FlexGrid>
          </div>
        </Cell>
      </Grid>
    </main>
  );
}
