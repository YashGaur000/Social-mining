import { Contract, ContractTransaction } from '@ethersproject/contracts';
import { ethers } from 'ethers';
import { Address } from 'viem';
import { TokenInfo } from '../constants/tokens';

interface RouterContract extends Contract {
  addLiquidity(
    tokenA: Address,
    tokenB: Address,
    stable: boolean,
    amountADesired: bigint,
    amountBDesired: bigint,
    amountAMin: bigint,
    amountBMin: bigint,
    to: Address,
    deadline: bigint,
    { gasLimit: BigInt }
  ): Promise<ContractTransaction>;
  factoryRegistry(): Promise<[Address]>;
  sortTokens(tokenA: Address, tokenB: Address): Promise<[Address]>;
}

export interface AddLiquidityParams {
  tokenA: Address;
  tokenB: Address;
  stable: boolean;
  amountADesired: ethers.Numeric;
  amountBDesired: ethers.Numeric;
  amountAMin: ethers.Numeric;
  amountBMin: ethers.Numeric;
  to: Address;
  deadline: number;
}

export interface LiquidityResult {
  amountA: ethers.Numeric;
  amountB: ethers.Numeric;
  liquidity: ethers.Numeric;
}

interface AddLiquidityParams {
  tokenA: string;
  tokenB: string;
  stable: boolean;
  amountADesired: ethers.Numeric;
  amountBDesired: ethers.Numeric;
  amountAMin: ethers.Numeric;
  amountBMin: ethers.Numeric;
  to: string;
  deadline: number;
}

interface LiquidityPoolNew {
  id: Address; // pool address
  chainID: ethers.Numeric; // chain id of the pool
  name: string; // name of the pool
  token0: TokenInfo; // token0 entity
  token1: TokenInfo; // token1 entity
  isStable: boolean; // whether the pool is a stable AMM or a volatile AMM
  reserve0: ethers.Numeric; // reserve of token0 in token units
  reserve1: ethers.Numeric; // reserve of token1 in token units
  totalLiquidityUSD: ethers.Numeric; // total liquidity of the swap pool in USD
  totalVolume0: ethers.Numeric; // total swap volume of token0 in token units
  totalVolume1: ethers.Numeric; // total swap volume of token1 in token units
  totalVolumeUSD: ethers.Numeric; // total swap volume of the pool in USD
  totalFees0: ethers.Numeric; // total fees collected in token0 units
  totalFees1: ethers.Numeric; // total fees collected in token1 units
  totalFeesUSD: ethers.Numeric; // total fees collected in USD
  numberOfSwaps: ethers.Numeric; // total number of swaps in the pool
  token0Price: ethers.Numeric; // price of token0 relative to token1
  token1Price: ethers.Numeric; // price of token1 relative to token0
  totalEmissions: ethers.Numeric; // total emissions for the pool in reward token units (VELO form Optimism and AERO for Base)
  totalEmissionsUSD: ethers.Numeric; // total emissions for the pool in USD
  totalBribesUSD: ethers.Numeric; // total bribes for the pool in USD
  lastUpdatedTimestamp: ethers.Numeric; // timestamp of last update
}
