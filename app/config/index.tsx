
import { cookieStorage, createStorage, http } from '@wagmi/core';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { useReadContract } from 'wagmi';
import { mainnet, arbitrum, avalanche, base, optimism, polygon , bsc , tron , solana } from '@reown/appkit/networks';


export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) 
  throw new Error('Project ID is not defined');

export const networks = [mainnet, arbitrum, avalanche, base, optimism, polygon , bsc , tron , solana];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  // transports : {

  // },
  ssr: true,
  projectId,
  networks
});

export const config = wagmiAdapter.wagmiConfig;