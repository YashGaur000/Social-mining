import { styled } from 'styled-components';

export const Container = styled.div<{ ready: string }>`
 
  ${({ ready }) =>
    ready === 'false' &&
    `
    aria-hidden: true;
    opacity: 0;
    pointer-events: none;
    user-select: none;
  `}
`;

export const IconContainer = styled.div`
  overflow: hidden;
  margin-right: 4px;
`;

export const FlexContainer = styled.div`
  
  display: flex;
  gap: 12px;
`;
