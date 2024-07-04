/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import React, { useState } from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { ConnectWallet } from './ConnectWallet';
import SubTabs from './SubTabsComponent';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 1200px) {
    padding: 15px 30px;
  }

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }

  @media (max-width: 900px) {
    padding: 8px 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;

  @media (max-width: 768px) {
    height: 30px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 70px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
  }

  @media (max-width: 1200px) {
    gap: 50px;
  }

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 900px) {
    gap: 15px;
  }

  @media (max-width: 768px) {
    gap: 32px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0px 4px;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  font-family: ${({ theme }) => theme.fonts.main};
  background: ${({ theme }) => theme.colors.buttonBackground};
  color: ${({ theme }) => theme.colors.text};
  padding: 10px 20px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: 29.9px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }

  @media (max-width: 1200px) {
    padding: 8px 16px;
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    padding: 6px 12px;
    font-size: 16px;
  }

  @media (max-width: 900px) {
    padding: 6px 12px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 16px;
    margin-top: 10px;
  }
`;

const Navigation = styled.nav`
  margin-left: auto;
  display: flex;
  gap: 20px;
  position: relative;
`;

const NavItem = styled.div`
  position: relative;
  display: inline-block;
`;

const Header: React.FC = () => {
  const [showTradeSubTabs, setShowTradeSubTabs] = useState(false);
  const [showLiquiditySubTabs, setShowLiquiditySubTabs] = useState(false);
  const [showGovernanceSubTabs, setShowGovernanceSubTabs] = useState(false);

  const handleMouseEnter = (
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) => setShow(true);
  const handleMouseLeave = (
    setShow: React.Dispatch<React.SetStateAction<boolean>>
  ) => setShow(false);

  return (
    <HeaderContainer>
      <NavLink href="/">
        <Logo src={logoImage} alt="TenEx Logo" />
      </NavLink>

      <Nav>
        <NavItem
          onMouseEnter={() => handleMouseEnter(setShowTradeSubTabs)}
          onMouseLeave={() => handleMouseLeave(setShowTradeSubTabs)}
        >
          <NavLink to="#">
            Trade <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
          {showTradeSubTabs && (
            <SubTabs
              items={[
                {
                  to: '/swap',
                  label: 'Swap',
                  description:
                    'Equalizer Meta Aggregator swaps for efficient routing',
                },
                {
                  to: '/cross-chain-swaps',
                  label: 'Cross chain swaps',
                  description:
                    'Bridge and swap via Wormhole Axelar and LayerZero',
                },
              ]}
            />
          )}
        </NavItem>
        <NavItem
          onMouseEnter={() => handleMouseEnter(setShowLiquiditySubTabs)}
          onMouseLeave={() => handleMouseLeave(setShowLiquiditySubTabs)}
        >
          <NavLink to="#">
            Liquidity <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
          {showLiquiditySubTabs && (
            <SubTabs
              items={[
                {
                  to: '/liquidity',
                  label: 'Liquidity',
                  description: 'Provide liquidity and earn TENEX rewards',
                },
                {
                  to: '/concentrated-liquidity-farms',
                  label: 'Concentrated Liquidity Farms',
                  description: 'Highly efficient CL farms for max fees',
                },
              ]}
            />
          )}
        </NavItem>

        <NavItem
          onMouseEnter={() => handleMouseEnter(setShowGovernanceSubTabs)}
          onMouseLeave={() => handleMouseLeave(setShowGovernanceSubTabs)}
        >
          <NavLink to="#">
            Governance <FontAwesomeIcon icon={faChevronDown} />
          </NavLink>
          {showGovernanceSubTabs && (
            <SubTabs
              items={[
                {
                  to: '/manage-vetenex',
                  label: 'Manage veTENEX',
                  description: 'Lock TENEX into veTENEX to earn rewards',
                },
                {
                  to: '/vote',
                  label: 'Vote',
                  description: 'Vote weekly to earn real yields',
                },
                {
                  to: '/incentives',
                  label: 'Incentives',
                  description: 'Protocol liquidity incentivization',
                },
              ]}
            />
          )}
        </NavItem>

        <NavLink href="/rewards">Rewards</NavLink>
        <NavLink href="/tools">
          Tools <FontAwesomeIcon icon={faChevronDown} />
        </NavLink>
      </Nav>
      <ConnectWallet />
    </HeaderContainer>
  );
};

export default Header;
