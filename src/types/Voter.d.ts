import { Address } from 'viem';
import {
  Contract,
  ContractTransaction,
  Overrides,
} from '@ethersproject/contracts';
import { Metadata } from './VotingEscrow';
import { LiquidityPoolNewType } from '../graphql/types/LiquidityPoolNew';

export interface VoterContract extends Contract {
  createGauge(
    _poolFactory: Address,
    _pool: Address,
    overrides?: Overrides
  ): Promise<Address>;
  gauges(_pool: Address): Promise<Address>;
  gaugeToBribe(_gauge: Address): Promise<Address>;
  deposit(_amount: bigint): Promise<ContractTransaction>;
  reset(_tokenId: bigint): Promise<ContractTransaction>;

  vote(
    _tokenId: number,
    _poolVote: ddress[],
    _weights: number[]
  ): Promise<ContractTransaction>;

  claimBribes(
    _bribes: Address[],
    _tokens: Address[][],
    _tokenId: bigint,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claimFees(
    _fees: Address[],
    _tokens: Address[][],
    _tokenId: bigint,
    overrides?: Overrides
  ): Promise<ContractTransaction>;
}

interface VotedPools extends LiquidityPoolNewType {
  gauge: Address;
  fee0: string;
  fee1: string;
  fees: Address[];
  bribes: Address[];
  rewardTokens: Address[];
  rewardAmounts: bigint[];
}

interface UserVotingPosition {
  tokenId: bigint;
  metadata: Metadata;
  votedPools: VotedPools[];
}
