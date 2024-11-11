'use client'

import { wagmiAdapter , projectId } from "../config";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createAppKit } from '@reown/appkit/react';
import { mainnet, arbitrum, avalanche, base, optimism, polygon , tron} from '@reown/appkit/networks';
import React, { type ReactNode } from 'react';
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi';


const queryClient = new QueryClient()

if (!projectId) 
  throw new Error('Project ID is not defined')


const metadata = {
  name: 'Firmaware',
  description: 'AppKit Example',
  url: 'http://127.0.0.1:3000',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum, avalanche, base, optimism, polygon , tron],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    email: true,
    analytics: true, // Optional - defaults to your Cloud configuration
    socials : ['google' ,'x' , "github"],
    emailShowWallets : true,
  },
  themeMode : 'light',
  themeVariables: {
    // '--w3m-accent': '#0019bb',
    // '--w3m-color-mix': '#FFFFF',
    // '--w3m-color-mix-strength': 10,
    '--w3m-border-radius-master': "1px",
    '--w3m-font-size-master' : '11px',
 
  }
  
});


  

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider