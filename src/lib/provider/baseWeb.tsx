'use client';

import React from 'react';
import { Client, Server } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { BaseProvider, LightTheme, createTheme } from 'baseui';
import { ToasterContainer } from 'baseui/toast';

export const BaseWebProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={LightTheme}>
        <ToasterContainer placement='topRight' autoHideDuration={2500}>
          {children}
        </ToasterContainer>
      </BaseProvider>
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
