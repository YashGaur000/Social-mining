import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/Theme';

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <StyledThemeProvider theme={theme}>
    <GlobalStyles theme={theme} background={theme.colors.background} />
    {children}
  </StyledThemeProvider>
);

export default ThemeProvider;
