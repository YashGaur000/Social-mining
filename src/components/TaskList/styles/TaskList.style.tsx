import styled from 'styled-components';
import { DefaultTheme } from '../../../styles/Theme';

export const TaskBoxFullWrapper = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 90%;
  margin-top: 40px;

  @media (max-width: 1200px) {
    padding: 15px;
  }

  @media (max-width: 1030px) {
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 5px;
    width: 100%;
  }
  @media (max-width: 580px) {
    width: 100%;
  }
`;

export const TaskBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  flex-direction: column;

  gap: 40px;
  margin-top: -40px;
  font-family: ${({ theme }) => theme.fonts.main};
  background-image: url('C:/Users/DELL/Desktop/social/social-mining/src/assets/bigtenexbg.svg');

  @media (max-width: 1200px) {
    gap: 30px;
  }

  @media (max-width: 1030px) {
    gap: 25px;
  }

  @media (max-width: 768px) {
    gap: 15px;
  }
  @media (max-width: 580px) {
    //  border:2px solid crimson;

    gap: 15px;
  }
`;
export const TitleBox1 = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 580px) {
    gap: 8px;
  }
`;

export const TitleBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  // margin-top:40px;
  justify-content: space-between;
  // padding: 0px 30px;
  // gap: 20px;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;

  @media (max-width: 768px) {
  }

  @media (max-width: 580px) {
    width: 100%;
    margin-top: 3px;
  }
`;

export const TitleMiniBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
`;

export const SocialLogoBox = styled.div<{
  theme: DefaultTheme;
  Position?: string;
  width?: string;
  height?: string;
}>`
  display: flex;
  justify-content: space-around;
  position: ${({ Position }) => Position};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};

  // @media(max-width: 1200px){
  //   margin-bottom: 10px;
  // }
`;

export const SocialLogo = styled.img<{
  Position?: string;
  theme: DefaultTheme;
  margin?: string;
  width?: string;
  height?: string;
  Zindex?: string;
  expand?: boolean;
  platform?: string;
  cardType?:
    | string
    | 'twitter'
    | 'discord'
    | 'telegram'
    | 'reddit'
    | 'exchange-activity:'
    | 'article'
    | 'video'
    | undefined;
}>`
  z-index: ${({ Zindex }) => Zindex};
  position: ${({ Position }) => Position};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0px'};

  @media (min-width: 1080px) {
    height: ${({ platform }) => {
      if (platform === 'twitter') return '260px';
      if (platform === 'discord') return '224px';
      if (platform === 'telegram') return '224px';
      if (platform === 'reddit') return '224px';
      if (platform === 'exchange-activity:') return '182px';
      if (platform === 'article') return '192px';
      if (platform === 'video') return '22px';

      return '300px';
    }};
  }

  @media (min-width: 780px) {
    height: ${({ platform }) => {
      if (platform === 'twitter') return '250px';
      if (platform === 'discord') return '215px';
      if (platform === 'telegram') return '215px';
      if (platform === 'reddit') return '215px';
      if (platform === 'exchange-activity:') return '180px';
      if (platform === 'article') return '185px';
      if (platform === 'video') return '305px';

      return '300px';
    }};
  }

  @media (max-width: 580px) {
    position: absolute;
    left: 2px;

    height: ${({ expand, cardType }) => {
      switch (cardType) {
        case 'twitter':
          return expand ? '272px' : '190px';
        case 'discord':
          return expand ? '246.8px' : '190px';
        case 'telegram':
          return expand ? '246.8px' : '190px';
        case 'reddit':
          return expand ? '236px' : '180px';
        case 'exchange-activity:':
          return expand ? '201px' : '180px';
        case 'article':
          return expand ? '222px' : '180px';

        case 'video':
          return expand ? '263.12px' : '190px';
        default:
          return expand ? '264px' : '185px';
      }
    }};
  }
`;

export const SocialCheckLogo = styled.img<{
  Position?: string;
  theme: DefaultTheme;
  margin?: string;
  width?: string;
  height?: string;
  Zindex?: string;
}>`
  z-index: ${({ Zindex }) => Zindex};
  position: ${({ Position }) => Position};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0px'};

  @media (max-width: 1200px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 580px) {
    width: 12px;
  }
`;

export const SocialLogoHeading = styled.img<{
  Position?: string;
  theme: DefaultTheme;
  margin?: string;
  width?: string;
  height?: string;
  Zindex?: string;
  mobileMargin?: string;
}>`
  z-index: ${({ Zindex }) => Zindex};
  position: ${({ Position }) => Position};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0px'};

  @media (max-width: 1200px) {
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 580px) {
    margin: ${({ mobileMargin }) => mobileMargin || '0px'};
    width: 16px;
  }
