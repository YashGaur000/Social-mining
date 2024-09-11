export const votingEscrowAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_forwarder',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_token',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_factoryRegistry',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'CLOCK_MODE',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    name: 'DELEGATION_TYPEHASH',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'DOMAIN_TYPEHASH',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'allowedManager',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'approve',
    inputs: [
      {
        name: '_approved',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'artProxy',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'balanceOf',
    inputs: [
      {
        name: '_owner',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'balanceOfNFT',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'balanceOfNFTAt',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_t',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'canSplit',
    inputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'checkpoint',
    inputs: [],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'checkpoints',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_index',
        type: 'uint48',
        internalType: 'uint48',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IVotingEscrow.Checkpoint',
        components: [
          {
            name: 'fromTimestamp',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'owner',
            type: 'address',
            internalType: 'address',
          },
          {
            name: 'delegatedBalance',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'delegatee',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'clock',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint48',
        internalType: 'uint48',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'createLock',
    inputs: [
      {
        name: '_value',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_lockDuration',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'createLockFor',
    inputs: [
      {
        name: '_value',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_lockDuration',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_to',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'createManagedLockFor',
    inputs: [
      {
        name: '_to',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '_mTokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'deactivated',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'decimals',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint8',
        internalType: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'delegate',
    inputs: [
      {
        name: 'delegator',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'delegatee',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'delegateBySig',
    inputs: [
      {
        name: 'delegator',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'delegatee',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'nonce',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'expiry',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: 'v',
        type: 'uint8',
        internalType: 'uint8',
      },
      {
        name: 'r',
        type: 'bytes32',
        internalType: 'bytes32',
      },
      {
        name: 's',
        type: 'bytes32',
        internalType: 'bytes32',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'delegates',
    inputs: [
      {
        name: 'delegator',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'depositFor',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_value',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'depositManaged',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_mTokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'distributor',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'epoch',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'escrowType',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint8',
        internalType: 'enum IVotingEscrow.EscrowType',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'factoryRegistry',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'forwarder',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getApproved',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getPastTotalSupply',
    inputs: [
      {
        name: '_timestamp',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'getPastVotes',
    inputs: [
      {
        name: '_account',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_timestamp',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'idToManaged',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'increaseAmount',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_value',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'increaseUnlockTime',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_lockDuration',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'isApprovedForAll',
    inputs: [
      {
        name: '_owner',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_operator',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isApprovedOrOwner',
    inputs: [
      {
        name: '_spender',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'isTrustedForwarder',
    inputs: [
      {
        name: 'forwarder',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'lockPermanent',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'locked',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IVotingEscrow.LockedBalance',
        components: [
          {
            name: 'amount',
            type: 'int128',
            internalType: 'int128',
          },
          {
            name: 'end',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'isPermanent',
            type: 'bool',
            internalType: 'bool',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'managedToFree',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'managedToLocked',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'merge',
    inputs: [
      {
        name: '_from',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_to',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'name',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'nonces',
    inputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'numCheckpoints',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint48',
        internalType: 'uint48',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'ownerOf',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'ownerToNFTokenIdList',
    inputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'permanentLockBalance',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'pointHistory',
    inputs: [
      {
        name: '_loc',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IVotingEscrow.GlobalPoint',
        components: [
          {
            name: 'bias',
            type: 'int128',
            internalType: 'int128',
          },
          {
            name: 'slope',
            type: 'int128',
            internalType: 'int128',
          },
          {
            name: 'ts',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'blk',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'permanentLockBalance',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'safeTransferFrom',
    inputs: [
      {
        name: '_from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'safeTransferFrom',
    inputs: [
      {
        name: '_from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_data',
        type: 'bytes',
        internalType: 'bytes',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setAllowedManager',
    inputs: [
      {
        name: '_allowedManager',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setApprovalForAll',
    inputs: [
      {
        name: '_operator',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_approved',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setArtProxy',
    inputs: [
      {
        name: '_proxy',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setManagedState',
    inputs: [
      {
        name: '_mTokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_state',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setTeam',
    inputs: [
      {
        name: '_team',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'setVoterAndDistributor',
    inputs: [
      {
        name: '_voter',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_distributor',
        type: 'address',
        internalType: 'address',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'slopeChanges',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'int128',
        internalType: 'int128',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'split',
    inputs: [
      {
        name: '_from',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_amount',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '_tokenId1',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_tokenId2',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'supply',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'supportsInterface',
    inputs: [
      {
        name: '_interfaceID',
        type: 'bytes4',
        internalType: 'bytes4',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'symbol',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'team',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'toggleSplit',
    inputs: [
      {
        name: '_account',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_bool',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'token',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'tokenId',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'tokenURI',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'totalSupply',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'totalSupplyAt',
    inputs: [
      {
        name: '_timestamp',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'transferFrom',
    inputs: [
      {
        name: '_from',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_to',
        type: 'address',
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'unlockPermanent',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'userPointEpoch',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'userPointHistory',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_loc',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'tuple',
        internalType: 'struct IVotingEscrow.UserPoint',
        components: [
          {
            name: 'bias',
            type: 'int128',
            internalType: 'int128',
          },
          {
            name: 'slope',
            type: 'int128',
            internalType: 'int128',
          },
          {
            name: 'ts',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'blk',
            type: 'uint256',
            internalType: 'uint256',
          },
          {
            name: 'permanent',
            type: 'uint256',
            internalType: 'uint256',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'version',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'string',
        internalType: 'string',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'voted',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'voter',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
        internalType: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'voting',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '_voted',
        type: 'bool',
        internalType: 'bool',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'weights',
    inputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'withdraw',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'withdrawManaged',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        internalType: 'uint256',
      },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    name: 'Approval',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'approved',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'ApprovalForAll',
    inputs: [
      {
        name: 'owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'operator',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'approved',
        type: 'bool',
        indexed: false,
        internalType: 'bool',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'BatchMetadataUpdate',
    inputs: [
      {
        name: '_fromTokenId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_toTokenId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'CreateManaged',
    inputs: [
      {
        name: '_to',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: '_mTokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_from',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: '_lockedManagedReward',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: '_freeManagedReward',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'DelegateChanged',
    inputs: [
      {
        name: 'delegator',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'fromDelegate',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'toDelegate',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'DelegateVotesChanged',
    inputs: [
      {
        name: 'delegate',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'previousBalance',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'newBalance',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Deposit',
    inputs: [
      {
        name: 'provider',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'depositType',
        type: 'uint8',
        indexed: true,
        internalType: 'enum IVotingEscrow.DepositType',
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'locktime',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'ts',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'DepositManaged',
    inputs: [
      {
        name: '_owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_mTokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_weight',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_ts',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'LockPermanent',
    inputs: [
      {
        name: '_owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_ts',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Merge',
    inputs: [
      {
        name: '_sender',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: '_from',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_to',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_amountFrom',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_amountTo',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_amountFinal',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_locktime',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_ts',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'MetadataUpdate',
    inputs: [
      {
        name: '_tokenId',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'SetAllowedManager',
    inputs: [
      {
        name: '_allowedManager',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Split',
    inputs: [
      {
        name: '_from',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_tokenId1',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_tokenId2',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_sender',
        type: 'address',
        indexed: false,
        internalType: 'address',
      },
      {
        name: '_splitAmount1',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_splitAmount2',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_locktime',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_ts',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Supply',
    inputs: [
      {
        name: 'prevSupply',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'supply',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Transfer',
    inputs: [
      {
        name: 'from',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'to',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'UnlockPermanent',
    inputs: [
      {
        name: '_owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'amount',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_ts',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'Withdraw',
    inputs: [
      {
        name: 'provider',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: 'value',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: 'ts',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'event',
    name: 'WithdrawManaged',
    inputs: [
      {
        name: '_owner',
        type: 'address',
        indexed: true,
        internalType: 'address',
      },
      {
        name: '_tokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_mTokenId',
        type: 'uint256',
        indexed: true,
        internalType: 'uint256',
      },
      {
        name: '_weight',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
      {
        name: '_ts',
        type: 'uint256',
        indexed: false,
        internalType: 'uint256',
      },
    ],
    anonymous: false,
  },
  {
    type: 'error',
    name: 'AlreadyVoted',
    inputs: [],
  },
  {
    type: 'error',
    name: 'AmountTooBig',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ERC721ReceiverRejectedTokens',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ERC721TransferToNonERC721ReceiverImplementer',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidManagedNFTId',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidNonce',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidSignature',
    inputs: [],
  },
  {
    type: 'error',
    name: 'InvalidSignatureS',
    inputs: [],
  },
  {
    type: 'error',
    name: 'LockDurationNotInFuture',
    inputs: [],
  },
  {
    type: 'error',
    name: 'LockDurationTooLong',
    inputs: [],
  },
  {
    type: 'error',
    name: 'LockExpired',
    inputs: [],
  },
  {
    type: 'error',
    name: 'LockNotExpired',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NoLockFound',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NonExistentToken',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotApprovedOrOwner',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotDistributor',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotEmergencyCouncilOrGovernor',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotGovernor',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotGovernorOrManager',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotLockedNFT',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotManagedNFT',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotManagedOrNormalNFT',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotNormalNFT',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotOwner',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotPermanentLock',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotTeam',
    inputs: [],
  },
  {
    type: 'error',
    name: 'NotVoter',
    inputs: [],
  },
  {
    type: 'error',
    name: 'OwnershipChange',
    inputs: [],
  },
  {
    type: 'error',
    name: 'PermanentLock',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SafeCastOverflow',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SafeCastUnderflow',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SameAddress',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SameNFT',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SameState',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SignatureExpired',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SplitNoOwner',
    inputs: [],
  },
  {
    type: 'error',
    name: 'SplitNotAllowed',
    inputs: [],
  },
  {
    type: 'error',
    name: 'TooManyTokenIDs',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ZeroAddress',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ZeroAmount',
    inputs: [],
  },
  {
    type: 'error',
    name: 'ZeroBalance',
    inputs: [],
  },
];
