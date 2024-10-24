import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

interface GradientButtonProps {
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  borderRadius?: string;
  border?: string;
  background?: string;
  color?: string;
  cursor?: string;
  margin?: string;
  className?: string;
  alignitems?: string;
  children: React.ReactNode;
}

export const StyledButton = styled.button<
  GradientButtonProps & { theme: DefaultTheme }
>`
  display
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  padding: ${({ padding }) => padding ?? '12px 31.5px'};
  border: ${({ border }) => border ?? '1px solid transparent'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '12px'};
  background: ${({ theme, background }) => background ?? theme.colors.card},
    ${({ theme, background }) => background ?? theme.colors.buttonBackground};
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
  cursor: ${({ cursor }) => cursor ?? 'pointer'};
  font-size: ${({ fontSize }) => fontSize ?? '20px'};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: 29.9px;
  letter-spacing: 0.02em;
  text-align: center;
  color: ${({ theme, color }) => color ?? theme.colors.buttonBackground};
  margin: ${({ margin }) => margin};
  align-items: ${({ alignitems }) => alignitems };

   &:hover {
    border: ${({ border }) => border ?? '1px solid transparent'};
    box-shadow: none; /* Explicitly set box-shadow to none */
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 10px;
  }
`;

// export const GradientSpan = styled.span<{
//   fontSize?: number;
//   Color?: string;
//   isActive?: boolean;
//   theme: DefaultTheme;
// }>`
//   color: ${({ Color }) => Color};
//   font-size: ${({ fontSize }) => fontSize}px;
//   font-family: ${({ theme }) => theme.fonts.main};
//   background: ${({ isActive, theme }) =>
//     isActive ? 'black' : theme.colors.buttonBackground};
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   display: inline-block;
//   transition: background 0.3s ease;
// `;

// export const GradientSpan = styled.span<{
//   fontSize?: number;
//   isActive?: boolean;
//   theme: DefaultTheme;
// }>`
//   font-size: ${({ fontSize }) => fontSize}px;
//   font-family: ${({ theme }) => theme.fonts.main};
//   border : ${({ isActive }) =>
//     isActive ? 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)' : 'transparent'};
//   background: ${({ isActive }) =>
//     isActive ? 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)' : 'transparent'};
//   -webkit-background-clip: text;
//   // -webkit-text-fill-color: ${({ isActive }) => (isActive ? 'transparent' : 'white')};
//   // background-clip: text; // For cross-browser support
//   // -webkit-text-fill-color: ${({ isActive }) => (isActive ? 'transparent' : 'white')};
//   // transition: background 0.3s ease;
// `;

export const GradientSpan = styled.span<{
  fontSize?: number;
  isActive?: boolean;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  background: ${({ isActive }) =>
    isActive
      ? 'linear-gradient(188.32deg, #47FF99 -7.09%, #3EACFC 99.48%)'
      : 'white'};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ isActive }) =>
    isActive ? 'transparent' : 'white'};
`;

const GradientButton: React.FC<GradientButtonProps> = ({
  width,
  height,
  padding,
  fontSize,
  borderRadius,
  border,
  background,
  color,
  cursor,
  margin,
  children,
}: GradientButtonProps) => {
  return (
    <StyledButton
      width={width}
      height={height}
      padding={padding}
      fontSize={fontSize}
      borderRadius={borderRadius}
      border={border}
      background={background}
      color={color}
      cursor={cursor}
      margin={margin}
    >
      <GradientSpan>{children}</GradientSpan>
    </StyledButton>
  );
};

export default GradientButton;