`;

export const ScoreHeading = styled.p<{
  theme: DefaultTheme;
  Margin?: string;
  textalign?: string;
  Fontsize?: string;
  Lineheight?: string;
  smlineheight?: string;
  isMargin?: string;
}>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ Lineheight }) => Lineheight};
  font-size: ${({ Fontsize }) => Fontsize};
  margin: ${({ Margin }) => Margin || '0px'};
  display: flex;
  text-align: ${({ textalign }) => textalign || 'center'};
  color: ${({ theme }) => theme.colors.whiteBorder};
  @media (max-width: 720px) {
    font-size: 16px;
  }
  @media (max-width: 580px) {
    line-height: ${({ smlineheight }) => smlineheight || '20.93px'};
    text-align: ${({ textalign }) => textalign || 'start'};
    margin: ${({ isMargin }) => isMargin || '0px'};
    font-size: 12px;
  }
`;

export const LetsGoButton = styled.div<{
  margin?: string;
  theme: DefaultTheme;
}>`
  display: flex;
  margin: ${({ margin }) => margin || '0px'};
  width: 130px;

  @media (max-width: 580px) {
    margin-right: -1px;
    width: 80px;
  }
`;

export const ListBox = styled.div<{ theme: DefaultTheme }>`
  // display: flex;
  font-size: 20px;
  line-height: 30px;
  font-family: ${({ theme }) => theme.fonts.main};
  margin: 0px 0px 0px 10px;

  @media (max-width: 1200px) {
    font-size: 18px;
    line-height: 28px;
  }

  @media (max-width: 1030px) {
    font-size: 16px;
    line-height: 26px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }
  @media (max-width: 580px) {
    font-size: 14px;
    line-height: 24px;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 25px;
  margin-bottom: 20px;

  // @media (max-width: 1200px) {
  //   margin-bottom: 15px;
  // }

  @media (max-width: 580px) {
    margin-bottom: 15px;
    padding-left: 2px;
  }
`;

export const ListItem = styled.li<{
  theme: DefaultTheme;
  alignitems?: string;
  hideOnMobile?: boolean;
}>`
  display: flex;
  align-items: ${({ alignitems }) => alignitems || 'center'};
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    margin-bottom: 8px;
  }

  @media (max-width: 1030px) {
    margin-bottom: 6px;
  }

  @media (max-width: 580px) {
    text-align: start;
  }

  @media (max-width: 580px) {
    ${({ hideOnMobile }) =>
      hideOnMobile &&
      `
      display: none;
    `}
  }
`;

export const ListTitleHeading = styled.p<{
  theme: DefaultTheme;
  Margin?: string;
  textalign?: string;
  Fontsize?: string;
  Lineheight?: string;
}>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ Lineheight }) => Lineheight};
  font-size: ${({ Fontsize }) => Fontsize};
  margin: ${({ Margin }) => Margin || '0px'};

  text-align: ${({ textalign }) => textalign || 'center'};
  color: ${({ theme }) => theme.colors.whiteBorder};
  @media (max-width: 720px) {
    font-size: 16px;
  }
  @media (max-width: 580px) {
    text-align: ${({ textalign }) => textalign || 'start'};
    display: none;
  }
  @media (max-width: 400px) {
    text-align: ${({ textalign }) => textalign || 'start'};
    display: none;
  }
`;

export const Score = styled.p<{
  theme: DefaultTheme;
  Margin?: string;
  textalign?: string;
  Fontsize?: string;
  Lineheight?: string;
  smfontsize?: string;
  smlineheight?: string;
}>`
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ Lineheight }) => Lineheight};
  font-size: ${({ Fontsize }) => Fontsize};
  margin: ${({ Margin }) => Margin || '0px'};

  text-align: ${({ textalign }) => textalign || 'center'};
  color: ${({ theme }) => theme.colors.whiteBorder};
  @media (max-width: 720px) {
    font-size: 16px;
  }
  @media (max-width: 580px) {
    font-size: ${({ smfontsize }) => smfontsize || '10px'};
    line-height: ${({ smlineheight }) => smlineheight || '14.95px'};
    text-align: ${({ textalign }) => textalign || 'start'};
  }
  @media (max-width: 400px) {
    font-size: ${({ smfontsize }) => smfontsize || '10px'};
    line-height: ${({ smlineheight }) => smlineheight || '14.95px'};
    text-align: ${({ textalign }) => textalign || 'start'};
  }
`;

export const ViewMoreButton = styled.button<{ theme: DefaultTheme }>`
  display: none;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 14px;
  font-weight: 300;

  line-height: 14.95px;
  float: right;
  border: none;
  cursor: pointer;

  background-image: linear-gradient(209.3deg, #16c062 7.44%, #3eacfc 86.34%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }

  @media (max-width: 580px) {
    display: block;
    font-size: 14px;
  }
`;

export const CardIndexwrapper = styled.label`
  width: 36px;
  text-align: center;
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    width: 24px;
  }
  @media (max-width: 600px) {
    width: 16px;
  }
`;
