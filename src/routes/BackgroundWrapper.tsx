import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalStyles from './../styles/GlobalStyles';
import theme from './../styles/Theme';

interface BackgroundWrapperProps {
  children: ReactNode;
}

const BackgroundWrapper: React.FC<BackgroundWrapperProps> = ({ children }) => {
  const location = useLocation();

  let background = theme.colors.background; // Default background

  switch (location.pathname) {
    case '/':
      background = theme.colors.backgroundHome;
      break;
    case '/swap':
      background = theme.colors.backgroundSwap;
      break;
    case '/documentation':
      background = theme.colors.backgroundDocs;
      break;
    default:
      if (location.pathname.startsWith('/documentation')) {
        background = theme.colors.backgroundDocs;
      } else {
        background = theme.colors.backgroundSwap; // Fallback background
      }
  }

  return (
    <>
      <GlobalStyles theme={theme} background={background} />
      {children}
    </>
  );
};

export default BackgroundWrapper;
