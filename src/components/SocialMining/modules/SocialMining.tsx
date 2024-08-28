import TenexLogo from "../../../assets/logo.svg"
import { Outlet } from "react-router-dom";
import { Main1container, LogoWrapper, LogoImage } from "../styles/SocialMining.styles";
import { MainContaier, Heading } from "../../DashBoard/styles/DashBoard.styles";

interface SocialMiningProps {
  DashBoardTitle: string;
}

const SocialMining: React.FC<SocialMiningProps> = ({ DashBoardTitle }) => {
  return (
    <>
      <Main1container>
        <LogoWrapper>
          <LogoImage src={TenexLogo} />
        </LogoWrapper>

        <MainContaier>
          <Heading>{DashBoardTitle}</Heading>
        </MainContaier>
      </Main1container>
      {<Outlet />}
    </>
  );
};

export default SocialMining;
