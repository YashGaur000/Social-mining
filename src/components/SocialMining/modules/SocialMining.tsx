import TenexLogo from "../../../assets/tenexlogo.svg"
import { Outlet} from "react-router-dom";
import { Main1container, LogoWrapper, LogoImage } from "../styles/SocialMining.styles";
import { MainContaier, Heading } from "../../DashBoard/styles/DashBoard.styles";
import { useNavigate } from 'react-router-dom';
interface SocialMiningProps {
  DashBoardTitle: string;
}

const SocialMining: React.FC<SocialMiningProps> = ({ DashBoardTitle }) => {
   
    const history = useNavigate();

     const handleLogoClick  = () =>{
        history('/');
     }
  return (
    <>
      <Main1container>
        <LogoWrapper>
          <LogoImage src={TenexLogo} onClick={handleLogoClick} />
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
