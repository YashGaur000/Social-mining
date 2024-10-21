import TenexLogo from '../../../assets/tenexlogo.svg';
import { Outlet } from 'react-router-dom';
import {
  Main1container,
  LogoWrapper,
  LogoImage,
  MenuIcon,
} from '../styles/SocialMining.styles';
import { MainContaier, Heading } from '../../DashBoard/styles/DashBoard.styles';
import { useNavigate } from 'react-router-dom';
import menuIcon from '../../../assets/menuIcon.svg';
import closeIcon from '../../../assets/closeIcon.svg';
import { useState } from 'react';
import SocialConnectModel from '../../SocialConnectModel/modules/SocialConnectModel';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
interface SocialMiningProps {
  DashBoardTitle: string;
}

const SocialMining: React.FC<SocialMiningProps> = ({ DashBoardTitle }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogoClick = () => {
    if (isAuthenticated) navigate('/dashboard');
    else navigate('/');
  };

  return (
    <>
      <Main1container>
        <LogoWrapper>
          <LogoImage src={TenexLogo} onClick={handleLogoClick} />
        </LogoWrapper>
        <MainContaier>
          <Heading>
            {showMenu ? 'Connect your Social accounts' : DashBoardTitle}
          </Heading>
        </MainContaier>
        <MenuIcon onClick={toggleMenu}>
          {showMenu ? <img src={closeIcon} /> : <img src={menuIcon} />}
        </MenuIcon>
      </Main1container>

      {showMenu ? <SocialConnectModel /> : <Outlet />}
    </>
  );
};

export default SocialMining;
