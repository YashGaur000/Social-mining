import { Address } from 'viem';

interface ContractAddresses {
  ArtProxy: Address;
  Distributor: Address;
  FactoryRegistry: Address;
  Forwarder: Address;
  GaugeFactory: Address;
  ManagedRewardsFactory: Address;
  Minter: Address;
  PoolFactory: Address;
  Router: Address;
  TENEX: Address;
  Voter: Address;
  VotingEscrow: Address;
  VotingRewardsFactory: Address;
}

const contractAddresses: ContractAddresses = {
  ArtProxy: '0x5dFb80D4b8E81E835dD7d3ED9a581C4bD8C3B433',
  Distributor: '0x9E50b002484DbcA9DCD98365453a59E8A49bE101',
  FactoryRegistry: '0xFA93CD255C9EF93Eb97Dc499Cc24f486125c84cE',
  Forwarder: '0x84A4A7254bB4aee5F1404BB7d793d285EbF4E580',
  GaugeFactory: '0x388c4fF376BadF82F42A98aB31885F07EfA5f45D',
  ManagedRewardsFactory: '0x557Dd33643252B3bdE5b2D13efDbC2e1c85d0FAC',
  Minter: '0x7580e59EdDC15d5AB9Ccd880Aa8bd1F50d399Ab8',
  PoolFactory: '0xaC0d857442DA4f1541F4F737DA3351E292a688B8',
  Router: '0xC8a5F2797dc02AadeDB926a6d920d418e8350C51',
  TENEX: '0x8Fe5C378B39DBdC984F2FfB8631227758340631A',
  Voter: '0xcC5821395D8Aba8DFb89D55a99ce724cBeab1bee',
  VotingEscrow: '0xF1da90aE93B0f8749f4e7CCAE18B8Cb347fD8Ac8',
  VotingRewardsFactory: '0xD5Dd31AE6E3248e0C8Ad7fe457B5898804345539',
};

// Export the object for use in other parts of the application
export default contractAddresses;
