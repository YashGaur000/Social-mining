import styled from "styled-components";
import { DefaultTheme } from "../../../styles/Theme";

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
`;

export const TitleBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 24px;


`;

export const TitleMiniBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
`;

export const SocialLogoBox = styled.div<{ theme: DefaultTheme 
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
}>`
  z-index: ${({ Zindex }) => Zindex};
  position: ${({ Position }) => Position}; 
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0px'};



    @media (max-width: 1024px) {
    height:30px;
    width:30px;
  }

    @media (max-width: 768px) {
   height:24px;
    width:24px;
  }
       @media (max-width: 500px) {
   height:16px;
    width:16px;
  }
`;

export const LetsGoButton = styled.div<{ 
  margin?: string; 
  theme: DefaultTheme 
}>`
  display: flex;
  margin: ${({ margin }) => margin || '0px'};  
  width: 130px;

 
`;

export const ListBox = styled.div<{ theme: DefaultTheme }>`
  display: flex;
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
`;

export const List = styled.ul`
  list-style-type: none;
  padding-left: 25px;
  margin-bottom: 20px;

  // @media (max-width: 1200px) {
  //   margin-bottom: 15px;
  // }

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const ListItem = styled.li<{ 
  theme: DefaultTheme;
  alignitems?: string;
}>`
  display: flex;
  align-items: ${({ alignitems }) => alignitems || 'center'};
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    gap: 8px;
    margin-bottom: 8px;
  }

  @media (max-width: 1030px) {
    gap: 6px;
    margin-bottom: 6px;
  }

  @media (max-width: 768px) {
    gap: 5px;
    margin-bottom: 5px;
    
  }
`;

export const Score = styled.p<{ 
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
   @media (max-width: 720px){
   font-size:16px;
 
  }
  @media (max-width: 600px){
   font-size:14px;
 
  }
    @media (max-width: 400px){
   font-size:12px;
 
  }
 
`;
export const CardIndexwrapper=styled.label`
width:36px;
text-align:center;
display:flex;
justify-content:center;
@media (max-width: 700px){
    width:24px;
 
  }
   @media (max-width: 600px){
   width:16px;
 
  }
`