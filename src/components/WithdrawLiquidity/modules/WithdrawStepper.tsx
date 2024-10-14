// import { GlobalButton } from "../../common"
import Stepper from '../../common/Stepper';
import { LiquidityHeaderTitle } from '../../Liquidity/LiquidityHomePage/styles/Liquiditypool.style';
import SucessDepositIcon from '../../../assets/gradient-party-poper.svg';
import SearchIcon from '../../../assets/search.png';
import DepositedIcon from '../../../assets/deposit-logo.svg';
import PlusMinusIcon from '../../../assets/plusminus.png';
import LockIcon from '../../../assets/lock.png';
import Lock1Icon from '../../../assets/Lock1.svg';
import { useTokenAllowance } from '../../../hooks/useTokenAllowance';
import poolAbi from '../../../constants/artifacts/contracts/Pool.json';
import { useAccount } from '../../../hooks/useAccount';
import contractAddress from '../../../constants/contract-address/address';
import { useEffect, useState } from 'react';
import { Address } from 'viem';
import { usePoolContract } from '../../../hooks/usePoolContract';
import { useLiquidityPoolDataById } from '../../../hooks/useLiquidityPoolDataById';
import { GlobalButton } from '../../common/index';
import LockIconGr from '../../../assets/LockSucess.svg';
import { useRootStore } from '../../../store/root';
import {
  TransactionStatus,
  TRANSACTION_DELAY,
} from '../../../types/Transaction';
import { useRouterContract } from '../../../hooks/useRouterContract';
import { getDeadline } from '../../../utils/transaction/getDeadline';
import { LoadingSpinner } from '../../common/Loader';
import PopupScreen from '../../common/PopupScreen';
import { PopupWrapper } from '../../Liquidity/LiquidityHomePage/styles/LiquidityHeroSection.style';
import SlippageTolerance from '../../common/SlippageTolerance';
import { useLiquidityStore } from '../../../store/slices/liquiditySlice';
import { parseAmounts } from '../../../utils/transaction/parseAmounts';
import SuccessPopup from '../../common/SucessPopup';
import { useNavigate } from 'react-router-dom';

