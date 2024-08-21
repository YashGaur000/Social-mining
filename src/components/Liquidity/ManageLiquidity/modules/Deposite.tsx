import CalIcon from '../../../../assets/phone.png';
import PlusIcon from '../../../../assets/plusminus.png';
import UnLockIcon from '../../../../assets/unlock.png';
import SearchIcon from '../../../../assets/search.png';
import LockIcon from '../../../../assets/lock.png';
import Stepper from '../../../common/Stepper';
import React, { useState } from 'react';
import useQueryParams from '../../../../hooks/useQueryParams';
import { useTokenInfo } from '../../../../hooks/useTokenInfo';
import { testErc20Abi } from './../../../../constants/abis/testErc20';
import { useTokenAllowance } from '../../../../hooks/useTokenAllowance';
import { ethers } from 'ethers';
import { GlobalButton } from '../../../common/index';
import { useRouterContract } from '../../../../hooks/useRouterContract';
import { useAccount } from '../../../../hooks/useAccount';
import contractAddress from '../../../../constants/contract-address/address';
interface Data {
  step: number;
  icon?: string;
  descriptions: string[];
  buttons?: {
    label: string;
    icon: string;
    onClick: () => Promise<void>;
    tooltip?: string;
    disabled?: boolean;
  }[];
}

interface DepositProps {
  disabled1?: boolean;
  disabled2?: boolean;
  amount1?: ethers.Numeric;
  amount2?: ethers.Numeric;
}

const Deposite: React.FC<DepositProps> = ({
  disabled1,
  disabled2,
  amount1,
  amount2,
}) => {
  const [isToken1Allowed, setIsToken1Allowed] = useState(false);
  const [isToken2Allowed, setIsToken2Allowed] = useState(false);
  const [isDeposited, setIsDeposited] = useState(false);
  const getParam = useQueryParams();

  const selectedToken1 = useTokenInfo(getParam('token1'));
  const selectedToken2 = useTokenInfo(getParam('token2'));
  const routerAddress = contractAddress.Router;

  const { approveAllowance: approveAllowance1 } = useTokenAllowance(
    selectedToken1!.address,
    testErc20Abi
  );

  const { approveAllowance: approveAllowance2 } = useTokenAllowance(
    selectedToken2!.address,
    testErc20Abi
  );

  const handleAllowToken1 = async () => {
    try {
      const amount1InWei =
        amount1 &&
        ethers.parseUnits(amount1.toString(), selectedToken1?.decimals);
      if (amount1InWei && selectedToken1?.address) {
        await approveAllowance1(routerAddress, amount1InWei.toString());
        setIsToken1Allowed(true);
      }
    } catch (error) {
      console.error('Error during token approval', error);
    }
  };

  const handleAllowToken2 = async () => {
    try {
      const amount2InWei =
        amount2 &&
        ethers.parseUnits(amount2.toString(), selectedToken2?.decimals);
      if (amount2InWei && selectedToken2?.address) {
        await approveAllowance2(routerAddress, amount2InWei.toString());
        setIsToken2Allowed(true);
      }
    } catch (error) {
      console.error('Error during token approval', error);
    }
  };

  const { addLiquidity } = useRouterContract();
  const { address } = useAccount();

  const handleDeposit = async () => {
    try {
      const amount1InWei =
        amount1 &&
        ethers.parseUnits(amount1.toString(), selectedToken1?.decimals);
      const amount2InWei =
        amount2 &&
        ethers.parseUnits(amount2.toString(), selectedToken2?.decimals);
      const type = getParam('type') == '0' ? true : false;
      const deadline = BigInt(Math.floor(Date.now() / 1000) + 1800); // 30 minutes deadline

      if (
        amount1InWei &&
        amount2InWei &&
        selectedToken1?.address &&
        selectedToken2?.address &&
        address
      ) {
        const tx = await addLiquidity(
          selectedToken1?.address,
          selectedToken2?.address,
          type,
          amount1InWei,
          amount2InWei,
          amount1InWei,
          amount2InWei,
          address,
          deadline
        );
        console.log('Liquidity added:', tx);
        setIsDeposited(true);
      }
    } catch (error) {
      console.error('Error adding liquidity:', error);
    }
  };

  const data: Data[] = [
    {
      step: 1,
      icon: CalIcon,
      descriptions: ['First deposit into stable pool use 11 rate'],
    },
    {
      step: 2,
      icon: PlusIcon,
      descriptions: ['10% slippage applied...'],
    },
    {
      step: 3,
      icon: UnLockIcon,
      descriptions: isToken1Allowed
        ? ['Allowance granted for ' + selectedToken1?.symbol]
        : ['Allowance not granted for ' + selectedToken1?.symbol],
      buttons: !isToken1Allowed
        ? [
            {
              label: 'Allow ' + selectedToken1?.symbol,
              icon: LockIcon,
              onClick: handleAllowToken1,
              tooltip: 'Click to allow USDT transactions',
              disabled: disabled1,
            },
          ]
        : undefined,
    },
    {
      step: 4,
      icon: UnLockIcon,
      descriptions: isToken2Allowed
        ? ['Allowance granted for ' + selectedToken2?.symbol]
        : ['Allowance not granted for ' + selectedToken2?.symbol],
      buttons: !isToken2Allowed
        ? [
            {
              label: 'Allow ' + selectedToken2?.symbol,
              icon: LockIcon,
              onClick: handleAllowToken2,
              tooltip: 'Click to allow FTM transactions',
              disabled: disabled2,
            },
          ]
        : undefined,
    },
    {
      step: 5,
      icon: SearchIcon,
      descriptions: isDeposited
        ? ['Deposit confirmed']
        : ['Waiting for next actions...'],
    },
  ];

  return (
    <>
      <Stepper data={data} />
      {!isDeposited && isToken2Allowed && isToken2Allowed && (
        <GlobalButton
          width="200px"
          height="50px"
          onClick={() => {
            handleDeposit()
              .then(() => {
                // Handle success here if needed
              })
              .catch((error) => {
                console.error('Error adding liquidity:', error);
              });
          }}
        >
          Deposit
        </GlobalButton>
      )}
    </>
  );
};

export default Deposite;
