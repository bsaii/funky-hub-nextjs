'use client';

import { Cell, Grid } from 'baseui/layout-grid';
import React, { ReactNode } from 'react';

export const PostContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Grid>
      <Cell span={[4, 8, 12]}>{children}</Cell>
    </Grid>
  );
};