interface WithdrawStepperProps {
  poolId: string;
  withdrawPercentage: string;
  tokenA: string;
  tokenB: string;
}
const WithdrawStepper = ({
  poolId,
  withdrawPercentage,
  tokenA,
  tokenB,
}: WithdrawStepperProps) => {
  const { address } = useAccount();
  const [isAllowingToken, setIsAllowingToken] = useState(false);
  const [isTokenAllowed, setIsTokenAllowed] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(false);
  const [liquidity, setLiquidity] = useState('0');
  const { transactionStatus, setTransactionStatus, selectedTolerance } =
    useRootStore();
  const [isvisibleSlippage, setVisibleSlippage] = useState(false);
  const { deadLineValue } = useLiquidityStore();

  const { data: poolData } = useLiquidityPoolDataById(poolId);

  const { approveAllowance } = useTokenAllowance(
    poolId as Address,
    poolAbi.abi
  );

  const { balanceOf, fetchAllowance } = usePoolContract(poolId);

  const { removeLiquidity, quoteRemoveLiquidity } = useRouterContract();

  const navigate = useNavigate();
  useEffect(() => {
    if (isWithdraw) {
      // Set a timeout to navigate to the dashboard after 5 seconds

      const timer = setTimeout(() => {
        if (withdrawPercentage != '100') {
          navigate('/dashboard');
        } else {
          const queryParams = new URLSearchParams(location.search);

          const tokenA = poolData[0].token0.id.split('-');
          const tokenB = poolData[0].token1.id.split('-');

          const typeValue = poolData[0].isStable ? '0' : '1';

          queryParams.set('token1', tokenA[0]);
          queryParams.set('token2', tokenB[0]);
          queryParams.set('type', typeValue);
          queryParams.set('exists', true.toString()); //@Todo need to handle properly and check routes of both manage and create new pool

          queryParams.set('id', poolData[0].id);

          navigate({
            pathname: '/liquidity/manage',
            search: `?${queryParams.toString()}`,
          });
        }
      }, 4000);

      // Clean up the timer in case the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isWithdraw, navigate]);

  useEffect(() => {
    async function isAllowance() {
      const balance = await balanceOf();

      if (balance) {
        const amount =
          (Number(balance.etherBalance) * Number(withdrawPercentage)) / 100;
        const amountInWei = parseAmounts(amount.toString(), balance.decimals);
        if (amountInWei) setLiquidity(amountInWei.toString());
        await fetchAllowance(amount, contractAddress.Router, setIsTokenAllowed);
      }
    }
    void isAllowance();
  }, [withdrawPercentage]);

  const closeModal = () => {
    setVisibleSlippage(false);
  };

  const handleAdjust = (adjustbuttonName: string) => {
    if (adjustbuttonName === 'Slippage') {
      setVisibleSlippage(true);
    } else {
      console.log('wrong button');
    }
  };

  const handleAllowance = async () => {
    setIsAllowingToken(true);
    setTransactionStatus(TransactionStatus.IN_PROGRESS);
    try {
      const balance = await balanceOf();
      if (balance) {
        const amount =
          (Number(balance.etherBalance) * Number(withdrawPercentage)) / 100;
        const amountInWei = parseAmounts(
          amount.toFixed(balance.decimals),
          balance.decimals
        );

        if (amountInWei) setLiquidity(amountInWei.toString());
        const result = await approveAllowance(
          contractAddress.Router,
          amountInWei ? amountInWei.toString() : liquidity
        );
        setIsTokenAllowed(result ? true : false);
        setTransactionStatus(TransactionStatus.DONE);
      }
      setTimeout(
        () => setTransactionStatus(TransactionStatus.IDEAL),
        TRANSACTION_DELAY
      );
    } catch (error) {
      console.error('Error during token approval', error);
      setTransactionStatus(TransactionStatus.IDEAL);
    } finally {
      setIsAllowingToken(false);
      setTransactionStatus(TransactionStatus.IDEAL);
      // Re-enable the button after the operation completes
    }
  };

  const handleWithdrawDeposit = async () => {
    const deadline = getDeadline(deadLineValue);
    try {
      setTransactionStatus(TransactionStatus.IN_PROGRESS);

      if (address) {
        const quote = await quoteRemoveLiquidity(
          tokenA as Address,
          tokenB as Address,
          poolData[0].isStable,
          contractAddress.PoolFactory,
          liquidity
        );

        if (quote) {
          // if the slippage if 1 then multiply by 0.99 ...
          const minAmountA = Math.round(
            parseFloat(quote.amountA.toString()) *
              (100 - Number(selectedTolerance)) *
              0.01
          );
          const minAmountB = Math.round(
            parseFloat(quote.amountB.toString()) *
              (100 - Number(selectedTolerance)) *
              0.01
          );

          const result = await removeLiquidity(
            tokenA as Address,
            tokenB as Address,
            poolData[0].isStable,
            liquidity,
            BigInt(minAmountA),
            BigInt(minAmountB),
            address,
            deadline
          );

          if (result) {
            setTransactionStatus(TransactionStatus.DONE);
            setIsWithdraw(true);
          } else {
            setTimeout(
              () => setTransactionStatus(TransactionStatus.IDEAL),
              TRANSACTION_DELAY
            );
            setIsWithdraw(false);
          }
        }
      }
    } catch (error) {
      console.error('Error withdrawing liquidity:', error);
      setTransactionStatus(TransactionStatus.IDEAL);
    }
  };

  const WithdrawStepperData = [
    {
      step: 1,
      icon: DepositedIcon,
      descriptions: {
        labels: 'Found the staked deposit',
      },
    },

    {
      step: 2,
      icon: PlusMinusIcon,
      descriptions: {
        labels: `${selectedTolerance}% slippage applied...  `,
        adjust: 'Adjust',
        onClick: () => {
          handleAdjust('Slippage');
        },
      },
    },

    {
      step: 3,
      icon: !isTokenAllowed ? LockIcon : LockIconGr,
      descriptions: {
        labels: !isTokenAllowed
          ? `Allowance not granted for ${poolData[0]?.name}`
          : `Allowance  granted for ${poolData[0]?.name}`,
      },
      buttons: !isTokenAllowed
        ? {
            label: `Allow ${poolData[0]?.name}`,
            icon: Lock1Icon,
            onClick: handleAllowance,
            disabled: isAllowingToken,
            inProgress: isAllowingToken,
          }
        : undefined,
    },

    {
      step: 4,
      icon: !isWithdraw ? SearchIcon : SucessDepositIcon,
      descriptions: {
        labels: isWithdraw
          ? `Withdraw successfully`
          : 'Waiting for next actions...',
      },
      actionCompleted: !isWithdraw,
    },
  ];
  return (
    <>
      <LiquidityHeaderTitle fontSize={24}>
        Withdraw Liquidity
      </LiquidityHeaderTitle>
      <Stepper data={WithdrawStepperData}></Stepper>

      {isvisibleSlippage && (
        <PopupScreen isvisible={isvisibleSlippage} onClose={closeModal}>
          <PopupWrapper>
            <SlippageTolerance />
          </PopupWrapper>
        </PopupScreen>
      )}

      {/* Todo: make dynmaic, when allow token then after Withdraw Liquidity active  */}
      {!isWithdraw && isTokenAllowed && (
        <GlobalButton
          width="100%"
          height="48px"
          margin="0px"
          onClick={handleWithdrawDeposit}
          disabled={transactionStatus === TransactionStatus.IN_PROGRESS}
        >
          {transactionStatus === TransactionStatus.IN_PROGRESS ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '15px',
              }}
            >
              <LoadingSpinner width="10px" height="10px" />
              <p>Withdrawing Liquidity</p>
            </div>
          ) : (
            <p> Withdraw Liquidity</p>
          )}
        </GlobalButton>
      )}
      {isWithdraw && <SuccessPopup message="Withdraw Successfully" />}
    </>
  );
};

export default WithdrawStepper;
