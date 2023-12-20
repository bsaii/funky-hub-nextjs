'use client';

import React from 'react';
import { Client, Server } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, LightTheme, createTheme } from 'baseui';

export const BaseWebProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>{children}</BaseProvider>
    </StyletronProvider>
  );
};

const getHydrateClass = () =>
  document.getElementsByClassName(
    '_styletron_hydrate_'
  ) as HTMLCollectionOf<HTMLStyleElement>;

const styletron =
  typeof window === 'undefined'
    ? new Server()
    : new Client({
        hydrate: getHydrateClass(),
      });
