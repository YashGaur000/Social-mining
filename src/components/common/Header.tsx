// import Tenexlogo from '../../../assets/Tenexlogo.png';
// import styled from "styled-components";
// import { DefaultTheme } from '../../styles/Theme';

// export const HeaderBox = styled.div`
//   display: flex;
//   align-item: flex-start;
//   justify-content: space-between;
// `;

// export const Logo = styled.div`
//   display: flex;
  
// `;

// export const SocialLogo = styled.img<{ 
//     theme: DefaultTheme;
//     margin?: string;
//     width?: string;
//     height?: string;
// }>`
//   width: ${({ width }) => width};
//   height: ${({ height }) => height};
//   margin: ${({ margin }) => (margin ? margin : '0px')};
// `;

// export const TitleBox = styled.div<{ theme: DefaultTheme}>`
//     display: flex;
// `;

// export const Title = styled.p<{ theme: DefaultTheme}>`
//   color: rgba(255, 255, 255, 1);
//   font-size: 36px;
//   margin-left: auto;
//   font-family: ${({ theme }) => theme.fonts.main};
// `;

// const Header: React.FC = () => (
//   <HeaderBox>
//     <Logo>
//         <SocialLogo src={Tenexlogo} alt="Tenex logo"/>
//     </Logo>
//     <TitleBox>
//     <Title>Leaderboards</Title>
//     </TitleBox>
//   </HeaderBox>
// );

// export default Header;