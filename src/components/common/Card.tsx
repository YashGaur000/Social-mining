import { styled } from 'styled-components';
import { DefaultTheme } from '../../styles/Theme';

export const Card = styled.div<{
  theme: DefaultTheme;
  height?: string;
  width?: string;
  tag?: string;
  margin?: string;
  Radius?: string;
  Boxshadow?: string;
  Padding?: string;
  background?: string;
  Opacity?: string;
  Borderradius?: string;
  Border?: string;
  BorderImageSlice?: string;
  BorderWidth?: string;
  BorderImageSource?: string;
}>`
  display: flex;
  flex-direction: column;
  background: ${({ theme, background }) => (background ? background : theme.colors.card)};
  // border-radius: 16px;
  border-radius: ${({ Borderradius }) => (Borderradius ? Borderradius : '16px')};
  padding: ${({ Padding }) => Padding ?? '20px' };
  margin: ${({ margin }) => (margin ? margin : '0px')};
  radius: ${({ Radius }) => (Radius ? Radius : '0px')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '')};
  text-align: center;
  color: ${({ theme }) => theme.colors.text}; 
  // box-shadow: -10px 0px 0px rgba(22, 192, 98, 1);
  box-shadow: ${({ Boxshadow }) => Boxshadow};
  opacity: ${({ Opacity }) => Opacity};

  border: ${({ Border }) => Border ?? '2px solid transparent'};
  
  

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
  }
`;

export const CardBox = styled.div<{
  theme: DefaultTheme;
  height?: string;
  width?: string;
  tag?: string;
  margin?: string;
  Radius?: string;
  Boxshadow?: string;
  Padding?: string;
}>`
  
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.card };
  border-radius: 10px;
  padding: 0px;
  margin: ${({ margin }) => (margin ? margin : '0px')};
  radius: ${({ Radius }) => (Radius ? Radius : '0px')};
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '')};
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  // box-shadow: -10px 0px 0px rgba(22, 192, 98, 1);
  box-shadow: ${({ Boxshadow }) => Boxshadow};
  

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
  }
`;


export const CardWrapper = styled.div<{
  theme: DefaultTheme;
  height?: string;
  width?: string;
  tag?: string;
  margin?: string;
  Radius?: string;
  Boxshadow?: string;
  Padding?: string;
}>`
  display: flex;
  width: 100%;
//  position: relative;
  // background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px 20px 20px 10px;
  padding: 0px 0px 0px 7px;
  // box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  &:after {
    content: '';
    position: absolute;
    top: -10px;
    bottom: -10px;
    left: -10px;
    right: -10px;
    background: linear-gradient(180deg, rgba(15, 27, 59, 1) 0%, rgba(35, 41, 56, 1) 100%);
    border-radius: inherit;
    z-index: -1;
    filter: blur(10px);
  }
    @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 900px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    grid-template-columns: none;
    justify-content: center;
    border-radius: 10px;
  }
`;

export const CardTitle = styled.h3<{ theme: DefaultTheme; tag?: string }>`
  
font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 35.88px;
  text-align: ${({ tag }) => (tag === 'top' ? 'center' : 'left')};
  margin-bottom: 15px;
  color: ${({ theme, tag }) =>
    tag === 'top' ? theme.colors.grey : theme.colors.title};
`;

export const CardRow = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;

  span {
    font-weight: ${({ theme }) => theme.fontWeights.regular};
  }
`;

export const CardDescription = styled.p<{
  theme: DefaultTheme;
  Lineheight?: string;
}>`
  font-size: 1em;
  line-height: ${({ Lineheight }) => Lineheight};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  color: ${({ theme }) => theme.colors.greyLight};
  margin-bottom: 20px;
`;

// background: ${({ theme, tag }) =>
//     tag === 'top' ? theme.colors.cardDark : theme.colors.card};

